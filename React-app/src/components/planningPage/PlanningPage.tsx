import Button from "../Button";
import "./PlanningPage.css";
import api from "../../api";
import { useState } from "react";



const PlanningPage = () => {
  const [result, setResult] = useState(null); // État pour le résultat du calcul

   // Fonction qui fait l'appel API pour le calcul
   const handleTestClick = async () => {
    try {
      const response = await api.post("/calculate/", {
        a: 10, // Exemple de valeur a
        b: 5,  // Exemple de valeur b
      });

      // Met à jour l'état avec le résultat du calcul
      setResult(response.data.result);
      console.log("Résultat du calcul:", response.data.result);
    } catch (error) {
      console.error("Erreur lors du calcul:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row my-5"></div>
        <div className="row">
          <div className="col-12">
            <h1 className="my-5 text-center">Planning hebdomadaire</h1>
            <div className="table-responsive">
              <table className="table text-center table-bordered">
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
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
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
                  </tr>
                  <tr>
                    <td>Personne 2</td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
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
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                  </tr>
                  <tr>
                    <td>Personne 3</td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
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
                  </tr>
                  <tr>
                    <td>Personne 4</td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
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
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                    <td className="table-danger"></td>
                    <td className="table-danger"></td>
                    <td className="table-success"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      {/* <div className="container my-5">
        <Button
          color="primary"
          onClick={handleTestClick} 
        >
          Test
        </Button>

        {result !== null && (
          <div className="result">
            <h3>Résultat du calcul : {result}</h3>
          </div>
        )}
      </div> */}
    </div>
    </div>
  );
};

export default PlanningPage;
