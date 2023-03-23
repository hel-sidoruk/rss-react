import React, { MouseEvent, useEffect, useState } from 'react';
import { Control, Controller, FieldError, Merge } from 'react-hook-form';
import { IForm } from '../../../types';
import { DropdownComponent } from './DropdownComponent';

type Props = {
  control: Control<IForm, 'tags'>;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
};

export const Dropdown = ({ control, error }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpened((isOpened) => !isOpened);
  };

  useEffect(() => {
    const close = () => setIsOpened(false);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  });

  return (
    <div className="field">
      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        rules={{ required: true }}
        render={({ field }) => (
          <DropdownComponent field={field} isOpened={isOpened} toggle={toggle} />
        )}
      />
      {error && <p>Please, select at least one tag</p>}
    </div>
  );
};
