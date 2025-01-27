import PropTypes from "prop-types";
import "../Calculate/Calculate.scss";
export default function Calculate({ title, input, ecran }) {
  return (
    <div className="caclculate">
      <h1 className="calculate__title">{title}</h1>
      <div className="calculate__ecran">{ecran}</div>
      <div className="calculate__input">
        <div className="calculate__input--button">{input}</div>
      </div>
    </div>
  );
}

Calculate.propTypes = {
  title: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  ecran: PropTypes.string.isRequired,
};
