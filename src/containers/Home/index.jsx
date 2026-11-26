import { CarouselCategory } from '../../components/CarouselCategory';
import { CarouselProducts } from '../../components/CarouselProducts';
import { Footer } from '../../components/footer';
import { ContainerHeader, Header, Nav, CarouselContainer } from './styles';

export function Home() {
  return (
    <ContainerHeader>
      <Header>
        <Nav>
          <span className="uteis">Burger</span>
          <span className="uteis">Pedidos</span>
          <span className="uteis">Contatos</span>
          <span className="uteis">Conta</span>
        </Nav>
      </Header>

      <main>
        <h1>Bem-vindo!</h1>
      </main>

      <CarouselContainer>
        <section>
          <CarouselCategory />
          <CarouselProducts />
        </section>
      </CarouselContainer>
      <Footer />
    </ContainerHeader>
  );
}
