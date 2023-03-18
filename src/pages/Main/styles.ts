import styled from 'styled-components'
import Bg from '../../assets/images/bg.jpg'

export const Container = styled.main`
  background: url(${Bg}) no-repeat center/cover;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  place-content: center;
  gap: 1.5rem;

  @media (min-width: 1200px) {
    grid-template-columns: 30rem 17.31rem 17.31rem;
    grid-template-rows: 15.25rem 13.25rem;
  }
`
