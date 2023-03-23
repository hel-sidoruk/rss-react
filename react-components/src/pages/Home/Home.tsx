import { useEffect, useState } from 'react';
import { CharacterItem } from '../../components/CharacterItem';
import { SearchBar } from '../../components/SearchBar';
import { ApiResponse, ICharacter } from '../../types/api';
import styles from './home.module.scss';

async function fetchCharacter(query: string): Promise<ApiResponse> {
  const result = await fetch('https://rickandmortyapi.com/api/character?name=' + query);
  const data = await result.json();
  return data;
}

export const Home = () => {
  const [data, setData] = useState<ICharacter[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchCharacter(query).then((res) => setData(res.error ? [] : res.results));
  }, [query]);

  return (
    <section className={styles.home}>
      <div className={`container ${styles.container}`}>
        <SearchBar onSubmit={setQuery} />
        <div className={styles.list}>
          {data.map((item) => (
            <CharacterItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
