import { useEffect, useState } from "react";
import Button from "../Button";
import "./PlanningPage.css";
import api from "../../api";
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
  const [currentWeek, setCurrentWeek] = useState<number>(0);

  const fetchPersons = async (weekOffset: number) => {
    try {
      const response = await api.get(`/persons?week=${weekOffset}`);
      setPersons(response.data.map((person: Omit<Person, "id">) => ({ ...person, id: uuidv4() })));
    } catch (error) {
      console.error("Erreur lors de la récupération des personnes:", error);
    }
  };

  useEffect(() => {
    fetchPersons(currentWeek);
  }, [currentWeek]);

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
      <div className="row"></div>
      <div className="container">
        <div className="d-flex justify-content-between my-5">
          <button
            className="btn btn-secondary"
            onClick={() => setCurrentWeek((prev) => prev - 1)}
            disabled={currentWeek <= 0}
          >
            Semaine précédente
          </button>
          <h4>Semaine {currentWeek >= 0 ? `${currentWeek}` : currentWeek}</h4>
          <button
            className="btn btn-secondary"
            onClick={() => setCurrentWeek((prev) => prev + 1)}
            disabled={currentWeek >= 4}
          >
            Semaine suivante
          </button>
        </div>
        
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
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanningPage;
