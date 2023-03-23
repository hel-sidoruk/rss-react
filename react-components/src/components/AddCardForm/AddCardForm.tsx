import { useState } from 'react';
import { ErrorsState, IForm, IPost } from '../../types';
import { changeTags, initialErrors, randomId } from '../../utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './form.module.scss';
import { DropdownField } from './DropdownField';
import { FileInput } from './FileInput';
import { RadioInput } from './RadioInput';

type Props = { addPost: (post: IPost) => void };

export const AddCardForm = ({ addPost }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<IForm>();
  const [tags, setTags] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [myErrors, setMyErrors] = useState<ErrorsState>({ ...initialErrors });

  const fileWatch = watch('file');
  const fileInput = register('file', { required: true });
  const radioInput = register('gender', { required: true });
  const dateInput = register('date', { required: true });
  const textInput = register('text', { required: true });

  const tagsChange = (tag: string) => setTags((tags) => changeTags(tags, tag));

  const resetForm = () => {
    reset();
    setTags([]);
  };

  const onSubmit: SubmitHandler<IForm> = (data) => {
    const file = data.file[0];
    const image = URL.createObjectURL(file);
    const post: IPost = {
      id: randomId(),
      ...data,
      image,
      tags,
    };
    resetForm();
    addPost(post);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <input className={styles.input} placeholder="Title" {...textInput} />
        {errors.text && <p>The title is required</p>}
      </div>
      <div className={styles.field}>
        <input className={styles.input} type="date" {...dateInput} />
        {errors.date && <p>The date is required</p>}
      </div>
      <FileInput watcher={fileWatch} reg={fileInput} error={errors.file} />
      <DropdownField error={myErrors.tags} change={tagsChange} tags={tags} />
      <RadioInput reg={radioInput} error={errors.gender} />
      <div className={styles.field}>
        <input id="check" type="checkbox" {...register('check', { required: true })} />
        <label htmlFor="check">I agree to publish this data</label>
        {errors.check && <p>You should agree to post this</p>}
      </div>
      <button className={styles.btn}>Create</button>
      {success && <div className={styles.success}>The data has been saved successfully</div>}
    </form>
  );
};
