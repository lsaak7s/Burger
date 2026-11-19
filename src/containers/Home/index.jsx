import { CarouselCategory } from '../../components/CarouselCategory';
import { CarouselProducts } from '../../components/CarouselProducts';
import { Container, ContainerCarrocel, Title } from './styles';

export function Home() {
  return (
    <Container>
      <main>
        <h1>Home</h1>
      </main>
      <ContainerCarrocel>
        <section>
          <CarouselCategory />
        </section>
        <section>
          <Title>Products </Title>
          <CarouselProducts />
        </section>
      </ContainerCarrocel>
    </Container>
  );
}
