import styled from 'styled-components/macro';

export const TabsWrapper = styled.div`
  align-items: middle;
  display: flex;
  justify-content: center;
`;

export const Tabs = styled.ol<{positionOfActiveItem: number}>`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 100rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  list-style: none;
  padding: 6px;

  & li:nth-child(${({ positionOfActiveItem }) => positionOfActiveItem}) {
    background-color: ${({ theme }) => theme.colors.salmon};
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

export const Tab = styled.li`
  border-radius: 100rem;
  color: ${({ theme }) => theme.colors.gray};
  cursor: default;
  display: inline-block;
  padding: 12px 24px;
`;