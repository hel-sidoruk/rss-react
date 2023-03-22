import { randomImage } from '.';
import { IPost } from '../types';

export const mockPosts: IPost[] = [
  {
    id: '1',
    title: 'Some title',
    image: randomImage(),
    tags: ['Graphics', 'Art'],
    date: '2023-03-09',
    gender: 'Male',
  },
];
