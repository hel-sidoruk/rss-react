import { ErrorsState, IPost } from '../types';

export function validate(post: IPost, checked: boolean): ErrorsState {
  const errors: ErrorsState = { text: '', tags: '', date: '', image: '', check: '', gender: '' };
  if (!post.text) errors.text = 'The title is required';
  if (!post.date) errors.date = 'The date is required';
  if (!post.image) errors.image = 'Please, select the file';
  if (!post.gender) errors.gender = 'Please, select your gender';
  if (!post.tags.length) errors.tags = 'Please, select at least one tag';
  if (!checked) errors.check = 'You should agree to post this';
  return errors;
}
