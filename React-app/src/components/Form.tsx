import Button from "./Button";

interface Props {
  title: string;
  elements: string[];
  onClose: () => void;
}

const Form = ({ onClose, title, elements }: Props) => {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h4>{title}: </h4>
      {elements.map((element, index) => (
        <div key={index} className="mb-3">
          <label htmlFor={`input-${index}`} className="form-label">
            {element}
          </label>
          <input className="form-control" id={`input-${index}`} />
        </div>
      ))}
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

export default Form;
