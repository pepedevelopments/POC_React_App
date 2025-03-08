import "./PlanningPage.css";

const PlanningPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-10">
            <h1 className="my-5 text-center">Planning hebdomadaire</h1>
            <table className="table text-center table-bordered">
              <thead>
                <tr>
                  <th>Personne</th>
                  <th colSpan={3} className="day-header">
                    Lundi
                  </th>
                  <th colSpan={3} className="day-header">
                    Mardi
                  </th>
                  <th colSpan={3} className="day-header">
                    Mercredi
                  </th>
                  <th colSpan={3} className="day-header">
                    Jeudi
                  </th>
                  <th colSpan={3} className="day-header">
                    Vendredi
                  </th>
                  <th colSpan={3} className="day-header">
                    Samedi
                  </th>
                  <th colSpan={3} className="day-header">
                    Dimanche
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                  <th>Nuit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Personne 1</td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                </tr>
                <tr>
                  <td>Personne 2</td>
                  <td className="table-success"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                </tr>
                <tr>
                  <td>Personne 3</td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                </tr>
                <tr>
                  <td>Personne 4</td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-success"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                  <td className="table-danger"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningPage;
