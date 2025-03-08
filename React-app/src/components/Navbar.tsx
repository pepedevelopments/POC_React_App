import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div className="container-fluid g-col-12">
        <a className="navbar-brand">
          <i className="bi bi-calendar2-week"></i>
          Person management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/planningPage" ? "active" : ""
                }`}
                to="/planningPage"
              >
                Planning
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/personsPage" ? "active" : ""
                }`}
                aria-current="page"
                to="/personsPage"
              >
                Persons
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
