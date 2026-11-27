import PropTypes from 'prop-types';

import { Container, CardImg } from './styles';

export function CardProducts({ products }) {
  console.log(products);
  return (
    <Container>
      <CardImg src={products.url} alt={products.name} />
      <div>
        <p>{products.name}</p>
        <strong>R${products.price}</strong>
      </div>
    </Container>
  );
}

CardProducts.prototype = {
  products: PropTypes.object,
};
