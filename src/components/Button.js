import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ name, to }) {
  return (
    <div className={styles.button__container}>
      <Link to={to}>
        <button type="button">{name}</button>
      </Link>
    </div>
  );
}

export default Button;
