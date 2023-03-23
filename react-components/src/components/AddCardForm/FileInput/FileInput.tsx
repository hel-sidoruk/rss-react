import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './input.module.scss';

type Props = { watcher: FileList; reg: UseFormRegisterReturn<'file'>; error?: FieldError };

export const FileInput = ({ watcher, reg, error }: Props) => {
  return (
    <div className={styles.field}>
      <div className={styles.fileUpload}>
        <input {...reg} accept="image/*" type="file" />
        <div className={styles.fileField}>
          <div className={styles.btn}>Upload file</div>
          {watcher && watcher[0] && <img src={URL.createObjectURL(watcher[0])} />}
        </div>
      </div>
      {error && <p>Please, select </p>}
    </div>
  );
};
