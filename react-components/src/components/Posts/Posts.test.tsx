import { render } from '@testing-library/react';
import { IPost } from '../../types';
import { Posts } from './Posts';

const posts: IPost[] = [
  {
    id: '1',
    text: 'First post title',
    image: 'randomImage',
    tag: 'Graphics',
    date: '25.03.2023',
    gender: 'Female',
  },
  {
    id: '2',
    text: 'Second post title',
    image: 'randomImage',
    tag: 'Graphics',
    date: '25.03.2023',
    gender: 'Female',
  },
];

test('Posts component renders cards with posts data', () => {
  const { getByText } = render(<Posts posts={posts} />);
  posts.forEach((post) => {
    const text = getByText(post.text);
    expect(text).toBeInTheDocument();
  });
});
