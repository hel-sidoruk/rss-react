import React, { MouseEvent } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { IForm } from '../../../types';
import { changeTags, mockTags } from '../../../utils';
import styles from './dropdown.module.scss';

type Props = {
  field: ControllerRenderProps<IForm, 'tags'>;
  isOpened: boolean;
  toggle: (e: MouseEvent<HTMLDivElement>) => void;
};

const tag = (el: string) => (
  <div key={`${el}t`} className={styles.tag}>
    {el}
  </div>
);

export const DropdownComponent = ({ field, isOpened, toggle }: Props) => {
  const onChange = (e: MouseEvent<HTMLLIElement>, tag: string) => {
    e.stopPropagation();
    field.onChange(changeTags(field.value, tag));
  };

  return (
    <div className={styles.dropdown}>
      <div className={`${styles.top} ${isOpened ? styles.opened : ''}`} onClick={toggle}>
        {field.value.length ? field.value.map(tag) : 'Select tags'}
      </div>
      <ul className={`${styles.bottom} ${isOpened ? styles.active : ''}`}>
        {mockTags.map((tag) => (
          <li
            key={tag}
            className={`${styles.item} ${field.value.includes(tag) ? styles.marked : ''}`}
            onClick={(e) => onChange(e, tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
