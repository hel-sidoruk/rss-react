import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './radio-input.module.scss';

type Props = { reg: UseFormRegisterReturn<'gender'>; error?: FieldError };

export const RadioInput = ({ reg, error }: Props) => {
  return (
    <div className={styles.field}>
      <input {...reg} id="female" value="Female" type="radio" />
      <label htmlFor="female">Female</label>
      <input {...reg} id="male" value="Male" type="radio" />
      <label htmlFor="male">Male</label>
      {error && <p>Please, select your gender</p>}
    </div>
  );
};
