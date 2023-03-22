import styles from './form.module.scss';

type Props = { error: string; id: string };

export const Field = ({ error, id }: Props) => {
  return (
    <div className={styles.field}>
      <input
        className={styles.input}
        id={id}
        placeholder={id}
        type={id === 'date' ? 'date' : 'text'}
      />
      <p>{error}</p>
    </div>
  );
};
