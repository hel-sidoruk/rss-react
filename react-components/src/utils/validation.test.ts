import { IPost } from '../types';
import { validate } from './validation';

const correctPost: IPost = {
  id: '1',
  title: 'Some title',
  author: 'Some author',
  image: 'randomImage',
  text: 'Some text',
  tags: ['Graphics', 'Art'],
  date: '25.03.2023',
};

const incorrectPost: IPost = {
  id: '1',
  title: '',
  author: '',
  image: 'randomImage',
  text: '',
  tags: [],
  date: '25.03.2023',
};

const incorrectPost2: IPost = {
  id: '1',
  title: 'a',
  author: 'a',
  image: 'randomImage',
  text: 'abcde',
  tags: ['tag'],
  date: '25.03.2023',
};

describe('Validation function works correctly', () => {
  test('There are no errors if the post is correct', () => {
    const errors = validate(correctPost);
    expect(Object.values(errors).some(Boolean)).toBe(false);
  });
  test("There are errors if the post doesn't have title, text, author or tags", () => {
    const errors = validate(incorrectPost);
    expect(Object.values(errors).some(Boolean)).toBe(true);
  });
  test("There are errors if the post's title, text or author are too short", () => {
    const errors = validate(incorrectPost2);
    expect(Object.values(errors).some(Boolean)).toBe(true);
  });
});
