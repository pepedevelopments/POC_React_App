import { useState, useEffect } from "react";
import api from "../api";
import CreatePerson from "./CreatePerson";
import ReadPerson from "./ReadPerson";
import { v4 as uuidv4 } from "uuid";
import Select from "./Select";
import Form from "./Form";
import DaySelector from "./DaySelector";

const PersonsPage = () => {
  const [persons, setPersons] = useState([]);
  const [showEmployeeNbrForm, setShowEmployeeNbrForm] = useState(false);
  const [showTimeStampForm, setShowTimeStampForm] = useState(false);

  const fetchPersons = async () => {
    try {
      const response = await api.get("/persons/");
      setPersons(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des personnes:", error);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const addPerson = async (person: {
    age: number;
    name: string;
    profession: string;
  }) => {
    const newPerson = { id: uuidv4(), ...person };
    try {
      const response = await api.post("/persons/", newPerson);
      fetchPersons(); // Récupérer à nouveau les personnes
      console.log("Personne ajoutée:", response.data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  //const optionsPersons = ["Personne 1", "Personne 2", "Personne 3"];
  const optionsCreneaux = ["Matin", "Après-midi", "Nuit"];

  const handleSelectTimeStampChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
    setShowTimeStampForm(selectedValue !== "");
  };

  const handleSelectPersonsNbrChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
    setShowEmployeeNbrForm(selectedValue !== "");
  };

  return (
    <div className="container">
      <div className="row"></div>
      <div className="container my-5 mt-5">
        <h3>Entrer des containtes par employé:</h3>
        {/* <Select
          options={optionsPersons}
          message="Sélectionner un employé"
          onChange={handleSelectChange}
        /> */}
      </div>

      <div className="container my-5">
        <DaySelector />
      </div>

      <div className="container my-5">
        <h3>Modifier le nombre d'employés par créneau:</h3>
        <Select
          options={optionsCreneaux}
          message="Sélectionner un créneau"
          onChange={handleSelectPersonsNbrChange}
        />
      </div>

      <div className="container my-5">
        {showEmployeeNbrForm && (
          <Form
            onClose={() => setShowEmployeeNbrForm(false)}
            title="Nombre d'employés par créneau"
            elements={["Matin", "Après-midi", "Nuit"]}
          />
        )}
      </div>

      <div className="container">
        <h3>Modifier le nombre d'heures par créneau:</h3>
        <Select
          options={optionsCreneaux}
          message="Sélectionner un créneau"
          onChange={handleSelectTimeStampChange}
        />
      </div>

      <div className="container my-5">
        {showTimeStampForm && (
          <Form
            onClose={() => setShowTimeStampForm(false)}
            title="Nombre d'heures par créneau"
            elements={["Matin", "Après-midi", "Nuit"]}
          />
        )}
      </div>
      {/* <CreatePerson addPerson={addPerson} />
        <ReadPerson person={persons} /> */}
    </div>
  );
};

export default PersonsPage;
