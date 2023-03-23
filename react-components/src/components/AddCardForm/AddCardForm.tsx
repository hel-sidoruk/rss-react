import { IPost } from '../../types';
import styles from './form.module.scss';
import { FileInput } from './FileInput';
import { RadioInput } from './RadioInput';
import { Dropdown } from './Dropdown';
import { useAddCardForm } from '../../hooks/useAddCardForm';

type Props = { addPost: (post: IPost) => void };

export const AddCardForm = ({ addPost }: Props) => {
  const [onSubmit, success, errors, control, fileWatch, inputs] = useAddCardForm(addPost);

  const { textInput, dateInput, fileInput, radioInput, checkInput } = inputs;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className="field">
        <input className={styles.input} placeholder="Title" {...textInput} />
        {errors.text && <p>The title is required</p>}
      </div>
      <div className="field">
        <input className={styles.input} type="date" {...dateInput} />
        {errors.date && <p>The date is required</p>}
      </div>
      <FileInput watcher={fileWatch} reg={fileInput} error={errors.file} />
      <Dropdown control={control} error={errors.tags} />
      <RadioInput reg={radioInput} error={errors.gender} />
      <div className="field">
        <input id="check" type="checkbox" {...checkInput} />
        <label htmlFor="check">I agree to publish this data</label>
        {errors.check && <p>You should agree to post this</p>}
      </div>
      <button className={styles.btn}>Create</button>
      {success && <div className={styles.success}>The data has been saved successfully</div>}
    </form>
  );
};
