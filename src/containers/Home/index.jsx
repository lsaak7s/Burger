import { CarouselCategory } from '../../components/CarouselCategory';
import { CarouselProducts } from '../../components/CarouselProducts';
import { Container, ContainerCarrocel } from './styles';

export function Home() {
  return (
    <Container>
      <main>
        <h2>Header</h2>
        <h1>Bem vindo</h1>
      </main>
      <ContainerCarrocel>
        <section>
          <CarouselCategory />
        </section>
        <section>
          <CarouselCategory />
        </section>
      </ContainerCarrocel>
    </Container>
  );
}
