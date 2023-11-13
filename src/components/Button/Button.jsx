import styles from "./styles/button.module.css";
import PropTypes from "prop-types";

export function Button({ text, type = "default", onClick }) {
    return (
      <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
        {text}
        {type === "dafault"}
      </button>
    );
  }
  
  Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["default", "submit", "update", "delete"]),
  };