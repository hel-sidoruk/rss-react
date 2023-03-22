import React, { MouseEvent } from 'react';
import { mockTags } from '../../../utils';
import styles from './dropdown.module.scss';

type Props = {
  isOpened: boolean;
  toggle: (e: MouseEvent<HTMLDivElement>) => void;
  tags: string[];
  onChange: (e: MouseEvent<HTMLLIElement>, tag: string) => void;
};

const tag = (el: string) => (
  <div key={`${el}t`} className={styles.tag}>
    {el}
  </div>
);

export const DropdownComponent = ({ isOpened, toggle, tags, onChange }: Props) => {
  return (
    <div className={styles.dropdown}>
      <div className={`${styles.top} ${isOpened ? styles.opened : ''}`} onClick={toggle}>
        {tags.length ? tags.map(tag) : 'Select tags'}
      </div>
      <ul className={`${styles.bottom} ${isOpened ? styles.active : ''}`}>
        {mockTags.map((tag) => (
          <li
            key={tag}
            className={`${styles.item} ${tags.includes(tag) ? styles.marked : ''}`}
            onClick={(e) => onChange(e, tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
