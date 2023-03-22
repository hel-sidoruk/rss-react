import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};
