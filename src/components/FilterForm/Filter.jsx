import { useDispatch, useSelector } from 'react-redux';
import {
  FilterForm,
  InputTo,
  InputFrom,
  InputBox,
  Label,
  ButtonSearch,
} from './Filter.styled';
import { ErrorMessage, useFormik } from 'formik';
import { MAKES, selectAdverts, selectFilter } from 'redux/adverts/selectors';
import { changeFilter } from 'redux/adverts/filterSlice';
import { ReactComponent as DropdownIcon } from '../Icons/chevron-down.svg';
import { ReactComponent as DropupIcon } from '../Icons/chevron-up.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  from: Yup.number()
    .min(0, 'Число повинно бути >= 0')
    .typeError('Невірний формат числа')
    .lessThan(Yup.ref('to'), "Значення 'From' повинно бути менше ніж 'To'"),
  to: Yup.number()
    .min(0, 'Число повинно бути >= 0')
    .typeError('Невірний формат числа')
    .moreThan(Yup.ref('from')),
});

const Filter = () => {
  const filter = useSelector(selectFilter);
  const adverts = useSelector(selectAdverts);
  const [make, setMake] = useState();
  const [price, setPrice] = useState();

  const rentalPrices = adverts
    .reduce(
      (a, c) => (
        a.map(e => e.rentalPrice).includes(c.rentalPrice) || a.push(c), a
      ),
      []
    )
    .map(advert => parseInt(advert.rentalPrice.slice(1)))
    .sort((a, b) => a - b);
  // .map(price => {
  //   price.toString();
  //   return `$${price}`;
  // });
  console.log(rentalPrices);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const { make, price, from, to } = formik.values;
    const filter = { make, price, from, to };
    dispatch(changeFilter(filter));
  };
  console.log(filter);
  const formik = useFormik({
    initialValues: {
      make: filter.make,
      price: filter.price,
      from: filter.from,
      to: filter.to,
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  useEffect(() => {
    formik.errors.from && toast.error(`${formik.errors.from}`);
    formik.errors.to && toast.error(`${formik.errors.to}`);
  }, [formik.errors.from, formik.errors.to]);

  const formatNumber = value => {
    // Видаляємо всі нецифрові символи та коми з введеного значення
    const cleanValue = value.replace(/[^0-9]/g, '');

    // Перевіряємо, чи є значення достатньо довгим для додавання ком
    if (cleanValue.length > 3) {
      // Розділяємо значення на групи по три цифри та додаємо коми
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
            onChange={setMake}
            value={make}
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
            options={rentalPrices}
            onChange={e => {
              setPrice(`$${e.value}`);
            }}
            value={price}
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
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <span className="span-text">From</span>
              <InputFrom
                type="text"
                name="from"
                // placeholder="To"
                onChange={e => {
                  const { value } = e.target;
                  const formattedValue = value.replace(/\D/g, ''); // Вилучаємо всі нецифрові символи
                  console.log(formattedValue);
                  formik.handleChange({
                    target: { name: 'from', value: formattedValue },
                  });
                }}
                value={`From ${formatNumber(formik.values.from)}`}
                hasError={formik.errors.from}
              />
            </div>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <span className="span-text">To</span>
              <InputTo
                type="text"
                name="to"
                // placeholder="To"
                onChange={e => {
                  const { value } = e.target;
                  const formattedValue = value.replace(/\D/g, ''); // Вилучаємо всі нецифрові символи
                  console.log(formattedValue);
                  formik.handleChange({
                    target: { name: 'from', value: formattedValue },
                  });
                }}
                value={`To ${formatNumber(formik.values.to)}`}
                hasError={formik.errors.to}
              />
            </div>
          </InputBox>
        </Label>
        <ToastContainer />
        {/*
        
          <Label>
            Birthday
            <DatePicker
              showIcon
              selected={formik.values.birthday}
              onChange={value => {
                formik.setFieldValue('birthday', value);
              }}
              default={new Date()}
              icon={<AiOutlineDown />}
              dateFormat={'yyyy-MM-dd'}
              calendarStartDay={1}
              customInput={<Input />}
              maxDate={new Date()}
            />
            <CalendarGlobalStyles />
          </Label>
          <Label hasError={formik.errors.skype}>
            Skype
            <Input
              type="text"
              name="skype"
              onChange={formik.handleChange}
              value={formik.values.skype}
              hasError={formik.errors.skype}
            />
            {formik.errors.skype && <div>{formik.errors.skype}</div>}
          </Label>
          <Label hasError={formik.errors.email}>
            Email
            <Input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              hasError={formik.errors.email}
            />
            {formik.errors.email && <div>{formik.errors.email}</div>}
          </Label>
        </InputBox> */}
        <ButtonSearch>Search</ButtonSearch>
      </FilterForm>
    </>
  );
};

export default Filter;
