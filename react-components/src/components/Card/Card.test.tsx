import { render } from '@testing-library/react';
import { IPost } from '../../types';
import { Card } from './Card';

const post: IPost = {
  id: '1',
  text: 'Some title',
  image: 'randomImage',
  tag: 'Graphics',
  date: '25.03.2023',
  gender: 'Female',
};

test('Card element has an image', () => {
  const { getByRole } = render(<Card post={post} />);
  const image = getByRole('img');
  expect(image).toBeInTheDocument();
});

test('Card element has title', () => {
  const { getByRole } = render(<Card post={post} />);
  const title = getByRole('heading');
  expect(title).toBeInTheDocument();
});

test(`If the "post" prop was passed, Card component renders post's data`, () => {
  const { getByText } = render(<Card post={post} />);
  const text = getByText(post.text);
  expect(text).toBeInTheDocument();
});
