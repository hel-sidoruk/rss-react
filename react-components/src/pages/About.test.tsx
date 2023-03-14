import { render } from '@testing-library/react';
import About from './About';

test('lThere is text "About Us" on about page', () => {
  const { getByText } = render(<About />);
  const aboutText = getByText(/About Us Page/i);
  expect(aboutText).toBeInTheDocument();
});
