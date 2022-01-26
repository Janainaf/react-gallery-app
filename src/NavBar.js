import { BrowserRouter as Router, Link } from "react-router-dom";

function NavbBar(props) {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/cats" onClick={() => props.changeName("cats")}>
            {" "}
            Cats{" "}
          </Link>
        </li>
        <li>
          <Link to="/dogs" onClick={() => props.changeName("dogs")}>
            Dogs{" "}
          </Link>
        </li>
        <li>
          <Link to="/computers" onClick={() => props.changeName("computers")}>
            {" "}
            Computers{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbBar;
