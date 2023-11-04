import CarList from 'components/CarList/CarList';

export default function FavoritePage() {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '32px' }}>favorite cars</h1>
      <CarList option={'favorites'}></CarList>;
    </>
  );
}
