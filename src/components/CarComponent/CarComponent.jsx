import {
  CarCard,
  Image,
  MakeModelYear,
  Model,
  RentalPrice,
  LineWare,
  CarsOptions,
  LearnMore,
  FavoriteButton,
} from './CarComponent.styled';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { changeFavorites } from 'redux/adverts/advertsSlice';
import { useState } from 'react';
import { selectFavorites } from 'redux/adverts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import LearnMoreModal from 'components/LearnMoreModal/LearnMoreModal';
import { setIsModal } from 'redux/adverts/isModalActiveSlice';

const CarComponent = ({ advert }) => {
  const dispatch = useDispatch();
  const Favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(
    Favorites.find(favorite => favorite.id === advert.id)
  );
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModalOpen = () => {
    setIsModalActive(true);
    dispatch(setIsModal(true));
  };
  const handleModalClose = () => {
    setIsModalActive(false);
    dispatch(setIsModal(false));
  };

  const pick = (obj, keys) => Object.fromEntries(keys.map(n => [n, obj[n]]));

  const advertInfo = pick(advert, [
    'id',
    'type',
    'fuelConsumption',
    'engineSize',
    'accessories',
    'functionalities',
    'rentalCompany',
    'address',
  ]);
  const handleFavorite = () => {
    dispatch(changeFavorites(advert));
    setIsFavorite(isFavorite ? false : true);
  };

  const address = advert.address && advert.address;
  const cityCountry = advert.address && address.slice(address.indexOf(',') + 2);
  const city = advert.address && cityCountry.slice(0, cityCountry.indexOf(','));
  const country =
    advert.address && cityCountry.slice(cityCountry.indexOf(',') + 2);
  const company = advert.rentalCompany;
  const type = advert.type;
  const Id = advertInfo.id;

  return (
    <>
      {' '}
      <CarCard key={advert.id}>
        <FavoriteButton onClick={handleFavorite}>
          {isFavorite ? (
            <AiFillHeart fill="rgba(52, 112, 255, 1)" size={18} />
          ) : (
            <AiOutlineHeart fill="rgba(255, 255, 255, 0.8)" size={18} />
          )}
        </FavoriteButton>
        <Image
          src={
            advert.img
              ? advert.img
              : 'https://images.cars.com/cldstatic/wp-content/uploads/1673941437-1425510881103.jpeg'
          }
        />
        <LineWare>
          <MakeModelYear>
            {advert.make}
            <Model> {advert.model}, </Model>
            {advert.year}
          </MakeModelYear>
          <RentalPrice>{advert.rentalPrice}</RentalPrice>
        </LineWare>
        <CarsOptions>
          {city && ` ${city} |`} {country && ` ${country} |`} Id: {Id}
          {' |'}
          {company && ` ${company} |`}
          {type && ` Type: ${type} |`}
        </CarsOptions>
        <LearnMore type="button" onClick={handleModalOpen}>
          Learn More
        </LearnMore>
      </CarCard>
      {isModalActive && (
        <LearnMoreModal advert={advert} onModalClose={handleModalClose} />
      )}
    </>
  );
};
export default CarComponent;
