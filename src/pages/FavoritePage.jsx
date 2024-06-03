import CarList from 'components/CarList/CarList';
import UserOrder from 'components/UserOrder/UserOrder';

export default function FavoritePage() {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '32px' }}>favorite cars</h1>
      <UserOrder></UserOrder>
      <CarList option={'favorites'}></CarList>;
    </>
  );
}
