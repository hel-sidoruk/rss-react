import { render } from '@testing-library/react';
import Card from './Card';

test('Card element has an image', () => {
  const { getByRole } = render(<Card image="https://picsum.photos/id/11/300/200" />);
  const image = getByRole('img');
  expect(image).toBeInTheDocument();
});

test('Card element has title', () => {
  const { getByRole } = render(<Card image="https://picsum.photos/id/11/300/200" />);
  const title = getByRole('heading');
  expect(title).toBeInTheDocument();
});

test('Card element has tags list', () => {
  const { getByRole } = render(<Card image="https://picsum.photos/id/11/300/200" />);
  const title = getByRole('list');
  expect(title).toBeInTheDocument();
});
