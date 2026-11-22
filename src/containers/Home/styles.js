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
    background-position: center;
  }
  main {
    width: 100%;
    height: 480px;

    background: url('${logo} ') no-repeat center;
    background-size: cover;
    background-position: center;

    padding-right: 150px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100%;

  padding: 20px;
`;
