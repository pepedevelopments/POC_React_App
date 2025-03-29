const Planning = () => {
  const personnes = ["Alice", "Bob", "Charlie", "David"];
  const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

  const planningData: Record<string, string[]> = {
    Lundi: ["Présent", "Absent", "Présent", "Absent"],
    Mardi: ["Absent", "Présent", "Présent", "Présent"],
    Mercredi: ["Présent", "Présent", "Absent", "Présent"],
    Jeudi: ["Absent", "Absent", "Présent", "Présent"],
    Vendredi: ["Présent", "Présent", "Présent", "Absent"],
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Planning de Présence</h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Personnes</th>
              {jours.map((jour) => (
                <th key={jour}>{jour}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {personnes.map((personne, index) => (
              <tr key={personne}>
                <td>{personne}</td>
                {jours.map((jour) => (
                  <td key={`${personne}-${jour}`}>
                    {planningData[jour][index]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Planning;
