import Icons from '../images/icons.svg'; // Path to your icons.svg
import PropTypes from 'prop-types';

const Icon = ({ className, name, color, size }) => (
  <svg className={className} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
