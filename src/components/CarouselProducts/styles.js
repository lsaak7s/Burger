import styled from 'styled-components';

const weight = 700;

export const ContainerCarrocel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1280px;

  .react-multi-carousel-list {
    width: 100%;
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
/*
export const ContainerIteis = styled.div`
  display: flex;
  flex-direction: row;

  background: url('${(props) => props.$imageurl}');
  background-size: cover;

  width: 310px;
  height: 260px;

  border-radius: 15px;

  margin-top: 0 auto;
  padding: 10px;

  p {
    width: 60%;

    margin: 10px;
    padding: 12px;

    margin-top: auto;

    border-radius: 15px;

    font-size: 17px;
    text-align: center;

    color: white;
    background: rgba(0, 0, 0, 0.7);
  }
`;
*/
