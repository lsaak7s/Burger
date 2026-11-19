import { CarouselConfig } from '../../components/Carousel';
import { Container, ContainerCarrocel } from './styles';

export function Home() {
  return (
    <Container>
      <main>
        <h1>Home</h1>
      </main>
      <ContainerCarrocel>
        <section>
          <CarouselConfig />
        </section>
        <section>
          <h1>Produtos</h1>
        </section>
      </ContainerCarrocel>
    </Container>
  );
}
