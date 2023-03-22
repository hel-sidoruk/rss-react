import styles from './radio-input.module.scss';

export const RadioInput = ({ error }: { error: string }) => {
  return (
    <div className={styles.field}>
      <input id="female" type="radio" name="question" />
      <label htmlFor="female">Female</label>
      <input id="male" type="radio" name="question" />
      <label htmlFor="male">Male</label>
      <p>{error}</p>
    </div>
  );
};
