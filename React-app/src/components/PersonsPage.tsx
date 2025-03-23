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
  const [optionsPersons, setOptionsPersons] = useState<string[]>([]);
  const [showEmployeeNbrForm, setShowEmployeeNbrForm] = useState(false);
  const [showTimeStampForm, setShowTimeStampForm] = useState(false);
  const [PersonForm, setPersonForm] = useState(false);
  const [selectedCreneau, setSelectedCreneau] = useState<string | null>(null);

  const fetchPersons = async () => {
    try {
      const response = await api.get("/persons/");
      setPersons(response.data);
      const names = response.data.map((person: { name: string }) => person.name);
      setOptionsPersons(names);
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
      fetchPersons();
      console.log("Personne ajoutée:", response.data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const optionsCreneaux = ["Jour","Matin", "Après-midi", "Nuit"];

  const handleSelectPersonChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
    setPersonForm(selectedValue !== "");
  };

  const handleSelectTimeStampChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
    setSelectedCreneau(selectedValue);
    setShowTimeStampForm(selectedValue !== "");
  };

  const handleSelectPersonsNbrChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
    setSelectedCreneau(selectedValue);
    setShowEmployeeNbrForm(selectedValue !== "");
  };

  return (
    <div className="container">
      <div className="row"></div>

      <div className="container my-5">
        <h3>Gérer les employés:</h3>
        <CreatePerson addPerson={addPerson} />
        <ReadPerson person={persons} />
      </div>

      <div className="container my-5 mt-5">
        <h3>Entrer des contraintes par employé:</h3>
         <Select
          options={optionsPersons}
          message="Sélectionner un employé"
          onChange={handleSelectPersonChange}
        /> 
      </div>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
           <div className="container my-5">
           {PersonForm && (<DaySelector onClose={() => setPersonForm(false)} />)}
           </div>
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
            elements={[selectedCreneau || ""]}
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
            elements={[selectedCreneau]}
          />
        )}
      </div>
      {/* <CreatePerson addPerson={addPerson} />
        <ReadPerson person={persons} /> */}
    </div>
  );
};

export default PersonsPage;
