import { CardsList } from '../../components/CardsList';
import { SearchBar } from '../../components/SearchBar';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={`container ${styles.container}`}>
        <SearchBar />
        <CardsList />
      </div>
    </div>
  );
};
