import { render } from '@testing-library/react';
import { CardsList } from './CardsList';

test('CardsList renders cards', () => {
  render(<CardsList size={6} />);
  const cards = document.querySelectorAll('.card');
  expect(cards.length).toBe(6);
});
