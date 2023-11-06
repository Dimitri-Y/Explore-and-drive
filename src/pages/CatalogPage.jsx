import CarList from 'components/CarList/CarList';
import Filter from 'components/FilterForm/Filter';

export default function CatalogPage() {
  return (
    <>
      <Filter></Filter>
      <CarList></CarList>
    </>
  );
}
