import styled from 'styled-components';

import fundo from '../../assets/fundo.png';
import logo from '../../assets/fundo4.jpg';

const weight = 600;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-width: 100%;

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
    width: 100vw;
    height: 100vh;

    background: url('${fundo} ') no-repeat center;
    background-size: cover;

    background-position: center;
  }
`;

export const ContainerCel = styled.div`
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;
