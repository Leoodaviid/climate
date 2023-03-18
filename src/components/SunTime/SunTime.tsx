import { Title } from '../AirQuality/styles'
import { Container } from './styles'
import Sun from '../../assets/icons/sun.svg'
import SunChart from '../../assets/icons/sun-chart.svg'

export const SunTime = () => {
  return (
    <Container>
      <Title>
        <img src={Sun} alt='iconde de um sol com um relógio dentro' />
        Horário do sol
      </Title>
      <div className='sun-chart-wrapper'>
        <div className='sun-chart'>
          <div className='chart'>
            <img src={SunChart} alt='imagem de um gr´sfico semi circulo com traços' />
          </div>
          <time className='now'>17:30</time>
        </div>
      </div>
      <div className='time'>
        <time className='sunrise'>06:00</time>
        <time className='sunrise'>18:00</time>
      </div>
    </Container>
  )
}
