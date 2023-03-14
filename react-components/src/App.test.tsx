import { render } from '@testing-library/react';
import App from './App';

test('loads and displays greeting', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
