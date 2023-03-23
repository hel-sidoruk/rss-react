import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = () => {
  const toggleClass = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : '');
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <NavLink className={toggleClass} to="/">
          Home
        </NavLink>
        <NavLink className={toggleClass} to="/about">
          About Us
        </NavLink>
        <NavLink className={toggleClass} to="/add">
          Forms
        </NavLink>
      </div>
    </header>
  );
};
