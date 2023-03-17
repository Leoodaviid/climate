import { Container } from './styles'

export const Temperature = () => {
  return (
    <Container>
      <div className='location'></div>
      <div className='temp'></div>
      <div className='statistics'>
        <div className='info'></div>
      </div>
    </Container>
  )
}
