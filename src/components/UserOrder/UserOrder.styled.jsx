import { styled } from 'styled-components';

export const UserForm = styled.form`
  padding-top: 50px;
  max-width: 280px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  padding-bottom: 18px;
  padding-left: 18px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 18px;
  justify-content: center;
  gap: 18px;
`;
export const RentalOrderCountLabel = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope-500';
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
  margin: 20px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  line-height: 20px;
  padding: 14px 0px 14px 24px;
  border-radius: 14px;
  margin-bottom: 20px;
  border: none;
  background: linear-gradient(
      0deg,
      rgba(138, 138, 137, 0.2),
      rgba(138, 138, 137, 0.2)
    ),
    linear-gradient(0deg, #f7f7fb, #f7f7fb);
  font-family: 'Manrope-500';
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(18, 20, 23, 1);
  outline: none;

  ${props =>
    props.hasError &&
    `
      border: 2px solid red; 
    `}

  input::placeholder {
    font-family: 'Manrope-500';
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(18, 20, 23, 1);
  }
`;

export const ButtonOrder = styled.button`
  padding: 14px 44px 14px 44px;
  width: 100%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 112, 255, 1);
  border: 0px;
  font-family: 'Manrope-600';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;
  color: white;
  margin-top: 28px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
