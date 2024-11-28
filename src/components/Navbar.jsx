import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row items-center absolute ">
      <img src="shared/logo.svg" alt="logo" className="block" />

      <hr />
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/">00 Home</Link>
        </li>
        <li>
          <Link to="/destination">01 Destination</Link>
        </li>
        <li>
          <Link to="/crew">02 Crew</Link>
        </li>
        <li>
          <Link to="/technology">03 Technology</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
