import ColoredSquareWithText from "./../ColoredSquareWithText";
import Tableau from "../Tableau";
import './Planning.css';


const PlanningPage = () => {

    
  return (
    <div>
      <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center ">
          <h2 style={{ fontWeight: 'bold' }}>Planning mensuel: chirurgie vasculaire</h2>
          <select
            className="form-select form-select-sm"
            aria-label="Select example"
            style={{
                width: '150px',
                backgroundColor: 'white', 
                color: 'black',
                borderColor: '#000',
                textAlign: 'center',
              }}
          >
            <option selected>Service</option>
            <option value="1">Service 1</option>
            <option value="2">Service 2</option>
            <option value="3">Service 3</option>
          </select>
        </div>


        <div className="d-flex justify-content-between align-items-center" style={{ gap: '10px' }}>

    <div className="d-flex align-items-center" style={{ gap: '10px',
                textAlign: 'center', }}>
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

        <div className="d-flex" style={{ gap: '5px' }}>
            <ColoredSquareWithText color='#e0e1dd' opacity={1} text="IDE" />
            <ColoredSquareWithText color='#e0e1dd' opacity={0.7} text="AS" />
        </div>
    </div>

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
        <div className="mt-2">
            <Tableau month={8} />
        </div>

        <div className="d-flex ms-2 my-3" style={{ gap: '30px' }}>
                <ColoredSquareWithText color='#f8d487' opacity={1} text="Poste de jour (J)" hasBlackCorner={false} />
                <ColoredSquareWithText color='#8ba2cd' opacity={1} text="Poste de nuit (N)" hasBlackCorner={false}/>
                <ColoredSquareWithText color='#1b263b' opacity={1} text="Congé (C)" hasBlackCorner={false}/>
                <ColoredSquareWithText color='#aecbb8' opacity={1} text="Maladie (M)" hasBlackCorner={false}/>
                <ColoredSquareWithText color='#ffbd8e' opacity={1} text="Formation (F)" hasBlackCorner={false}/>
                <ColoredSquareWithText color='white' opacity={1} text="Demande exceptionnelle" hasBlackCorner={true}/>
            </div>
            </div>


      </div>

  );
};

export default PlanningPage;