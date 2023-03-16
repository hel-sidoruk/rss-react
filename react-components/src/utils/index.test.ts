import { changeTags, randomId, randomImage } from '.';

describe('randomID function works correctly', () => {
  const id1 = randomId();

  test('Function returns a string', () => {
    expect(typeof id1).toBe('string');
  });
  test('Function returns a unique ID', () => {
    const idsArr = [];
    for (let i = 0; i < 30; i++) {
      idsArr.push(randomId());
    }
    expect(Array.from(new Set(idsArr)).length).toBe(idsArr.length);
  });
});

describe('randomImage function works correctly', () => {
  const image = randomImage();
  test('Function returns a string', () => {
    expect(typeof image).toBe('string');
  });
  test('Function returns an URL', () => {
    expect(image.startsWith('http')).toBe(true);
  });
});

describe('changeTags function works correctly', () => {
  test('Function returns array', () => {
    const result = changeTags([], 'tag');
    expect(Array.isArray(result)).toBe(true);
  });
  test('Function adds tag in array, if there is no such tag in it', () => {
    const array = ['string'];
    const tag = 'tag';
    const result = changeTags(array, tag);
    expect(result.includes(tag)).toBe(true);
  });
  test('Function removes tag from array, if there is such tag in it', () => {
    const tag = 'tag';
    const array = [tag];
    const result = changeTags(array, tag);
    expect(result.includes(tag)).toBe(false);
  });
});
