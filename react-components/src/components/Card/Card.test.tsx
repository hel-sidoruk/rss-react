import { render } from '@testing-library/react';
import { IPost } from '../../types';
import { Card } from './Card';

const post: IPost = {
  id: '1',
  title: 'Some title',
  author: 'Some author',
  image: 'randomImage',
  text: 'Some text',
  tags: ['Graphics', 'Art'],
  date: '25.03.2023',
};

test('Card element has an image', () => {
  const { getByRole } = render(<Card image="https://picsum.photos/id/11/300/200" />);
  const image = getByRole('img');
  expect(image).toBeInTheDocument();
});

test('Card element has title', () => {
  const { getByRole } = render(<Card image="https://picsum.photos/id/11/300/200" />);
  const title = getByRole('heading');
  expect(title).toBeInTheDocument();
});

test(`If the "post" prop was passed, Card component renders post's data`, () => {
  const { getByText } = render(<Card post={post} />);
  const title = getByText(post.title);
  const author = getByText(post.author);
  const text = getByText(post.text);
  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
