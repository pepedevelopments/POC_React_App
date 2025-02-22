import React, { useState, useEffect } from "react";
import api from "../api";

interface Person {
  id: string;
  age: number;
  name: string;
  profession: string;
}

interface ReadPersonProps {
  person: Person[];
}

const ReadPerson: React.FC<ReadPersonProps> = ({ person }) => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null); // État pour la personne sélectionnée
  const [persons, setPersons] = useState<Person[]>(person);

  useEffect(() => {
    setPersons(person); // Mettez à jour l'état lorsque la prop `person` change
  }, [person]);

  const handleRowClick = (person: Person) => {
    console.log("personId", person.id);
    if (selectedPerson?.id === person.id) {
      setSelectedPerson(null); // Si la ligne est déjà sélectionnée, on la désélectionne
    } else {
      setSelectedPerson(person); // Sélectionne la personne sur la ligne cliquée
    }
  };

  const handleEditClick = async () => {
    if (selectedPerson) {
      try {
        const response = await api.put(`/persons/${selectedPerson.id}`, {
          method: "PUT",
        });

        if (response.data.ok) {
          console.log("Personne modifiée", selectedPerson);
          // Mettre à jour la liste des personnes après modification
          setPersons((prevPersons) =>
            prevPersons.map((p) =>
              p.id === selectedPerson.id ? { ...p, ...selectedPerson } : p
            )
          );
          setSelectedPerson(null); // Réinitialiser la sélection après modification
        } else {
          throw new Error("Erreur lors de la modification de la personne");
        }
      } catch (error) {
        console.error("Erreur:", error);
      }
    }
  };

  const handleDeleteClick = async () => {
    if (selectedPerson) {
      try {
        await api.delete(`/persons/${selectedPerson.id}`, {
          method: "DELETE",
        });

        console.log("Personne supprimée", selectedPerson);
        // Mettre à jour la liste des personnes après suppression
        setPersons((prevPersons) =>
          prevPersons.filter((p) => p.id !== selectedPerson.id)
        );
        setSelectedPerson(null); // Réinitialiser la sélection après suppression
      } catch (error) {
        console.error("Erreur:", error);
      }
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Nom</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr
              key={person.id}
              onClick={() => handleRowClick(person)} // Gère le clic sur une ligne
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedPerson?.id === person.id ? "#f0f0f0" : "", // Changer la couleur de fond quand sélectionnée
              }}
            >
              <td>{person.age}</td>
              <td>{person.name}</td>
              <td>{person.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Afficher les boutons si une ligne est sélectionnée */}
      {selectedPerson && (
        <div>
          <button onClick={handleEditClick}>Modifier</button>
          <button onClick={handleDeleteClick}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default ReadPerson;
