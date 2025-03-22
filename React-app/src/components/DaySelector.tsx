import React, { useState } from "react";
import Button from "./Button";


interface Props {
  onClose: () => void;
}

const daysOfWeek = [
  { id: 1, name: "Lundi" },
  { id: 2, name: "Mardi" },
  { id: 3, name: "Mercredi" },
  { id: 4, name: "Jeudi" },
  { id: 5, name: "Vendredi" },
  { id: 6, name: "Samedi" },
  { id: 7, name: "Dimanche" },
];

const DaySelector = ({ onClose}: Props) => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [labels, setLabels] = useState<{ [key: number]: string }>({});

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
    console.log("Selected Days:", selectedDays);
    console.log("Labels:", labels);
    // Ici, vous pouvez envoyer les données à une API ou les traiter
  };

  return (
    <div className="container mt-4">
      <h3>Contraintes:</h3>
      <div className="row">
        {daysOfWeek.map((day) => (
          <div className="col-12 mb-3" key={day.id}>
            <div className="card">
              <div className="card-body">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedDays.includes(day.id)}
                    onChange={() => handleDayChange(day.id)}
                    className="form-check-input me-2"
                  />
                  <span className="h5">{day.name}</span>
                </label>

                {selectedDays.includes(day.id) && (
                  <div className="mt-3">
                    {["CP", "RTT", "Formation", "Réunion", "Groupe de travail"].map(
                      (label) => (
                        <div key={label} className="form-check form-check-inline">
                          <input
                            type="radio"
                            className="btn-check"
                            name={`day-${day.id}`}
                            id={`radio-${day.id}-${label}`}
                            autoComplete="off"
                            checked={labels[day.id] === label}
                            onChange={() => handleLabelChange(day.id, label)}
                          />
                          <label
                            className="btn btn-outline-primar"
                            htmlFor={`radio-${day.id}-${label}`}
                          >
                            {label}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        color="primary"
        onClick={() => {
          onClose();
        }}
      >
        Valider
      </Button>
    </div>
  );
};

export default DaySelector;