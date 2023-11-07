import { styled } from 'styled-components';

export const FilterForm = styled.form`
  padding-top: 50px;
  display: flex;
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

  .select {
  }
  .selectControl {
    display: flex;
    font-family: 'Manrope-500';
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    border: 0;
    background-color: rgba(247, 247, 251, 1);
    color: rgba(18, 20, 23, 1);
    padding: 14px 0px 14px 18px;
    border-radius: 14px;
    gap: 32px;
  }
  .selectMenu {
    font-family: 'Manrope-500';
    text-align: left;
    border-radius: 14px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(18, 20, 23, 0.2);
    height: 272px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  }
  .selectMenu::-webkit-scrollbar {
    width: 8px;
  }
  .selectMenu::-webkit-scrollbar-track {
  }
  .selectMenu::-webkit-scrollbar-thumb {
    height: 130px;
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  .span-text {
    position: absolute;
    top: 14px;
    left: 14px;
    font-family: 'Manrope-500';
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(18, 20, 23, 1);
  }
  .errorField {
    font-family: 'Manrope-500';
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: #ff0000;
  }
  input::placeholder {
    font-family: 'Manrope-500';
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(18, 20, 23, 1);
  }
`;

export const InputFrom = styled.input`
  width: 160px;
  padding: 14px 0px 14px 24px;
  border: none;
  background: linear-gradient(
      0deg,
      rgba(138, 138, 137, 0.2),
      rgba(138, 138, 137, 0.2)
    ),
    linear-gradient(0deg, #f7f7fb, #f7f7fb);
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-family: 'Manrope-500';
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(18, 20, 23, 1);
  border-radius: 14px 0px 0px 14px;
  outline: none;
  ${props =>
    props.hasError &&
    `
      border: 2px solid red; 
    `}

  input::placeholder {
    font-family: 'Manrope-500';
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(18, 20, 23, 1);
  }
`;

export const InputTo = styled.input`
  width: 160px;
  padding: 14px 0px 14px 24px;
  border-radius: 0px 14px 14px 0px;
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
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(18, 20, 23, 1);
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Manrope-500';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(138, 138, 137, 1);
  gap: 8px;
`;

Label.shouldForwardProp = prop => prop !== 'hasError';

export const ButtonSearch = styled.button`
  padding: 14px 44px 14px 44px;
  width: 136px;
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
