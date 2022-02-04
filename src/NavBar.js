import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavbBar(props) {
  const navigate = useNavigate();

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link
            to="/sunsets"
            onClick={() => {
              navigate("/sunsets");
            }}
          >
            Sunsets{" "}
          </Link>
        </li>
        <li>
          <Link to="/beaches" onClick={() => navigate("/beaches")}>
            Beaches{" "}
          </Link>
        </li>
        <li>
          <Link to="/forests" onClick={() => navigate("/forests")}>
            {" "}
            Forests{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbBar;
