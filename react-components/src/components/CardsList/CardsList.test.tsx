import { render } from '@testing-library/react';
import { CardsList } from './CardsList';

test('CardsList renders cards', () => {
  const { getAllByAltText } = render(<CardsList size={6} />);
  const cardImages = getAllByAltText(/Card image/);
  expect(cardImages.length).toBe(6);
});
