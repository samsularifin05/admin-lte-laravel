import { Link, React,openTab } from "../../components";

const Header = () => {

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-label="Sidebar Menu" data-widget="pushmenu" to="#" role="button">
            <i className="fas fa-bars"></i>
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link aria-label="Download Project" onClick={() => openTab('https://github.com/samsularifin05/laravel-react-admin-lte')} to="#" className="nav-link">
            Download Project
          </Link>
        </li>
      </ul>

     
    </nav>
  );
};

export default Header;
