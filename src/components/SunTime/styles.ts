import styled, { css } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.borderRadius};

  h2 {
    margin-bottom: 2.5rem;
  }

  .sun-chart-wrapper {
    margin-top: 0.25rem;
    height: 6.8rem;
  }

  .time {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem auto 1rem;
    max-width: 15.3rem;
  }
`
interface DivSunProps {
  position: number
}
export const DivSun = styled.div<DivSunProps>`
  ${({ position }) =>
    position
      ? css`
          --pos-x: ${position};
        `
      : css`
          --pos-x: 0;
        `}
  margin: auto;
  width: 13.25rem;
  height: 13.25rem;
  position: relative;
  transition: 0.3s;

  ::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin: -0.2rem;
    transform: rotate(calc(1deg * (((100 - var(--pos-x)) / -100) * 180))) translate(6.625rem);
  }

  .chart {
    width: 13.25rem;
    height: 6.625rem;
    overflow: hidden;
  }

  .chart::before {
    content: '';
    width: 13.25rem;
    height: 13.25rem;
    display: block;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(251, 219, 96, 0) 0%, rgba(251, 219, 96, 0.2) 101.89%);
    --mask: linear-gradient(0deg, white 50%, transparent 0%);
    mask: var(--mask);
    -webkit-mask: var(--mask);
    rotate: calc(1.8deg * var(--pos-x));
  }

  .chart img {
    position: absolute;
    top: 0;
    left: -1%;
  }

  time.now {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%);
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.white};
  }
`
