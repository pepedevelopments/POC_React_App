import Tableau from "./Tableau";


const PlanningPage = () => {

    
  return (
    <div>
      <div className="container mt-5">
        <h1>Planning</h1>
        <div className="container mt-5">
            <Tableau n={15} m={30} />
        </div>
      </div>
    </div>
  );
};

export default PlanningPage;