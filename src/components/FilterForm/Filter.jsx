import { useDispatch, useSelector } from 'react-redux';
import {
  DataListMake,
  FilterForm,
  Input,
  Label,
  Option,
  ButtonSearch,
} from './Filter.styled';
import { useFormik } from 'formik';
import { MAKES, selectAdverts, selectFilter } from 'redux/adverts/selectors';
import { changeFilter } from 'redux/adverts/filterSlice';
import { ReactComponent as DropdownIcon } from '../Icons/chevron-down.svg';
import { ReactComponent as DropupIcon } from '../Icons/chevron-up.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const adverts = useSelector(selectAdverts);
  const rentalPrices = adverts
    .map(advert => parseInt(advert.rentalPrice.slice(1)))
    .sort((a, b) => a - b)
    .map(price => {
      price.toString();
      return `$${price}`;
    });

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
      make: filter.make || '',
      price: filter.price || '',
      from: filter.from || '',
      to: filter.to || '',
    },
    onSubmit: handleSubmit,
  });
  // const disabledFunc = () => {
  //   const birthdayMonth = formatWithLeadingZeros(
  //     formik.values.birthday.getMonth() + 1
  //   );
  //   const dayOfMonth = formatWithLeadingZeros(formik.values.birthday.getDate());
  //   const updateBirthday = `${formik.values.birthday.getFullYear()}-${birthdayMonth}-${dayOfMonth}`;

  //   const disabled =
  //     // user.userName === formik.values.name &&
  //     // user.phone === formik.values.number &&
  //     // user.birthday === updateBirthday &&
  //     // user.skype === formik.values.skype &&
  //     // user.email === formik.values.email;

  //   return disabled;
  // };
  return (
    <>
      <FilterForm onSubmit={handleSubmit}>
        <Label>
          Car brand
          {/* <Input type="text" list="make" /> */}
          <DataListMake id="make">
            {MAKES.map(make => (
              <Option value={make}>{make}</Option>
            ))}
            {/* <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option> */}
          </DataListMake>
        </Label>
        <Label>
          Car brand
          <Dropdown
            type="text"
            name="make"
            options={MAKES}
            onChange={formik.handleChange}
            value={formik.values.make}
            placeholder="Enter the text"
            className="select-makes"
            controlClassName="selectControl-makes"
            menuClassName="selectMenu-makes"
            arrowOpen={<DropupIcon />}
            arrowClosed={<DropdownIcon />}
          />
        </Label>
        {/*
        <InputBox>
          <Label hasError={formik.errors.name}>
            User Name
            <Input
              type="text"
              name="name"
              maxLength="16"
              onChange={formik.handleChange}
              value={formik.values.name}
              hasError={formik.errors.name}
            />
            {formik.errors.name && <div>{formik.errors.name}</div>}
          </Label>
          <Label hasError={formik.errors.number}>
            Phone
            <Input
              type="tel"
              name="number"
              onChange={formik.handleChange}
              value={formik.values.number}
              hasError={formik.errors.number}
            />
            {formik.errors.number && <div>{formik.errors.number}</div>}
          </Label>

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
