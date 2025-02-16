interface Props {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  children: string;
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-outline-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
