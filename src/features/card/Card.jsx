import styles from './Card.module.css';
import chip from '../../../src/assets/icons8-chip-card-40.png';

import { useDispatch } from 'react-redux';

const Card = (
  {
    bgColor,
    vendor,
    cardNumber,
    validThruMonth,
    validThruYear,
    name,
    active,
    className,
  },
  index
) => {
  let dispatch = useDispatch();

  return (
    <div className={className}>
      <div className={`${styles.card} ${styles[bgColor]}`}>
        <div className={styles.vendor}>
          <strong>{vendor}</strong>
        </div>
        <div className={styles.chip}>
          <img src={chip} />
        </div>
        <div className={styles.cardNumber}>{cardNumber}</div>

        <div className={styles.validThru}>
          <span>VALID THRU:</span> {validThruMonth}/{validThruYear}
        </div>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  );
};

export default Card;
