import React, { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '../../Icons';
import styles from './searchbar.module.scss';

export const SearchBar = () => {
  const [value, setValue] = useState(localStorage.getItem('searchValue') || '');
  const valueRef = useRef<string>('');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', valueRef.current);
    };
  }, []);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

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
