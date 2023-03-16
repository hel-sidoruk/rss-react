import { IPost } from '../types';

export const randomId = () => Math.random().toString(36).substring(2, 15);

export const posts: IPost[] = [
  {
    id: randomId(),
    title: 'Some title',
    author: 'Some author',
    text: 'Some text',
    tags: ['Graphics', 'Art'],
    date: '25.03.2023',
  },
];
