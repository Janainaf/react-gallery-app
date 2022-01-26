import { BrowserRouter as Router, Link } from "react-router-dom";

function NavbBar(props) {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/sunsets" onClick={() => props.changeName("sunsets")}>
            {" "}
            Sunsets{" "}
          </Link>
        </li>
        <li>
          <Link to="/beaches" onClick={() => props.changeName("beaches")}>
            Beaches{" "}
          </Link>
        </li>
        <li>
          <Link to="/forests" onClick={() => props.changeName("forests")}>
            {" "}
            Forests{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbBar;
