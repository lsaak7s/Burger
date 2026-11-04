import PropTypes from 'prop-types';

import { ConteinerButton } from './styles.js';

export function Button({ children, ...rest }) {
  return <ConteinerButton {...rest}>{children}</ConteinerButton>;
}

Button.prototype = {
  children: PropTypes.string,
};
