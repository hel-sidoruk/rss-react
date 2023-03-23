import { useEffect } from 'react';
import { CardsList } from '../../components/CardsList';
import { SearchBar } from '../../components/SearchBar';
import styles from './home.module.scss';

export const Home = () => {
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <div className={styles.home}>
      <div className={`container ${styles.container}`}>
        <SearchBar />
        <CardsList />
      </div>
    </div>
  );
};
