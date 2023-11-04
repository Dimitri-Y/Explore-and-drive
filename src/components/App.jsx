import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import Loader from './Loader/Loader';
import { Container } from 'pages/Pages.styled';
const Home = lazy(() => import('../pages/Home'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));

const App = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
export default App;
