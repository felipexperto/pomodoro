import styled from 'styled-components/macro';

export const TabsWrapper = styled.div`
  align-items: middle;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.tabs};
`;

export const Tabs = styled.ol<{positionOfActiveItem: number}>`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  list-style: none;
  max-width: 200px;
  padding: 6px;
  text-align: center;
  width: 100%;

  @media(min-width: ${({ theme }) => theme.sizes.phone}px) {
    flex-direction: row;
    max-width: none;
    width: auto;
  }

  & li:nth-child(${({ positionOfActiveItem }) => positionOfActiveItem}) {
    background-color: ${({ theme }) => theme.colors.salmon};
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

export const Tab = styled.li`
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.gray};
  cursor: default;
  display: inline-block;
  padding: 12px 24px;
`;