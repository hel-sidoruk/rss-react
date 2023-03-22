import { FormProps } from '../../types';
import { DropdownField } from './DropdownField';
import { Field } from './Field';
import { FileInput } from './FileInput';
import { RadioInput } from './RadioInput';
import styles from './form.module.scss';

export const Form = (props: FormProps) => {
  return (
    <form ref={props.formRef} className={styles.form} onSubmit={props.onSubmit}>
      <Field error={props.errors.text} id="text" />
      <Field error={props.errors.date} id="date" />
      <div className={styles.field}>
        <FileInput changeImage={props.changeImage} image={props.image} />
        <p>{props.errors.image}</p>
      </div>
      <DropdownField error={props.errors.tags} change={props.changeTags} tags={props.tags} />
      <RadioInput error={props.errors.gender} />
      <div className={styles.field}>
        <input type="checkbox" id="check" />
        <label htmlFor="check">I agree to publish this data</label>
        <p>{props.errors.check}</p>
      </div>
      <button type="submit" className={styles.btn}>
        Create
      </button>
      {props.success && <div className={styles.success}>The data has been saved successfully</div>}
    </form>
  );
};
