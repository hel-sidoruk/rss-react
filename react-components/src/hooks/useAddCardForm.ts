import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IForm, IPost } from '../types';
import { randomId } from '../utils';

export function useAddCardForm(addPost: (post: IPost) => void) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm<IForm>();
  const [success, setSuccess] = useState(false);

  const fileWatch = watch('file');
  const fileInput = register('file', { required: true });
  const radioInput = register('gender', { required: true });
  const dateInput = register('date', { required: true });
  const textInput = register('text', { required: true });
  const checkInput = register('check', { required: true });

  const inputs = { fileInput, radioInput, dateInput, textInput, checkInput };

  const addCard: SubmitHandler<IForm> = (data) => {
    const file = data.file[0];
    const image = URL.createObjectURL(file);
    const post: IPost = { id: randomId(), ...data, image };
    reset();
    addPost(post);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const onSubmit = handleSubmit(addCard);

  return [onSubmit, success, errors, control, fileWatch, inputs] as const;
}
