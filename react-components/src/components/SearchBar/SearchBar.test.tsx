import { fireEvent, render } from '@testing-library/react';
import { SearchBar } from './SearchBar';

test('There is a searchbar on the page', () => {
  const { getByPlaceholderText } = render(<SearchBar onSubmit={() => {}} />);
  const input = getByPlaceholderText(/Search/);
  expect(input).toBeInTheDocument();
});

test('Searchbar value is changing on input', () => {
  const { getByPlaceholderText } = render(<SearchBar onSubmit={() => {}} />);
  const input = getByPlaceholderText(/Search/);
  fireEvent.change(input, { target: { value: 'a' } });
  expect((input as HTMLInputElement).value).toBe('a');
});
