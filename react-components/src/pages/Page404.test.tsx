import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page404 from './Page404';

test('There is a "Not found" text on the 404 page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page404 />
    </BrowserRouter>
  );
  const text = getByText(/Not found/);
  expect(text).toBeInTheDocument();
});

test('There is a Back home link on the 404 page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page404 />
    </BrowserRouter>
  );
  const link = getByText(/Back home/);
  expect(link).toBeInTheDocument();
});
