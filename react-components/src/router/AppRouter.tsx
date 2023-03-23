import { Routes, Route } from 'react-router-dom';
import { About } from '../pages/About';
import { AddCard } from '../pages/AddCard';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/add" element={<AddCard />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
