import React, { useState } from "react";
import Navbar from "./Navbar";

interface CreatePersonProps {
  addPerson: (person: {
    age: number;
    name: string;
    profession: string;
  }) => void;
}

const CreatePerson: React.FC<CreatePersonProps> = ({ addPerson }) => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPerson({ age, name, profession });
    setAge(0);
    setName("");
    setProfession("");
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Age"
          required
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          required
        />
        <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          placeholder="Profession"
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
};

export default CreatePerson;
