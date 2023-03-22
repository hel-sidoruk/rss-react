import React, { useRef, useState } from 'react';
import { Form } from './Form';
import { ErrorsState, IPost } from '../../types';
import { changeTags, initialErrors, randomId } from '../../utils';
import { validate } from '../../utils/validation';

type Props = { addPost: (post: IPost) => void };

export const AddCardForm = ({ addPost }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ErrorsState>({ ...initialErrors });
  const [image, setImage] = useState<string | ArrayBuffer>('');
  const formRef = useRef<HTMLFormElement>(null);

  const tagsChange = (tag: string) => setTags((tags) => changeTags(tags, tag));

  const reset = () => {
    formRef.current?.reset();
    setTags([]);
    setImage('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: IPost = {
      id: randomId(),
      text: formRef.current?.['text'].value,
      date: formRef.current?.['date'].value,
      image: image as string,
      tags,
      gender: formRef.current?.['female'].checked
        ? 'Female'
        : formRef.current?.['male'].checked
        ? 'Male'
        : '',
    };
    const newErrors = validate(post, formRef.current?.['check'].checked);
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    addPost(post);
    reset();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <Form
      success={success}
      formRef={formRef}
      errors={errors}
      onSubmit={onSubmit}
      tags={tags}
      changeTags={tagsChange}
      image={image}
      changeImage={setImage}
    />
  );
};
