import { CarouselCategory } from '../../components/CarouselCategory';
import { Container, ContainerCarrocel, P } from './styles';
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
        <P>Bem vindo</P>
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
