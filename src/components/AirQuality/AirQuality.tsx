import { Container } from './styles'
import Leaf from '../../assets/icons/leaf.svg'

export const AirQuality = () => {
  return (
    <Container>
      <h2>
        <img src={Leaf} alt='icone de folha' />
        Qualidade do ar
      </h2>
      <p className='qualitative'>Boa</p>
      <p className='number'>21</p>
      <div className='info'>
        <div className='number'>
          <p>12.9</p>
          <small>PM2.5</small>
        </div>
        <div className='number'>
          <p>12.9</p>
          <small>PM10</small>
        </div>
        <div className='number'>
          <p>2.1</p>
          <small>SO₂</small>
        </div>
        <div className='number'>
          <p>1.4</p>
          <small>NO₂</small>
        </div>
        <div className='number'>
          <p>21.2</p>
          <small>O₂</small>
        </div>
        <div className='number'>
          <p>0.7</p>
          <small>CO</small>
        </div>
      </div>
    </Container>
  )
}
