import styled from 'styled-components';

import CartoonHome from '../../assets/CartoonHome.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-width: 100vh;

  background-color: rgb(74, 70, 34);
  header {
    display: flex;
    flex-direction: row;

    font-size: 25px;
  }
`;
export const P = styled.p`
  width: 100vw;
  height: 60vh;

  background: url('${CartoonHome}') no-repeat center;
  background-size: contain;

  font-size: 40px;
`;
export const ContainerCarrocel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px 0;

  .CarouselCategory {
    width: 80vw;
    height: 40vh;

    /* AQUI ESTÁ O SEGREDO: Usamos o $imageUrl que vem do componente */
    background: url('${(props) => props.$imageUrl}') no-repeat center;
    background-size: cover; /* Faz a imagem esticar e preencher bonito sem esticar errado */

    border-radius: 10px;
  }
`;
