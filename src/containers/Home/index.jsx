import { CarouselCategory } from '../../components/CarouselCategory';
import { Container, ContainerCarrocel } from './styles';
//import { CarouselProducts } from '../../components/CarouselProducts';

export function Home() {
  return (
    <Container>
      <header>
        <p>Home</p>
        <p>Contatos</p>
        <p>Ola</p>
        <p>Pedidos</p>
      </header>

      <main>
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
