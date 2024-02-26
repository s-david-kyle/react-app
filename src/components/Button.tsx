import { useState } from "react";
import Alert from "../components/Alert";

interface Props {
  buttonType: string;
  buttonText: string;
}

const Button = ({ buttonType, buttonText }: Props) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <>
      {showAlert && (
        <div>
          <Alert>
            Hello, <span>World!</span>
          </Alert>
        </div>
      )}
      <button
        type="button"
        className={`btn btn-${buttonType}`}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
