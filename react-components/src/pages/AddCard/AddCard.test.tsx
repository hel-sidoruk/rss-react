import { render } from '@testing-library/react';
import { AddCard } from './AddCard';

test('The page has a heading', () => {
  const { getByText } = render(<AddCard />);
  const title = getByText(/Add Card/);
  expect(title).toBeInTheDocument();
});
