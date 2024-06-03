import { useDispatch, useSelector } from 'react-redux';
import { ButtonLoadMore, List } from './CarList.styled';
import { useEffect } from 'react';
import { fetchAdverts } from 'redux/adverts/operations';
import CarComponent from 'components/CarComponent/CarComponent';
import {
  selectIsLoading,
  selectPage,
  selectTotalLimit,
  selectVisibleAdverts,
} from 'redux/adverts/selectors';
import Loader from 'components/Loader/Loader';
import { selectFavorites } from 'redux/adverts/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { incPage } from 'redux/adverts/advertsSlice';

const CarList = ({ option }) => {
  const dispatch = useDispatch();
  const filterAdverts = useSelector(selectVisibleAdverts);
  const Favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const totalLimit = useSelector(selectTotalLimit);
  useEffect(() => {
    dispatch(fetchAdverts({ page: page, limit: 12 }))
      .then(data => {
        if (data.payload === 'Request failed with status code 404') {
          toast.error(`Request failed with status code 404`);
        }
      })
      .catch(error => {
        toast.error(`${error}`);
      });
  }, [dispatch, page]);
  const IncPage = () => {
    dispatch(incPage());
  };

  return (
    <>
      <List>
        {isLoading ? (
          <Loader />
        ) : option === 'favorites' ? (
          Favorites.map(advert => (
            <CarComponent
              key={advert.id}
              advert={advert}
              option={option}
            ></CarComponent>
          ))
        ) : (
          filterAdverts.map(advert => (
            <CarComponent
              key={advert.id}
              advert={advert}
              option={option}
            ></CarComponent>
          ))
        )}
      </List>
      {option !== 'favorites' && !isLoading && !totalLimit && (
        <ButtonLoadMore type="button" onClick={IncPage}>
          Load More
        </ButtonLoadMore>
      )}
      <ToastContainer />
    </>
  );
};
export default CarList;
