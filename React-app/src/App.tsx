import { Route, Routes, BrowserRouter } from "react-router-dom";
import PlanningPage from "./components/planningPage/PlanningPage";
import Navbar from "./components/Navbar";
import PersonsPage from "./components/PersonsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<PlanningPage />} />
            <Route path="/planningPage" element={<PlanningPage />} />
            <Route
              path="/personsPage"
              element={
                <div>
                  <PersonsPage />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    /* <Router>
      <div>
        <Routes>
          <Route path="/planning" element={<Planning />} />
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="planning"
                      >
                        Planning
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="persons">
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
          </header>

          <div className="d-flex justify-content-center align-items-center">
            <div className="container mt-5 mx-auto">
              <h1 className="text-center my-5">Planning hebdomadaire</h1>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Personne</th>
                    <th colSpan={3} className="day-header">
                      Lundi
                    </th>
                    <th colSpan={3} className="day-header">
                      Mardi
                    </th>
                    <th colSpan={3} className="day-header">
                      Mercredi
                    </th>
                    <th colSpan={3} className="day-header">
                      Jeudi
                    </th>
                    <th colSpan={3} className="day-header">
                      Vendredi
                    </th>
                    <th colSpan={3} className="day-header">
                      Samedi
                    </th>
                    <th colSpan={3} className="day-header">
                      Dimanche
                    </th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>Matin</th>
                    <th>Après-midi</th>
                    <th>Nuit</th>
                    <th>Matin</th>
                    <th>Après-midi</th>
                    <th>Nuit</th>
                    <th>Matin</th>
                    <th>Après-midi</th>
                    <th>Nuit</th>
                    <th>Matin</th>
                    <th>Après-midi</th>
                    <th>Nuit</th>
                    <th>Matin</th>
                    <th>Après-midi</th>
                    <th>Nuit</th>
                    <th>Matin</th>
                    <th>Après-midi</th>
                    <th>Nuit</th>
                    <th>Matin</th>
                    <th>Après-midi</th>
                    <th>Nuit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Personne 1</td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                  </tr>
                  <tr>
                    <td>Personne 2</td>
                    <td className="table-success"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                  </tr>
                  <tr>
                    <td>Personne 3</td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                  </tr>
                  <tr>
                    <td>Personne 4</td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Route
            path="/persons"
            element={
              <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container-fluid">
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
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            aria-current="page"
                            to="planning"
                          >
                            Planning
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="persons">
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
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </nav>

                <div className="container mt-5">
                  <CreatePerson addPerson={addPerson} />
                  <ReadPerson person={persons} />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router> */
  );
}

export default App;
