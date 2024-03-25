import { Oval } from 'react-loader-spinner';
import PropTypes from 'prop-types';

function Loading({ variant = 'lg' }) {
  return (
    <Oval
      visible={true}
      strokeWidth={3}
      height={variant === 'sm' ? '20' : '30'}
      width={variant === 'sm' ? '20' : '30'}
      color="#646cff"
      secondaryColor="#646cffff"
      ariaLabel="oval-loading"
      wrapperClass="loader-container"
    />
  );
}
Loading.propTypes = {
  variant: PropTypes.oneOf(['sm', 'lg']),
};

export default Loading;
