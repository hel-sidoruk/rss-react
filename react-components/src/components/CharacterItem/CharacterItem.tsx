import { useState } from 'react';
import { ICharacter } from '../../types/api';
import { CharacterInfo } from '../CharacterInfo';
import { Modal } from '../Modal';
import styles from './character.module.scss';

export const CharacterItem = ({ item }: { item: ICharacter }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const close = () => setIsModalOpened(false);
  const open = () => setIsModalOpened(true);

  return (
    <>
      <div className={styles.card} onClick={open}>
        <div className={styles.top}>
          <img src={item.image} alt={item.name} />
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.title}>{item.name}</h3>
          <button className={styles.btn}>More info</button>
        </div>
      </div>
      {isModalOpened && (
        <Modal onClose={close}>
          <CharacterInfo item={item} />
        </Modal>
      )}
    </>
  );
};
