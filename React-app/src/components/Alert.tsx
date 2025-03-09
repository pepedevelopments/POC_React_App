import { ReactNode } from "react";

interface Props {
  type: string;
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ type, children, onClose }: Props) => {
  return (
    <div className={type} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
