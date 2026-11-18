import { useState, useEffect } from 'react';
import Carousell from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { ContainerCarrocel, Title, ConteinerIteis } from './styles';

export function Carousel() {
  const [categories, setCategories] = useState([]);
  useEffect(
    () => {
      async function loadCategoris() {
        const data = await api.get('/listCategories');

        setCategories(data);
        console.log(data);
      }

      loadCategoris();
    },
    [] /*Aqui diz que e para rodar somente uma vez AAAAAAAAAAAAAAAAAAAAAA */
  );

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <ContainerCarrocel>
      <Title>ContainerCarrocel</Title>

      <Carousell
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {' '}
        {categories.map((category) => (
          <ConteinerIteis key={category.id}>{category.name}</ConteinerIteis>
        ))}
      </Carousell>
    </ContainerCarrocel>
  );
}
