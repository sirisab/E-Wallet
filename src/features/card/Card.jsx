import styles from "./Card.module.css";
import chip from "../../../src/assets/icons8-chip-card-32.png";
import { FaTrash } from "react-icons/fa";
import { deleteCard } from "./cardSlice";
import { useDispatch } from "react-redux";

const Card = ({ bgColor, brand, cardNumber, validThru, name, active }, i) => {
  let dispatch = useDispatch();

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
        <button
          className={styles["deleteCardBtn"]}
          onClick={() => {
            dispatch(deleteCard(i));
          }}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
};

export default Card;
