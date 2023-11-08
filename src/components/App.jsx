import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import Loader from './Loader/Loader';
import { Container } from 'pages/Pages.styled';
import ScrollToTop from 'react-scroll-to-top';
import { selectIsModalActive } from 'redux/adverts/selectors';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('../pages/Home'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));

const App = () => {
  const isModal = useSelector(selectIsModalActive);
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
      {!isModal && <ScrollToTop smooth color="#0b44cd" top="400" />}
    </Container>
  );
};
export default App;
