let featureFolder = './cypress/e2e';
let stepDefinitionFolder = './cypress/support/step_definitions';
let dependenciesForSteps =
  'import { Given, When, Then } from ' +
  '"@badeball/cypress-cucumber-preprocessor";';

const { promisify } = require('util');
const { resolve, join, sep, normalize, dirname } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

featureFolder = join(__dirname, featureFolder);
stepDefinitionFolder = join(__dirname, stepDefinitionFolder);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.reduce((a, f) => a.concat(f), []);
}

function toVarName(x) {
  return x
    .replace(/\s/g, '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

let allSteps = [];
function generateSteps(gherkin) {
  let commands = 'Given,When,Then,And,But,*'.split(',');
  let pseudoCommands = commands.slice(3);
  let lastCommand = 'Given';
  let steps = [];
  for (let line of gherkin.split('\n')) {
    let az = 'abcdefghijklmnopqrstuvwxyz'.split('');
    line = line.trim();
    let command = line.split(/\s/)[0];
    let rest = line.replace(command, '').trim();
    if (pseudoCommands.includes(command)) {
      command = lastCommand;
    }
    lastCommand = command;
    if (commands.includes(command)) {
      // break out strings
      let args = [];
      rest = rest.replace(
        /"<[^>]{1,}>"/g,
        (x) => args.push(toVarName(x.slice(2, -2))) && '{string}'
      );
      rest = rest.replace(
        /"[^"]*"/g,
        () => args.push(az.shift() || 'args' + args.length) && '{string}'
      );
      // rest = rest.replace(/\d{1,}/g, () => (args.push(az.shift() || 'args' + args.length) && '{number}'));
      steps.push(
        `${command}('${rest}', (${args.join(', ')}) => ` +
          `{\n  // TODO: implement step\n});`
      );
    }
  }
  allSteps = [...allSteps, steps];
  return steps.join('\n\n');
}

async function start() {
  let files = (await getFiles(featureFolder)).filter(
    (x) => x.slice(-8) === '.feature'
  );
  for (let file of files) {
    let steps = generateSteps(fs.readFileSync(file, 'utf-8'));
    let filePath =
      normalize(
        stepDefinitionFolder + sep + file.replace(featureFolder, '')
      ).slice(0, -8) + '.cy.js';
    let dirPath = dirname(filePath);
    //{ recursive: true }
    !fs.existsSync(dirPath) && fs.mkdirSync(dirPath, { recursive: true });
    steps = dependenciesForSteps + '\n\n' + steps;
    fs.existsSync(filePath) && (filePath += '.new');
    console.log('Created ', filePath);
    fs.writeFileSync(filePath, steps, 'utf-8');
  }
  console.log('\n');
}

start();
