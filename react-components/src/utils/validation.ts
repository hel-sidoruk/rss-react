import { ErrorsState, IPost } from '../types';

export function validate(post: IPost): ErrorsState {
  const errors = { title: '', author: '', text: '', tags: '' };
  if (!post.title) errors.title = 'The title is required';
  if (post.title && post.title.length < 2) errors.title = 'The title is too short';
  if (!post.tags.length) errors.tags = 'Please, select at least one tag';
  return errors;
}
