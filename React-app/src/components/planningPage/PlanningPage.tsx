import Button from "../Button";
import "./PlanningPage.css";
import api from "../../api";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PlanningPage = () => {
  interface Person {
    age: number;
    name: string;
    profession: string;
    id: string;
  }

  const [persons, setPersons] = useState<Person[]>([]);
  const [result, setResult] = useState(null);

  const fetchPersons = async () => {
    try {
      const response = await api.get("/persons/"); 
      setPersons(response.data.map((person: Omit<Person, 'id'>) => ({ ...person, id: uuidv4() })));
    } catch (error) {
      console.error("Erreur lors de la récupération des personnes:", error);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

   const handleTestClick = async () => {
    try {
      const response = await api.post("/calculate/", {
        a: 10, 
        b: 5,  
      });

      setResult(response.data.result);
      console.log("Résultat du calcul:", response.data.result);
    } catch (error) {
      console.error("Erreur lors du calcul:", error);
    }
  };

const renderTableRows = () => {
  return persons.map((person) => (
    <tr key={person.id}>
      <td>{person.name}</td>
      <td className="table-success"></td>
      <td className="table-danger"></td>
      <td className="table-danger"></td>
      <td className="table-danger"></td>
      <td className="table-success"></td>
      <td className="table-danger"></td>
      <td className="table-danger"></td>
      <td className="table-danger"></td>
      <td className="table-success"></td>
      <td className="table-danger"></td>
      <td className="table-danger"></td>
      <td className="table-danger"></td>
      <td className="table-danger"></td>
      <td className="table-success"></td>
      <td className="table-danger"></td>
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
    </tr>
  ));
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
                  <th>Employé</th>
                  <th colSpan={4} className="day-header">
                    Lundi
                  </th>
                  <th colSpan={4} className="day-header">
                    Mardi
                  </th>
                  <th colSpan={4} className="day-header">
                    Mercredi
                  </th>
                  <th colSpan={4} className="day-header">
                    Jeudi
                  </th>
                  <th colSpan={4} className="day-header">
                    Vendredi
                  </th>
                  <th colSpan={4} className="day-header">
                    Samedi
                  </th>
                  <th colSpan={4} className="day-header">
                    Dimanche
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                </tr>
              </thead>
              <tbody>
                {renderTableRows()} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div className="container my-5">
      <Button color="primary" onClick={handleTestClick}>
        Test
      </Button>

      {result !== null && (
        <div className="result">
          <h3>Résultat du calcul : {result}</h3>
        </div>
      )}
    </div>
  </div>
);
};

export default PlanningPage;
