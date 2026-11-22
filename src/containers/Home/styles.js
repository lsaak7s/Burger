import styled from 'styled-components';

import logo from '../../assets/fundo4.jpg';

const weight = 600;

export const ContainerHeader = styled.div`
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

    &::after {
      content: '';
      width: 3px;
      height: 40px;

      margin-left: 8px;

      position: absolute;

      background-color: rgb(255, 255, 255);
    }
  }
  .Img {
    width: 100%;
    height: 100vh;
  }
  main {
    background: url('${logo}');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10%;

    h1 {
      font-family: 'Road Rage', cursive;
      font-size: 80px;
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
