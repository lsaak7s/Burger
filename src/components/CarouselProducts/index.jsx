import { useState, useEffect } from 'react';
import CarouselModule from 'react-multi-carousel';
const Carousel = CarouselModule.default || CarouselModule;
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { ContainerCarrocel, ConteinerIteis } from './styles';

export function CarouselProducts() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategoris() {
      const { data } = await api.get('/listProducts');
      setCategories(data);
      console.log(data);
    }

    loadCategoris();
  }, []);

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
  /*console.log({
    ContainerCarrocel: typeof ContainerCarrocel,
    Title: typeof Title,
    Carousel: typeof Carousel,
    ConteinerIteis: typeof ConteinerIteis,
  });
  console.log('Carousel', Carousel, '→ default:', Carousel && Carousel.default);*/
  return (
    <ContainerCarrocel>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ConteinerIteis key={category.id}>{category.name},</ConteinerIteis>
        ))}
      </Carousel>
    </ContainerCarrocel>
  );
}
