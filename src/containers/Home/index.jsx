import { CarouselCategory } from '../../components/CarouselCategory';
import { ContainerHeader, CarouselContainer, Header, Nav } from './styles';

export function Home() {
  return (
    <ContainerHeader>
      <Header>
        <Nav>
          <span className="uteis">Home</span>
          <span className="uteis">Pedidos</span>
          <span className="uteis">Contatos</span>
          <span className="uteis">Conta</span>
        </Nav>
      </Header>

      <main>
        <h1>Bem-vindo!</h1>
      </main>

      <CarouselContainer className="Img">
        <section>
          <CarouselCategory />
        </section>
      </CarouselContainer>
    </ContainerHeader>
  );
}
