import { Link } from "react-router-dom";
import { HOME, BLOG_CREATE } from "../../constants/path";

const Navbar = () => {
  return (
    <ul className="nav ml-auto justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to={HOME}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={BLOG_CREATE}>
          New Blog
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
