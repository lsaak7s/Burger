import styled from 'styled-components';

import fundo4 from '../../assets/fundo4.jpg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;

  //background-color: rgb(117, 50, 50);
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: rgb(0, 0, 0);
    padding: 20px;
    gap: 20px;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 20px;
    font-size: 60px;
    font-weight: 600;

    color: rgb(0, 0, 0);
  }
  .Img {
    background: url('${fundo4} ') no-repeat center;
    background-size: cover;
    background-position: center;
    width: 1000px;
    height: 457px;
  }
  .p {
    font-size: 35px;
    font-weight: 600;
    color: rgb(255, 255, 255);
  }
`;

export const ContainerCel = styled.div`
  width: 100%;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;
