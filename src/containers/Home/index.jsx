import { CarouselCategory } from '../../components/CarouselCategory';
import { Container, ContainerCel } from './styles';
//import { CarouselProducts } from '../../components/CarouselProducts';

export function Home() {
  return (
    <Container>
      <header>
        <p className="p">Pedidos</p>
        <p className="p">Contatos</p>
        <p className="p">Conta</p>
      </header>
      <main>
        <h1 className="Img">Burger</h1>
      </main>

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
