import { CarouselCategory } from '../../components/CarouselCategory';
import { Container, ContainerCel, CartoonImage } from './styles';
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
        <h2>Bem vindo</h2>
        <CartoonImage />
      </main>

      <ContainerCel>
        <section>
          <CarouselCategory />
        </section>
      </ContainerCel>
    </Container>
  );
}
