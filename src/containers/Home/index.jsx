import { Container, ContainerCarrocel } from './styles';

export function Home() {
  return (
    <Container>
      <main>
        <h1>Home</h1>
      </main>
      <ContainerCarrocel>
        <section>
          <h1>Categorias</h1>
        </section>
        <section>
          <h1>Produtos</h1>
        </section>
      </ContainerCarrocel>
    </Container>
  );
}
