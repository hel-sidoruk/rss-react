import React, { MouseEvent, useEffect, useState } from 'react';
import { DropdownComponent } from './DropdownComponent';

type Props = { tags: string[]; changeTags: (tag: string) => void };

export const Dropdown = ({ tags, changeTags }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpened((isOpened) => !isOpened);
  };

  const onChange = (e: MouseEvent<HTMLLIElement>, tag: string) => {
    e.stopPropagation();
    changeTags(tag);
  };

  useEffect(() => {
    const close = () => setIsOpened(false);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  });

  return <DropdownComponent isOpened={isOpened} toggle={toggle} tags={tags} onChange={onChange} />;
};
