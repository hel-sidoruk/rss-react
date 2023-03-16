import { IPost } from '../types';

export const randomId = () => Math.random().toString(36).substring(2, 15);
export const tags = ['Graphics', 'Design', 'Inspiration', 'Art', 'Modern', 'Vintage'];

export const posts: IPost[] = [
  {
    id: randomId(),
    title: 'Some title',
    author: 'Some author',
    image: '',
    text: 'Some text',
    tags: ['Graphics', 'Art'],
    date: '25.03.2023',
  },
];

export const changeTags = (tags: string[], tag: string) =>
  tags.includes(tag) ? tags.filter((el) => el !== tag) : [...tags, tag];
