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
  font-size: 32px;
  color: white;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    width: 50px;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ContainerIteis = styled.div`
  display: flex;
  flex-direction: column; /* Fundamental para o margin-top: auto funcionar */
  align-items: center;
  justify-content: center;

  background: url('${(props) => props.imageUrl}') no-repeat center;
  background-size: cover;

  width: 280px;
  height: 280px;
  border-radius: 20px;
  margin: 0 auto; /* Centraliza o card dentro do slide */

  p {
    background: rgba(0, 0, 0, 0.7); /* Corrigido para uma linha só */
    color: white;
    width: 100%;
    text-align: center;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: auto; /* Joga o texto para a base do card */
  }
`;
