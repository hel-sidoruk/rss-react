import { IPost } from '../types';
import { validate } from './validation';

const correctPost: IPost = {
  id: '1',
  text: 'Some title',
  image: 'randomImage',
  tags: ['Graphics', 'Art'],
  date: '25.03.2023',
  gender: 'Female',
};

const incorrectPost: IPost = {
  id: '1',
  text: '',
  image: 'randomImage',
  tags: [],
  date: '25.03.2023',
  gender: 'Male',
};

const incorrectPost2: IPost = {
  id: '1',
  text: 'a',
  image: 'randomImage',
  tags: ['tag'],
  date: '25.03.2023',
  gender: 'Female',
};

describe('Validation function works correctly', () => {
  test('There are no errors if the post is correct', () => {
    const errors = validate(correctPost, true);
    expect(Object.values(errors).some(Boolean)).toBe(false);
  });
  test("There are errors if the post doesn't have title, text, author or tags", () => {
    const errors = validate(incorrectPost, true);
    expect(Object.values(errors).some(Boolean)).toBe(true);
  });
  test("There are errors if the post's title, text or author are too short", () => {
    const errors = validate(incorrectPost2, true);
    expect(Object.values(errors).some(Boolean)).toBe(true);
  });
});
