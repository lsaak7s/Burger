import styled from 'styled-components';

export const ContainerCarrocel = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .react-multi-carousel-list {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 45px;
  font-weight: 600;
  color: rgb(0, 0, 0);

  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    width: 100px;
    height: 3px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ContainerIteis = styled.div`
  display: flex;
  flex-direction: column; /* Fundamental para o margin-top: auto funcionar */
  align-items: start;
  justify-content: start;

  background: url('${(props) => props.imageUrl}') no-repeat center;
  background-size: cover;

  width: 280px;
  height: 280px;

  border-radius: 20px;

  margin: 0 10px; /* Centraliza o card dentro do slide */

  p {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    color: white;
    width: 60%;
    text-align: center;
    margin-bottom: 10px;
    padding: 12px;
    font-size: 17px;

    margin-top: auto; /* Joga o texto para a base do card */
  }
`;
