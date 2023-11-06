import { styled } from 'styled-components';

export const FilterForm = styled.form`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 18px;
  padding-left: 18px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 18px;
  text-align: center;

  .select-makes {
  }
  .selectControl-makes {
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
  .selectMenu-makes {
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
  .selectMenu-makes::-webkit-scrollbar {
    width: 8px;
  }
  .selectMenu-makes::-webkit-scrollbar-track {
  }
  .selectMenu-makes::-webkit-scrollbar-thumb {
    height: 130px;
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }
`;

export const DataListMake = styled.select`
  font-family: 'Manrope-500';
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(18, 20, 23, 1);
  padding: 14px 89px 14px 18px;
  border-radius: 14px;
  gap: 32px;
`;
export const Option = styled.option`
  font-family: 'Manrope-500';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(18, 20, 23, 0.2);
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-bottom: 40px; */
`;

export const Input = styled.input`
  font-family: 'Manrope-500';
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(18, 20, 23, 1);
  padding: 14px 89px 14px 18px;
  border-radius: 14px;
  gap: 32px;
  input::-webkit-calendar-picker-indicator {
    display: none;
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
  font-family: 'Inter-SemiBold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  border: none;
  padding: 14px 50px;
  border-radius: 16px;
  background: #3e85f3;
  color: #fff;

  @media (min-width: 768px) {
    padding: 15px 83px;
  }

  &:disabled {
    background-color: rgba(62, 133, 243, 0.5);
  }
`;
