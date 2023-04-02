import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

test('Page 404 is showed when there is a bad route', () => {
  const badRoute = '/some/bad/route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <AppRouter />
    </MemoryRouter>
  );

  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});
