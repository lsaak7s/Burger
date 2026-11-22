import styled from 'styled-components';

import fundo from '../../assets/fundo.png';
import logo from '../../assets/fundo4.jpg';

const weight = 600;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 10px;
    gap: 20px;

    background: rgb(0, 0, 0);
  }

  .uteis {
    font-weight: ${weight};
    font-size: 35px;

    color: rgb(255, 255, 255);
  }
  .Img {
    width: 100%;
    height: 100vh;

    background: url('${fundo} ') no-repeat center;
    background-size: cover;
  }
  main {
    background: url('${logo}');
    background-size: cover; /* Cobre tudo sem distorcer */
    background-position: center; /* Foca no meio da foto (no hambúrguer) */
    width: 100%; /* Ocupa a largura total */
    height: 500px; /* Altura igual à da foto de referência */

    display: flex; /* Ativa o modo flex para posicionar o texto */
    align-items: center; /* Centraliza o texto verticalmente */
    justify-content: flex-end; /* Joga o texto para o lado direito */
    padding-right: 10%; /* Dá uma margem da borda direita */

    h1 {
      font-family: 'Road Rage', cursive; /* Nome daquela fonte estilizada */
      color: #ffffff;
      font-size: 80px;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); /* Sombra para ler melhor */
    }
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100%;

  padding: 20px;
`;
