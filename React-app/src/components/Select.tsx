interface Props {
  options: string[];
  message: string;
  onChange: (selectedValue: string) => void;
}

const Select = ({ options, message, onChange }: Props) => {
  return (
    <div>
      <select
        className="form-select form-select-md mb-3"
        aria-label="Large select example"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{message}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
