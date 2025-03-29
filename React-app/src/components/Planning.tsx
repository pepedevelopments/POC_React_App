import ColoredSquareWithText from "./coloredSquareWithText";
import Tableau from "./Tableau";


const PlanningPage = () => {

    
  return (
    <div>
      <div className="container mt-5">
        <h1>Planning</h1>
        <div className="d-flex justify-content-between align-items-center">

  <select className="form-select form-select-sm" aria-label="Large select example" style={{ width: '150px' }}>
    <option selected>Période</option>
    <option value="1">Janvier</option>
    <option value="2">Février</option>
    <option value="3">Mars</option>
    <option value="4">Avril</option>
    <option value="5">Mai</option>
    <option value="6">Juin</option>
    <option value="7">Juillet</option>
    <option value="8">Aout</option>
    <option value="9">Septembre</option>
    <option value="10">Octobre</option>
    <option value="11">Novembre</option>
    <option value="12">Décembre</option>
  </select>

  <ColoredSquareWithText color="red" opacity={1} text="IDE" />

  <form className="d-flex" role="search" style={{ height: '40px' }}>
  <div className="input-group">
    <span className="input-group-text">
      <i className="bi bi-search"></i>
    </span>
    <input
      className="form-control"
      type="search"
      placeholder="Prénom Nom"
      aria-label="Search"
    />
  </div>
</form>
</div>
        <div className="container mt-5">
            <Tableau month={10} />
        </div>
      </div>
    </div>
  );
};

export default PlanningPage;