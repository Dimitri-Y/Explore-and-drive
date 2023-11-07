import { useDispatch, useSelector } from 'react-redux';
import {
  FilterForm,
  InputTo,
  InputFrom,
  InputBox,
  Label,
  ButtonSearch,
} from './Filter.styled';
import { useFormik } from 'formik';
import { MAKES, selectAdverts, selectFilter } from 'redux/adverts/selectors';
import { changeFilter } from 'redux/adverts/filterSlice';
import { ReactComponent as DropdownIcon } from '../Icons/chevron-down.svg';
import { ReactComponent as DropupIcon } from '../Icons/chevron-up.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  from: Yup.number()
    .min(0, 'Число повинно бути >= 0')
    .typeError('Невірний формат числа')
    .max(Yup.ref('to'), "Значення 'From' повинно бути менше ніж 'To'"),
  to: Yup.number()
    .min(0, 'Число повинно бути >= 0')
    .typeError('Невірний формат числа')
    .min(Yup.ref('from')),
});

const Filter = () => {
  const filter = useSelector(selectFilter);
  const adverts = useSelector(selectAdverts);

  const rentalPrices = Array.from(
    new Set(
      adverts
        .filter(advert => advert.rentalPrice !== undefined)
        .map(advert => {
          return advert.rentalPrice !== undefined && advert.rentalPrice;
        })
    )
  )
    .map(price => {
      return price && parseInt(price.slice(1));
    })
    .sort((a, b) => a - b);

  const maxPrice = Math.max(...rentalPrices);
  let prices = [];
  for (let i = 0; i <= maxPrice; i += 10) {
    prices.push(i);
  }

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const { make, price, from, to } = formik.values;
    if (!formik.errors.from || !formik.errors.to) {
      dispatch(changeFilter({ make, price, from: from, to: to }));
      formik.resetForm();
    } else {
      formik.errors.from && toast.error(`${formik.errors.from}`);
      formik.errors.to && toast.error(`${formik.errors.to}`);
    }
  };
  const formik = useFormik({
    initialValues: {
      make: filter.make || '',
      price: filter.price || '',
      from: filter.from || 0,
      to: filter.to || 0,
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });
  const formatNumber = value => {
    const cleanValue = value.replace(/[^0-9]/g, '');
    if (cleanValue.length > 3) {
      const parts = [];
      for (let i = cleanValue.length; i > 0; i -= 3) {
        parts.unshift(cleanValue.slice(Math.max(i - 3, 0), i));
      }
      return parts.join(',');
    } else {
      return cleanValue;
    }
  };

  return (
    <>
      <FilterForm onSubmit={handleSubmit}>
        <Label>
          Car brand
          <Dropdown
            type="text"
            name="make"
            options={MAKES}
            onChange={e => {
              formik.handleChange({
                target: { name: 'make', value: e.value },
              });
            }}
            value={formik.values.make}
            placeholder="Enter the text"
            className="select"
            controlClassName="selectControl"
            menuClassName="selectMenu"
            arrowOpen={<DropupIcon />}
            arrowClosed={<DropdownIcon />}
          />
        </Label>
        <Label>
          Price/ 1 hour
          <Dropdown
            type="text"
            name="price"
            options={prices}
            onChange={e => {
              formik.handleChange({
                target: { name: 'price', value: `To $${e.value}` },
              });
            }}
            value={formik.values.price}
            placeholder="To $"
            className="select"
            controlClassName="selectControl"
            menuClassName="selectMenu"
            arrowOpen={<DropupIcon />}
            arrowClosed={<DropdownIcon />}
          />
        </Label>
        <Label>
          Сar mileage / km
          <InputBox>
            <InputFrom
              type="text"
              name="from"
              placeholder="From"
              onChange={e => {
                const { value } = e.target;
                const formattedValue = value.replace(/\D/g, ''); // Вилучаємо всі нецифрові символи
                formik.handleChange({
                  target: { name: 'from', value: formattedValue },
                });
              }}
              value={`From ${
                formik.values.from
                  ? formatNumber(formik.values.from.toString())
                  : ' '
              }`}
              hasError={formik.errors.from}
            />
            <InputTo
              type="text"
              name="to"
              placeholder="To"
              onChange={e => {
                const { value } = e.target;
                const formattedValue = value.replace(/\D/g, ''); // Вилучаємо всі нецифрові символи
                formik.handleChange({
                  target: { name: 'to', value: formattedValue },
                });
              }}
              value={`To ${
                formik.values.to
                  ? formatNumber(formik.values.to.toString())
                  : ' '
              }`}
              hasError={formik.errors.to}
            />
          </InputBox>
        </Label>
        <ButtonSearch type="submit">Search</ButtonSearch>
        <ToastContainer />
      </FilterForm>
    </>
  );
};

export default Filter;
