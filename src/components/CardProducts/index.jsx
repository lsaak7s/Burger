import PropTypes from 'prop-types';

import { Container, CardImg } from './styles';

export function CardProducts({ products }) {
  return (
    <Container>
      <h3>CardProducts</h3>
      <CardImg src={products.url} alt={products.name} />
      <div>
        <p>{products.name}</p>
        <strong>{products.price}</strong>
      </div>
    </Container>
  );
}

CardProducts.prototype = {
  products: PropTypes.object,
};
