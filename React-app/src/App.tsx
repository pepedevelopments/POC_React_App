import { useState, useEffect } from "react";
import api from "./api";
import CreatePerson from "./components/CreatePerson";
import ReadPerson from "./components/ReadPerson";

function App() {
  interface Person {
    id: number;
    age: number;
    name: string;
    profession: string;
  }

  const [persons, setPersons] = useState<Person[]>([]);

  const fetchPersons = async () => {
    const response = await api.get("/persons/");
    setPersons(response.data);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const addPerson = async (person: {
    age: number;
    name: string;
    profession: string;
  }) => {
    try {
      const response = await api.post("/persons/", person);

      // Vérifiez la réponse de l'API
      console.log("Response:", response);

      // Ajoutez la nouvelle personne directement à l'état
      setPersons((prevPersons) => [...prevPersons, response.data]);

      console.log("Personne ajoutée:", response.data);

      fetchPersons(); // Met à jour la liste
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
