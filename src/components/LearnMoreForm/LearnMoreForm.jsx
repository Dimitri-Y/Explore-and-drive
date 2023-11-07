import {
  Image,
  MakeModelYear,
  Model,
  CarsOptions,
  LearnForm,
  Description,
  RentalConditionList,
  RentalConditionEl,
  RentalButton,
} from './LearnMoreForm.styled';

const LearnMoreForm = ({ advert }) => {
  //#region Constants
  const make = advert.make || ' ';
  const model = advert.model || ' ';
  const year = advert.year || ' ';
  const Id = advert.id;

  const address = advert.address && advert.address;
  const cityCountry = advert.address && address.slice(address.indexOf(',') + 2);
  const city = advert.address && cityCountry.slice(0, cityCountry.indexOf(','));
  const country =
    advert.address && cityCountry.slice(cityCountry.indexOf(',') + 2);
  const company = advert.rentalCompany;
  const type = advert.type;
  const fuelConsumption = advert.fuelConsumption;
  const engineSize = advert.engineSize;

  const description = advert.description;

  const minimumAge =
    (advert.rentalConditions &&
      parseInt(
        advert.rentalConditions.slice(
          advert.rentalConditions.indexOf('Minimum age:') +
            'Minimum age:'.length +
            1,
          advert.rentalConditions.indexOf('\n')
        )
      )) ||
    null;
  const rentalPrice =
    advert.rentalPrice &&
    parseInt(advert.rentalPrice.slice(advert.rentalPrice.indexOf('$') + 1));
  const mileage = advert.mileage;

  const conditionsArray = advert.rentalConditions
    ? advert.rentalConditions
        .slice(advert.rentalConditions.indexOf(minimumAge.toString()) + 3)
        .split('\n')
    : [];
  const conditionsElements = advert.rentalConditions
    ? conditionsArray.map(condition => ({
        condition: condition,
        value: '',
      }))
    : [];

  minimumAge &&
    conditionsElements.unshift({
      condition: 'Minimum age: ',
      value: minimumAge,
    });
  mileage &&
    conditionsElements.push({ condition: 'Mileage: ', value: mileage });
  rentalPrice &&
    conditionsElements.push({ condition: 'Price: ', value: rentalPrice });
  //#endregion

  return (
    <LearnForm className="form">
      <Image
        src={
          advert.img
            ? advert.img
            : 'https://images.cars.com/cldstatic/wp-content/uploads/1673941437-1425510881103.jpeg'
        }
      />
      <div className="inline-block">
        <MakeModelYear>
          {make}
          <Model> {model}, </Model>
          {year}
        </MakeModelYear>
        <CarsOptions>
          {city && ` ${city} |`} {country && ` ${country} |`} Id: {Id}
          {' |'}
          {company && ` ${company} |`} {year && ` Year:${year} |`}
          {type && ` Type: ${type} |`}
          {fuelConsumption && ` Fuel Consumption: ${fuelConsumption} |`}
          {engineSize && ` Engine Size: ${engineSize} |`}
        </CarsOptions>
        <Description>
          {description}
          {advert.functionalities && advert.accessories && (
            <p className="accessories">Accessories and functionalities:</p>
          )}
        </Description>
        <CarsOptions>
          {advert.accessories?.join(' | ')}
          {advert.functionalities && '| '}
          {advert.functionalities?.join(' | ')}
        </CarsOptions>
        <Description>Rental Conditions:</Description>
        <RentalConditionList>
          {conditionsElements.map((condition, index) => (
            <RentalConditionEl key={index}>
              {condition.condition + ' '}
              <p className="value">{condition.value}</p>
            </RentalConditionEl>
          ))}
        </RentalConditionList>
        <RentalButton>Rental car</RentalButton>
      </div>
    </LearnForm>
  );
};
export default LearnMoreForm;
