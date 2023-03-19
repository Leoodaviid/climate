import styled from 'styled-components'
import Bg from '../../assets/images/temp-bg.png'
import Clouds from '../../assets/icons/clouds.svg'
import Cloud from '../../assets/icons/weather-cloud.svg'

export const Container = styled.section`
  width: 100%;
  background: url(${Bg}) no-repeat center/cover;
  background-color: ${({ theme }) => theme.colors.purple};
  backdrop-filter: blur(1rem);
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  ::before {
    content: '';
    width: 11rem;
    height: 11rem;
    background: url(${Clouds});
    position: absolute;
    top: -3.5rem;
    left: -3.5rem;
  }

  .location {
    justify-self: end;
    padding: 2rem 2rem 0;
    display: flex;
    align-items: center;
    gap: 4px;
    font: 700 ${({ theme }) => theme.fontSize.md} / 1 ${({ theme }) => theme.fontFamily.heading};
    color: #c2bff4;
  }

  .temp {
    margin: 3.75rem;
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  .temp .number {
    font: 700 ${({ theme }) => theme.fontSize['6xl']} / 1 ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 4px;
  }

  .temp .number .maxmin {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  .temp .number .maxmin span {
    color: #c2bff4;
  }

  .celcius {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    color: #dad8f7;
    margin-top: 0.5rem;
  }

  .statistics {
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }

  .stats {
    flex: 1;
    padding: 0.75rem 1rem;
    background: rgba(102, 96, 200, 0.6);
    border-radius: 0.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  .stats .info {
    color: #e7e6fb;
  }

  .stats .info h5 span,
  .stats .info p {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  .stats .info h5 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
  }
  @media (min-width: 1190px) {
    grid-row: 2/4;
  }
  @media (max-width: 1190px) {
    ::before {
      background: url(${Cloud}) no-repeat center/cover;
      width: 8rem;
      height: 8rem;
      top: -3rem;
      left: -1.4rem;
    }
    .statistics {
      flex-wrap: wrap;
    }
  }
`
