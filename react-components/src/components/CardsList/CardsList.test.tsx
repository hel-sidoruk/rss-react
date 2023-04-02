import { render } from '@testing-library/react';
import { mockPosts } from '../../utils/mockPosts';
import { CardsList } from './CardsList';

test('CardsList renders cards', () => {
  const { getAllByAltText } = render(<CardsList />);

  const cardImages = getAllByAltText(/Card image/);
  expect(cardImages.length).toBe(mockPosts.length);
});
