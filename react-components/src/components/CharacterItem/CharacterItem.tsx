import { ICharacter } from '../../types/api';
import styles from './character.module.scss';

export const CharacterItem = ({ item }: { item: ICharacter }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{item.name}</h3>
        <button className={styles.btn}>More info</button>
      </div>
    </div>
  );
};
