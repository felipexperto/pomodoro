import styled from 'styled-components/macro';

export const ClockWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
export const Frame = styled.div`
  background: ${({ theme }) => theme.colors.darkPurple};
  background: linear-gradient(120deg, rgba(22,26,51,1) 40%, rgba(42,45,82,1) 100%);
  border-radius: 100rem;
  box-shadow: 40px 40px 45px 7px #151834, -70px -90px 100px 1px #282c59, 5px 5px 15px 5px rgb(0 0 0 / 0%);
  display: inline-block;
  padding: 20px;
`;
export const Inside = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 100rem;
  display: flex;
  height: 380px;
  justify-content: center;
  position: relative;
  width: 380px;
`;
export const Content = styled.div`
  position: relative;
  text-align: center;
  z-index: ${({ theme }) => theme.zIndex.clockContent};
`;
export const Time = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
`;
export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  letter-spacing: 0.75em;
  margin-top: 1rem;
  text-transform: uppercase;
`;
export const Gauge = styled.div<{
  circleDiameter: number,
  percentualPassed: number,
}>`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.clockGauge};

  & svg {
    fill: transparent;
    height: 100%;
    stroke-width: 10px;
    width: 100%;
  }
  & circle {
    stroke: ${({ theme }) => theme.colors.salmon};
    stroke-dasharray: calc(3.14 * ${({ circleDiameter }) => circleDiameter});
    stroke-dashoffset: calc((3.14 * ${({ circleDiameter }) => circleDiameter}) * ${({ percentualPassed }) => percentualPassed});
    stroke-linecap: round;
    transition: 0.6s ease-out;
  }



`;

/*
  raio = 50;
  diametro = 50 * 2;
  circunferencia = π * d
*/