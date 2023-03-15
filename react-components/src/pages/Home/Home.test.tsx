import { render } from '@testing-library/react';
import { Home } from './Home';

test('There is a searchbar on the home page', () => {
  const { getByPlaceholderText } = render(<Home />);
  const input = getByPlaceholderText(/Search/);
  expect(input).toBeInTheDocument();
});
