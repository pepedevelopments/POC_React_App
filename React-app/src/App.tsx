import { Route, Routes, BrowserRouter } from "react-router-dom";
import PlanningPage from "./components/planningPage/PlanningPage";
import Navbar from "./components/Navbar";
import PersonsPage from "./components/PersonsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <div className="container my-5 mt-5">
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
  );
}

export default App;
