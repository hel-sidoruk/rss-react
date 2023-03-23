import React, { useState } from 'react';
import { SearchIcon } from '../../Icons';
import styles from './searchbar.module.scss';

type Props = { onSubmit: (s: string) => void };

export const SearchBar = ({ onSubmit }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={styles.searchbar} onSubmit={submit}>
      <input
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder="Search..."
      />
      <button>
        <SearchIcon className={styles.icon} />
      </button>
    </form>
  );
};
