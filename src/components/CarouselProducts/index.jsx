import { useState, useEffect } from 'react';
import CarouselModule from 'react-multi-carousel';
const Carousel = CarouselModule.default || CarouselModule;
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { CardProducts } from '../CardProducts';
import { ContainerCarrocel, Title } from './styles';

export function CarouselProducts() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/listProducts');

      const onlyOffers = data.filter((product) => product.offer);
      setOffers(onlyOffers);
      console.log(onlyOffers);
      console.log(offers);
      console.log(data);
    }
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  /*console.log({
    ContainerCarrocel: typeof ContainerCarrocel,
    Title: typeof Title,
    Carousel: typeof Carousel,
    ConteinerIteis: typeof ConteinerIteis,
  });
  console.log('Carousel', Carousel, '→ default:', Carousel && Carousel.default);*/
  return (
    <ContainerCarrocel>
      <Title>Ofertas do dia</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {offers.map((products) => (
          <CardProducts key={products.id} products={products} />
        ))}
      </Carousel>
    </ContainerCarrocel>
  );
}
