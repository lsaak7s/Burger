import PropTypes from 'prop-types';

import { ConteinerButton } from './styles.js';

export function Button({ children }) {
  return <ConteinerButton>{children}</ConteinerButton>;
}

Button.prototype = {
  children: PropTypes.string,
};
