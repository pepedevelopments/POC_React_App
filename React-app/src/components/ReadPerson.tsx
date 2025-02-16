import React from "react";

interface Person {
  age: number;
  name: string;
  profession: string;
}

interface ReadPersonProps {
  person: Person[];
}

const ReadPerson: React.FC<ReadPersonProps> = ({ person }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Age</th>
          <th>Nom</th>
          <th>Profession</th>
        </tr>
      </thead>
      <tbody>
        {person.map((person, index) => (
          <tr key={index}>
            <td>{person.age}</td>
            <td>{person.name}</td>
            <td>{person.profession}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReadPerson;
