import { useState, useEffect } from "react";
import api from "./api";

function App() {
  interface Person {
    id: number;
    age: number;
    name: string;
    profession: string;
  }

  const [persons, setPersons] = useState<Person[]>([]);
  const [formData, setFormData] = useState({
    age: 0,
    name: "",
    profession: "",
  });

  const fetchPersons = async () => {
    const response = await api.get("/persons/");
    setPersons(response.data);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const handleInputChange = (event: any) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    console.log("Form submitted", formData);
    await api.post("/persons/", formData);
    fetchPersons();
    setFormData({
      age: 0,
      name: "",
      profession: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3 mr-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="Integer"
            className="form-control"
            id="age"
            name="age"
            onChange={handleInputChange}
            value={formData.age}
          ></input>
        </div>

        <div className="mb-3 mr-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
          ></input>
        </div>

        <div className="mb-3 mr-3">
          <label htmlFor="profession" className="form-label">
            Profession
          </label>
          <input
            type="text"
            className="form-control"
            id="profession"
            name="profession"
            onChange={handleInputChange}
            value={formData.profession}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <table className="table table-striped tabled-bordered table-hover">
        <thead>
          <tr>
            <th>Age</th>
            <th>Name</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.age}</td>
              <td>{person.name}</td>
              <td>{person.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
