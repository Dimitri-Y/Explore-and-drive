import {
  UserForm,
  ButtonOrder,
  Input,
  RentalOrderCountLabel,
} from './UserOrder.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectRentalOrder,
  selectRentalOrderCount,
} from 'redux/adverts/selectors';
import { useSelector } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(`Name is required`).max(20).min(3),
  surname: Yup.string().required(`Surname is required`).max(20).min(3),
  address: Yup.string().required(`Address is required`),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'The number should start with +380 and 9 number', {
      excludeEmptyString: true,
    })
    .required(`Phone is required`),
});

const UserOrder = () => {
  const rentalOrderCount = useSelector(selectRentalOrderCount);
  const rentalOrder = useSelector(selectRentalOrder);
  const handleSubmit = async e => {
    e.preventDefault();
    const { name, surname, address, phone } = formik.values;
    const values = {
      name: name,
      surname: surname,
      address: address,
      phone: phone,
      order: rentalOrder,
    };
    if (
      formik.errors.name ||
      formik.errors.surname ||
      formik.errors.address ||
      formik.errors.phone
    ) {
      formik.errors.name && toast.error(`${formik.errors.name}`);
      formik.errors.surname && toast.error(`${formik.errors.surname}`);
      formik.errors.address && toast.error(`${formik.errors.address}`);
      formik.errors.phone && toast.error(`${formik.errors.phone}`);
    } else {
      const jsonData = JSON.stringify(values, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'user-information.json');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.done(`data for making the order sended.`);
      formik.resetForm();
    }
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      address: '',
      phone: '',
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <UserForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="NAME"
          onChange={e => {
            const { value } = e.target;
            formik.handleChange({
              target: { name: 'name', value: value },
            });
          }}
          value={formik.values.name}
          hasError={formik.errors.name}
        ></Input>
        <Input
          type="text"
          name="surname"
          placeholder="SURNAME"
          onChange={e => {
            const { value } = e.target;
            formik.handleChange({
              target: { name: 'surname', value: value },
            });
          }}
          value={formik.values.surname}
          hasError={formik.errors.surname}
        ></Input>
        <Input
          type="text"
          name="address"
          placeholder="ADDRESS"
          onChange={e => {
            const { value } = e.target;
            formik.handleChange({
              target: { name: 'address', value: value },
            });
          }}
          value={formik.values.address}
          hasError={formik.errors.address}
        ></Input>
        <Input
          type="tel"
          name="phone"
          placeholder="PHONE"
          onChange={e => {
            const { value } = e.target;
            formik.handleChange({
              target: { name: 'phone', value: value },
            });
          }}
          value={formik.values.phone}
          hasError={formik.errors.phone}
        ></Input>
        <ButtonOrder type="submit">Order</ButtonOrder>
        <RentalOrderCountLabel>
          the total cost: {rentalOrderCount === null ? 0 : rentalOrderCount} $
        </RentalOrderCountLabel>
        <ToastContainer />
      </UserForm>
    </div>
  );
};

export default UserOrder;
