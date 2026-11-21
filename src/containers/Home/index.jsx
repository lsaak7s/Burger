import { CarouselCategory } from '../../components/CarouselCategory';
import { Container, ContainerCel } from './styles';
//import { CarouselProducts } from '../../components/CarouselProducts';

export function Home() {
  return (
    <Container>
      <header>
        <h1>Burger</h1>
        <p className="p">Pedidos</p>
        <p>Contatos</p>
        <p>Conta</p>
      </header>

      <main>
        <ContainerCel>
          <section>
            <CarouselCategory />
          </section>
          <section>
            <CarouselCategory />
          </section>
        </ContainerCel>
      </main>
    </Container>
  );
}
