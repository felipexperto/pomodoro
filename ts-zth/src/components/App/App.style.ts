import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0;
  text-align: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.phone}px;
  outline: 1px solid rgba(255,255,255,.1);
  padding-bottom: 2rem;
  padding-top: 2rem;
  width: 100%;
`;