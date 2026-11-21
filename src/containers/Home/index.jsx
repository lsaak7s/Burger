import { CarouselCategory } from '../../components/CarouselCategory';
import { Container, Containercel } from './styles';
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
      </main>

      <Containercel>
        <section>
          <CarouselCategory />
        </section>
      </Containercel>
    </Container>
  );
}
