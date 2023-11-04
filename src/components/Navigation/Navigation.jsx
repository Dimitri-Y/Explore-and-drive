import { NavLink } from 'react-router-dom';
import { NavigationContainer, NavigationDiv } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationDiv>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </NavigationDiv>
    </NavigationContainer>
  );
};
