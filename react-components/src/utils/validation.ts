import { ErrorsState, IPost } from '../types';

export function validate(post: IPost): ErrorsState {
  const errors = { title: '', author: '', text: '', tags: '' };
  if (!post.title) errors.title = 'The title is required';
  if (post.title && post.title.length < 2) errors.title = 'The title is too short';
  if (!post.author) errors.author = 'The author name is required';
  if (post.author && post.author.length < 2) errors.author = 'The author name is too short';
  if (!post.text) errors.text = 'The text is required';
  if (post.text && post.text.length < 8) errors.text = 'The text is too short';
  if (!post.tags.length) errors.tags = 'Please, select at least one tag';
  return errors;
}
