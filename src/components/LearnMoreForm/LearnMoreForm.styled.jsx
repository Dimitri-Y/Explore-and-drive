import { styled } from 'styled-components';

export const LearnForm = styled.div`
  padding: 40px;

  .inline-block {
    max-height: calc(80vh);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .inline-block::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
export const Image = styled.img`
  width: 461px;
  object-fit: cover;
  height: 248px;
  border-radius: 16px;
`;
export const MakeModelYear = styled.p`
  font-family: 'Manrope-500';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  margin-top: 14px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const CarsOptions = styled.p`
  font-family: 'Manrope-400';
  width: calc(100% -80px);
  max-width: 461px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: rgba(18, 20, 23, 0.5);
  margin-top: 8px;
`;

export const Description = styled.div`
  font-family: 'Manrope-400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  max-width: 461px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  .accessories {
    margin-top: 24px;
  }
`;
export const RentalConditionList = styled.ul`
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  gap: 8px;
`;
export const RentalConditionEl = styled.li`
  padding: 7px 14px 7px 14px;
  border-radius: 35px;
  font-family: 'Montserrat-400';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  background-color: #f9f9f9;
  color: rgba(54, 53, 53, 1);
  display: flex;
  .value {
    font-family: 'Montserrat-600';
    font-weight: 600;
    color: rgba(52, 112, 255, 1);
  }
`;

export const RentalButton = styled.button`
  padding: 12px;
  width: 168px;
  border-radius: 16px;
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
  color: white;
  margin-top: 28px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
