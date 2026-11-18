import styled from 'styled-components';

import CartoonHome from '../../assets/CartoonHome.jpg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  /* Uma cor de fundo leve para destacar a imagem */

  main {
    display: flex;
    justify-content: center;
    align-items: end;
    /* Defina um tamanho menor para a imagem aparecer inteira */
    width: 100vw; /* Largura fixa (ou use porcentagem tipo 40vw) */
    height: 60vh; /* Altura fixa */
    background: #937f7f;
    background: url('${CartoonHome}') no-repeat center;
    background-size: contain; /* 'contain' faz a imagem inteira caber dentro da caixa sem cortar */

    border-radius: 15px; /* Deixa as bordas arredondadas (opcional, fica bem legal) */
    box-shadow: 0px 4px 10px rgba(56, 52, 52, 0.2); /* Cria uma sombra elegante */
  }
`;
export const ContainerCarrocel = styled.div``;
