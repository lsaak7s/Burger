import { CarouselCategory } from '../../components/CarouselCategory';
import { ContainerHeader, CarouselContainer } from './styles';

export function Home() {
  return (
    <ContainerHeader>
      <header>
        <p className="uteis">Burger</p>
        <p className="uteis">Pedidos</p>
        <p className="uteis">Contatos</p>
        <p className="uteis">Conta</p>
      </header>

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
