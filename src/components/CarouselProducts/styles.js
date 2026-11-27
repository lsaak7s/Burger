import styled from 'styled-components';

const weight = 700;

export const ContainerCarrocel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1280px;

  overflow-x: hidden;

  .react-multi-carousel-list {
    width: 100%;

    overflow: visible;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 60px;
  font-weight: ${weight};

  margin: 30px;
  position: relative;

  color: rgb(26, 26, 26);
  &::after {
    content: '';
    width: 100px;
    height: 3px;
    bottom: -10px;

    left: 50%;
    transform: translateX(-50%);

    position: absolute;

    background-color: rgb(26, 26, 26);
  }
`;
