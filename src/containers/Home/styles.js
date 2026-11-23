import styled from 'styled-components';

import logo from '../../assets/fundo4.jpg';

const weight = 600;

export const Header = styled.header`
  display: flex;
  justify-content: center; /* Joga o logo pra esquerda e o menu pra direita */
  align-items: center; /* Alinha tudo verticalmente no centro */

  width: 100%;

  padding: 20px 50px; /* Dá um respiro nas laterais */

  background-color: rgb(26, 26, 26); /* Cor escura como na foto */
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  gap: 30px; /* Espaço entre cada link */
  .uteis {
    display: flex;
    position: relative; /* ESSENCIAL para a linha ::after funcionar */
    align-items: center;

    font-size: 30px; /* 35px era muito grande, na foto é menor */
    font-weight: ${weight};

    color: rgb(255, 255, 255);

    cursor: pointer;

    &::after {
      content: '';
      position: absolute;

      width: 1px; /* Linha fininha como na foto */
      height: 20px; /* Altura da linha */

      right: -15px; /* Coloca a linha depois do texto */
      top: 50%; /* Centraliza verticalmente */

      transform: translateY(-50%); /* Ajuste fino de centralização */

      background-color: rgb(255, 255, 255);
    }

    /* Remove a linha do último item para ficar igual à foto */
    &:last-child::after {
      display: none;
    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-width: 100%;

  main {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: 500px;
    padding-right: 10%;

    background: url('${logo}');

    background-size: cover;
    background-position: center;

    h1 {
      font-size: 80px;
      font-weight: ${weight};
      color: rgb(255, 255, 255);
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
