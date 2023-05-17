import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <nav>
      <Link to="/">
        <div className="header-logo">
          <img src="/images/adoveo-logo.png"></img>
        </div>
      </Link>
      <Navbar />
    </nav>
  );
}