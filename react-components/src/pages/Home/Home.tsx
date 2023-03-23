import { useEffect, useState } from 'react';
import { CharacterItem } from '../../components/CharacterItem';
import { SearchBar } from '../../components/SearchBar';
import { ApiResponse, ICharacter } from '../../types/api';
import styles from './home.module.scss';

export const Home = () => {
  const [data, setData] = useState<ICharacter[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((res: ApiResponse) => setData(res.results));
  }, []);

  return (
    <section className={styles.home}>
      <div className={`container ${styles.container}`}>
        <SearchBar />
        <div className={styles.list}>
          {data.map((item) => (
            <CharacterItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
