import { useState } from 'react';
import { ErrorsState, IPost } from '../../types';
import { changeTags, initialErrors, randomId } from '../../utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './form.module.scss';
import { DropdownField } from './DropdownField';
import { FileInput } from './FileInput';

type Props = { addPost: (post: IPost) => void };

interface IForm {
  text: string;
  date: string;
  gender: 'Male' | 'Female';
  check: boolean;
}

export const AddCardForm = ({ addPost }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const [tags, setTags] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [myErrors, setMyErrors] = useState<ErrorsState>({ ...initialErrors });
  const [image, setImage] = useState<string | ArrayBuffer>('');

  const tagsChange = (tag: string) => setTags((tags) => changeTags(tags, tag));

  const resetForm = () => {
    reset();
    setTags([]);
    setImage('');
  };

  const onSubmit: SubmitHandler<IForm> = (data) => {
    const post: IPost = {
      id: randomId(),
      ...data,
      image: image as string,
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
        <input
          className={styles.input}
          placeholder="Title"
          {...register('text', { required: true })}
        />
        {errors.text && <p>The title is required</p>}
      </div>
      <div className={styles.field}>
        <input className={styles.input} type="date" {...register('date', { required: true })} />
        {errors.date && <p>The date is required</p>}
      </div>
      <div className={styles.field}>
        <FileInput changeImage={setImage} image={image} />
        <p>{myErrors.image}</p>
      </div>
      <DropdownField error={myErrors.tags} change={tagsChange} tags={tags} />
      <div className={styles.field}>
        <input
          {...register('gender', { required: true })}
          id="female"
          value="Female"
          type="radio"
        />
        <label htmlFor="female">Female</label>
        <input {...register('gender', { required: true })} id="male" value="Male" type="radio" />
        <label htmlFor="male">Male</label>
        {errors.gender && <p>Please, select your gender</p>}
      </div>
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
