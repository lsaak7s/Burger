import styled from 'styled-components';

import CartoonHome from '../../assets/CartoonHome.jpg';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vh;
  flex-direction: column;
  /* Uma cor de fundo leve para destacar a imagem */

  h1 {
    width: 100vw;
    height: 60vh;
    background: url('${CartoonHome}') no-repeat center;
    background-size: contain;

    border-radius: 15px; /* Deixa as bordas arredondadas (opcional, fica bem legal) */
    box-shadow: 0px 4px 10px rgba(56, 52, 52, 0.2); /* Cria uma sombra elegante */
  }
`;
export const ContainerCarrocel = styled.div``;
