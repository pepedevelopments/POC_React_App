import { useState, useEffect } from "react";
import api from "../api";
import CreatePerson from "./CreatePerson";
import ReadPerson from "./ReadPerson";
import { v4 as uuidv4 } from "uuid";

const PersonsPage = () => {
  const [persons, setPersons] = useState([]);

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

  return (
    <div>
      <CreatePerson addPerson={addPerson} />
      <ReadPerson person={persons} />
    </div>
  );
};

export default PersonsPage;
