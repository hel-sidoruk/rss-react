import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { Header } from './Header';

test('There are two links - Home and About - in header', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const homeLink = getByText(/Home/);
  expect(homeLink).toBeInTheDocument();
  const aboutLink = getByText(/About/);
  expect(aboutLink).toBeInTheDocument();
});

test('Navigation works', () => {
  const { getByText } = render(<App />);
  const aboutLink = getByText(/About/);
  expect(aboutLink).toBeInTheDocument();
  fireEvent.click(aboutLink);
  const aboutText = getByText(/About Us Page/i);
  expect(aboutText).toBeInTheDocument();
});
