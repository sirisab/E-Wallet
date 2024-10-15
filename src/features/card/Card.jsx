import styles from "./Card.module.css";
import chip from "../../../src/assets/icons8-chip-card-32.png";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ bgColor, brand, cardNumber, validThru, name, active }) => {
  return (
    <>
      <div className={styles["cardContainer"]}>
        <div className={`${styles.card} ${styles[bgColor]}`}>
          <div className={styles["brand"]}>{brand}</div>
          <div className={styles["chip"]}>
            <img src={chip} />
          </div>
          <div className={styles["cardNumber"]}>{cardNumber}</div>

          <div className={styles["validThru"]}>VALID THRU: {validThru}</div>
          <div className={styles["name"]}>{name}</div>
        </div>
        <button as={Link} to="/addCard">
          <FaTrash />
        </button>
      </div>
    </>
  );
};

export default Card;
