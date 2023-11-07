import { useDispatch, useSelector } from 'react-redux';
import { List } from './CarList.styled';
import { useEffect } from 'react';
import { fetchAdverts } from 'redux/adverts/operations';
import CarComponent from 'components/CarComponent/CarComponent';
import { selectIsLoading, selectVisibleAdverts } from 'redux/adverts/selectors';
import Loader from 'components/Loader/Loader';
import { selectFavorites } from 'redux/adverts/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarList = ({ option }) => {
  const dispatch = useDispatch();
  const filterAdverts = useSelector(selectVisibleAdverts);
  const Favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts())
      .then(data => {
        if (data.payload === 'Request failed with status code 404') {
          toast.error(`Request failed with status code 404`);
        }
      })
      .catch(error => {
        toast.error(`${error}`);
      });
  }, [dispatch]);

  return (
    <>
      <List>
        {isLoading ? (
          <Loader />
        ) : option === 'favorites' ? (
          Favorites.map(advert => (
            <CarComponent key={advert.id} advert={advert}></CarComponent>
          ))
        ) : (
          filterAdverts.map(advert => (
            <CarComponent key={advert.id} advert={advert}></CarComponent>
          ))
        )}
      </List>
      <ToastContainer />
    </>
  );
};
export default CarList;
