import { randomId, randomImage } from '.';

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
