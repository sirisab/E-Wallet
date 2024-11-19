import styles from './Card.module.css';
import chip from '../../../src/assets/icons8-chip-card-40.png';

import { useDispatch } from 'react-redux';

const Card = (
  { vendor, cardNumber, validThruMonth, validThruYear, cardHolder, isActive },
  index
) => {
  let dispatch = useDispatch();
  return (
    <div className={`${styles.card} ${styles[vendor]}`}>
      <div className={styles.vendor}>{vendor}</div>
      <div className={styles.chip}>
        <img src={chip} />
      </div>
      <div className={styles.cardNumber}>{cardNumber}</div>

      <div className={styles.validThru}>
        <span>VALID THRU:</span> {validThruMonth}/{validThruYear}
      </div>
      <div className={styles.cardHolder}>{cardHolder.toUpperCase()}</div>
    </div>
  );
};

export default Card;
