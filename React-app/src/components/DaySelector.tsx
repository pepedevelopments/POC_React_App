import React, { useState } from "react";

const daysOfWeek = [
  { id: 1, name: "Lundi" },
  { id: 2, name: "Mardi" },
  { id: 3, name: "Mercredi" },
  { id: 4, name: "Jeudi" },
  { id: 5, name: "Vendredi" },
  { id: 6, name: "Samedi" },
  { id: 7, name: "Dimanche" },
];

const DaySelector = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [labels, setLabels] = useState({});

  const handleDayChange = (dayId: number) => {
    setSelectedDays((prev) =>
      prev.includes(dayId)
        ? prev.filter((id) => id !== dayId)
        : [...prev, dayId]
    );
  };

  const handleLabelChange = (dayId: number, value: string) => {
    setLabels((prev) => ({ ...prev, [dayId]: value }));
  };

  const handleSubmit = () => {
    console.log("Jours sélectionnés:", selectedDays);
    console.log("Labels:", labels);
    // Ici, vous pouvez envoyer les données à une API ou les traiter
  };

  return (
    <div>
      <h3>Sélectionnez les jours :</h3>
      {daysOfWeek.map((day) => (
        <div key={day.id}>
          <label>
            <input
              type="checkbox"
              checked={selectedDays.includes(day.id)}
              onChange={() => handleDayChange(day.id)}
            />
            {day.name}
          </label>
          {selectedDays.includes(day.id) && (
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                checked
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                CP
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio2">
                RTT
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio3">
                Formation
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio4"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio3">
                Réunion
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio5"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio3">
                Groupe de travail
              </label>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Soumettre</button>
    </div>
  );
};

export default DaySelector;
