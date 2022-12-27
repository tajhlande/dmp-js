import styled from 'styled-components';

export const Box = styled.div`
  padding: 10px 10px;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: small;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 10px;
  text-decoration: none;
   
  &:hover {
      color: goldenrod;
      transition: 200ms ease-in;
  }
`;
