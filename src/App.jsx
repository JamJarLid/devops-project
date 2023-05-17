// useful hooks, comment these in, when needed:
import { useState } from 'react';
import { useEffect } from 'react';
import { kebabify } from './utilities/kebabify.js';
import { useStates } from './utilities/states.js';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu.jsx';


export default function App() {

  const s = useStates('main', {
    menu: [
      { label: 'Start page', path: '/', Component: Home },
    ],
    movies: []
  });

  return <BrowserRouter>
    <header>
      <h1>Adoveo Devops Team</h1>
      <Menu/>
    </header>
    <main>
      <Routes>
        {s.menu.map(({ path, Component }) => 
          <Route path={path} element={<Component />} />
        )}
      </Routes>
    </main>
    <footer></footer>
  </BrowserRouter>;
}