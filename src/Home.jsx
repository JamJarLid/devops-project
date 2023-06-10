import { Link } from 'react-router-dom';
import { useStates } from './utilities/states';

export default function Home() {
  const s = useStates('main');

  return (
    <>
      <h2>ADOVEO DevOps Team</h2>
    </>
  );
}
