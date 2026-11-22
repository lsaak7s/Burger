import { CarouselCategory } from '../../components/CarouselCategory';
import { Container, ContainerCel } from './styles';
//import { CarouselProducts } from '../../components/CarouselProducts';

export function Home() {
  return (
    <Container>
      <header>
        <h1 className="uteis">Burger</h1>
        <p className="uteis">Pedidos</p>
        <p className="uteis">Contatos</p>
        <p className="uteis">Conta</p>
      </header>

      <main className="Img">
        <h1 className="wellcome">Burger</h1>
        <ContainerCel>
          <section>
            <CarouselCategory />
          </section>
        </ContainerCel>
      </main>
    </Container>
  );
}
