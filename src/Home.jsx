import { Link } from 'react-router-dom';
import { useStates } from './utilities/states';

export default function Home() {
  const s = useStates('main');

  return (
    <>
      <h2>ADOVEO DevOps Team</h2>

    <div className="DevOps Team Info">
      <h2> 
        Developers code, but DevOps teams build, automate, operate, and support.
      </h2>
      <p>
      DevOps teams are essential for teams to operate on a large scale. 
      Site reliability engineers (SREs) and DevOps engineers build pipelines, 
      configure automation, set up the systems, 
      and keep things running so developers can focus on building and implementing code.
      </p>
    </div>

    <div className='Latest News'>
      <h2>Here is the latest news regarding ours DevOps Team</h2>

      Insert lastest news here

      <p>For the latest news, <a href="http://localhost:5173/nyheter">click here</a>!</p>


    </div>


    </>
  );
}
