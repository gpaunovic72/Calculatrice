import PropTypes from "prop-types";
import { useState } from "react";
import { useFetch } from "../../hooks";
import "../Calculate/Calculate.scss";

export default function Calculate({ title }) {
  const { data } = useFetch();
  const list = data;
  const [currentValue, setCurrentValue] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      if (!currentValue) {
        setCurrentValue("");
        return;
      }
      try {
        const result = new Function(`return ${currentValue}`)();
        setCurrentValue(`${result}`);
      } catch (error) {
        setCurrentValue("Erreur", error);
      }
    } else {
      setCurrentValue((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setCurrentValue("");
  };

  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="calculate">
        <div className="calculate__ecran">
          <input
            type="text"
            className="calculate__ecran--text"
            value={currentValue}
          />
        </div>
        <div className="calculate__input">
          {list?.map((btn) => (
            <button
              onClick={() => handleClick(btn.value)}
              className="calculate__input--btn"
              key={btn?.id}
              value={btn?.value}
            >
              {btn?.label}
            </button>
          ))}
        </div>
        <button className="calculate__sup" onClick={handleClear}>
          Supprimer
        </button>
      </div>
    </>
  );
}

Calculate.propTypes = {
  title: PropTypes.string.isRequired,
};
