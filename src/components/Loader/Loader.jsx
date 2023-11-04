import { RotatingLines } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled.jsx';

const Loader = () => {
  return (
    <LoaderStyled>
      <RotatingLines
        strokeColor="#0B44CD"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderStyled>
  );
};

export default Loader;
