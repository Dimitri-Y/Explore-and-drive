import { styled } from 'styled-components';

export const CarCard = styled.li`
  border-radius: 16px;
  width: 274px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FavoriteButton = styled.a`
  position: absolute;
  right: 14px;
  top: 14px;
  cursor: pointer;
`;

export const Image = styled.img`
  border-radius: 16px;
  height: 268px;
  object-fit: cover;
`;

export const LineWare = styled.div`
  display: flex;
  padding-top: 14px;
`;
export const MakeModelYear = styled.p`
  font-family: 'Manrope-500';
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  max-width: 150px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const RentalPrice = styled.p`
  font-family: 'Manrope-500';
  margin-right: 10px;
`;
export const CarsOptions = styled.p`
  font-family: 'Manrope-400';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: rgba(18, 20, 23, 0.5);
  margin-top: 8px;
`;

export const AddOrderBlock = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: space-around;
`;
export const AddOrderLabel = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope-500';
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
`;
export const ButtonOrderBox = styled.button`
  padding: 12px;
  width: 40px;
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
  cursor: pointer;
  color: white;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const LearnMore = styled.button`
  padding: 12px;
  width: 100%;
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
