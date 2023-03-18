import styled from 'styled-components'
import Bg from '../../assets/images/bg.jpg'

export const Container = styled.main`
  background: url(${Bg}) no-repeat center/cover;
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 1.5rem;
  padding: 4rem;
`
