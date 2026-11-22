import { useState, useEffect } from 'react';
import CarouselModule from 'react-multi-carousel';
const Carousel = CarouselModule.default || CarouselModule;
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
// Deve estar exatamente assim, inclusive com as chaves {}
import { ContainerCarrocel, Title, ContainerIteis } from './styles';

export function CarouselCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategoris() {
      const { data } = await api.get('/listCategories');
      setCategories(data);
      console.log(data);
    }

    loadCategoris();
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
      <Title>Categorias</Title>

      <Carousel responsive={responsive} infinite={true}>
        {categories &&
          categories.map((category) => (
            <ContainerIteis key={category.id} imageUrl={category.url}>
              <p>{category.name}</p>
            </ContainerIteis>
          ))}
      </Carousel>
    </ContainerCarrocel>
  );
}
