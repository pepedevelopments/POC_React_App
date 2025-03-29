import { Route, Routes, BrowserRouter } from "react-router-dom";
import PlanningPage from "./components/planningPage/PlanningPage";
import Navbar from "./components/Navbar";
import PersonsPage from "./components/PersonsPage";
import Sidebar from "./components/sideBar/Sidebar";
import Planning from "./components/Planning";
import TableauDeBord from "./components/TableauDeBord";
import Tableau from "./components/Tableau";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div>
      <div className="content">
        <Routes>
          <Route path="/" element={<TableauDeBord />} /> 
          <Route path="/planning" element={<Planning />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
