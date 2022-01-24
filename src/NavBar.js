import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function NavbBar() {
  return (
    <nav class="main-nav">
      <ul>
        <li>
          <a href="#">Cats</a>
        </li>
        <li>
          <a href="#">Dogs</a>
        </li>
        <li>
          <a href="#">Computers</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbBar;
