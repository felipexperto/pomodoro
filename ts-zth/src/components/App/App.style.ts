import styled from 'styled-components';

export const MainTitle = styled.h1`

`;

export const Container = styled.div`
  background-color: red;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.phone}px;
  width: 100%;
`;