import { ICharacter } from '../../types/api';
import styles from './info.module.scss';

export const CharacterInfo = ({ item }: { item: ICharacter }) => {
  return (
    <div className={styles.info}>
      <div className={styles.image}>
        <img src={item.image} alt={item.name} />
      </div>
      <h2 className={styles.title}>{item.name}</h2>
      <ul>
        <li className={styles.item}>
          Gender: <p>{item.gender}</p>
        </li>
        <li className={styles.item}>
          Location: <p>{item.location.name}</p>
        </li>
        <li className={styles.item}>
          Origin: <p>{item.origin.name}</p>
        </li>
        <li className={styles.item}>
          Species: <p>{item.species}</p>
        </li>
        <li className={styles.item}>
          Status: <p>{item.status}</p>
        </li>
        {item.type && (
          <li className={styles.item}>
            Type: <p>{item.type}</p>
          </li>
        )}
      </ul>
    </div>
  );
};
