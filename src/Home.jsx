import { Link } from "react-router-dom";
import { useStates } from "./utilities/states"

export default function Home() {

  const s = useStates('main');

  return <>
    <h2>Showing Now</h2>
    {s.movies.map(({ title, path }) => <div className="movie">
      <Link to={path}>
        <h3>{title}</h3>
      </Link>
    </div>)}
  </>
}