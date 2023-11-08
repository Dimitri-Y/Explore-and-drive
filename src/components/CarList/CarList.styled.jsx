import { styled } from 'styled-components';

export const List = styled.ul`
  background-color: #fff;
  gap: 50px 29px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: auto;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 32px;
  max-width: 1184px;
`;
export const ButtonLoadMore = styled.a`
  font-family: 'Manrope-500';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(52, 112, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: underline;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
