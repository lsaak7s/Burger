import styled from 'styled-components';

const weight = 600;

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px 20px;

  background-color: rgb(26, 26, 26);

  p {
    font-size: 15px;
    font-weight: ${weight};

    text-align: center;

    color: rgb(255, 255, 255);
  }
  span {
    font-weight: ${weight};
    color: rgb(7, 188, 12);
  }
`;
