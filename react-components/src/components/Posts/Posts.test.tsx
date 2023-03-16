import { render } from '@testing-library/react';
import { IPost } from '../../types';
import { Posts } from './Posts';

const posts: IPost[] = [
  {
    id: '1',
    title: 'First post title',
    author: 'First post author',
    image: 'randomImage',
    text: 'First post text',
    tags: ['Graphics', 'Art'],
    date: '25.03.2023',
  },
  {
    id: '2',
    title: 'Second post title',
    author: 'Second post author',
    image: 'randomImage',
    text: 'Second post text',
    tags: ['Graphics', 'Art'],
    date: '25.03.2023',
  },
];

test('Posts component renders cards with posts data', () => {
  const { getByText } = render(<Posts posts={posts} />);
  posts.forEach((post) => {
    const title = getByText(post.title);
    const author = getByText(post.author);
    const text = getByText(post.text);
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
