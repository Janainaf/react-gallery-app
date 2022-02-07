import { Link } from "react-router-dom";
function NavbBar(props) {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/sunsets">Sunsets </Link>
        </li>
        <li>
          <Link to="/beaches">Beaches </Link>
        </li>
        <li>
          <Link to="/forests"> Forests </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbBar;
