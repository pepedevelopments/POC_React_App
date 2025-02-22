import { useState, useEffect } from "react";
import api from "./api";
import CreatePerson from "./components/CreatePerson";
import ReadPerson from "./components/ReadPerson";
import { v4 as uuidv4 } from "uuid";

function App() {
  interface Person {
    id: string;
    age: number;
    name: string;
    profession: string;
  }

  const [persons, setPersons] = useState<Person[]>([]);

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
      console.log("newPerson:", newPerson);
      const response = await api.post("/persons/", newPerson);

      // Vérifiez la réponse de l'API
      console.log("Response:", response);

      // Ajoutez la nouvelle personne directement à l'état
      fetchPersons();

      console.log("Personne ajoutée:", response.data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <div>
      <h1>Gestion des personnes</h1>
      <CreatePerson addPerson={addPerson} />
      <ReadPerson person={persons} />
    </div>
  );
}

export default App;
