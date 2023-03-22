import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../../Icons';
import styles from './searchbar.module.scss';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  useEffect(() => {
    const searchbarValue = localStorage.getItem('searchbarValue');
    if (searchbarValue) setValue(searchbarValue);
    return () => localStorage.setItem('searchbarValue', value);
  }, []);

  return (
    <div className={styles.searchbar}>
      <input
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder="Search..."
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
};
