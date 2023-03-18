import { Title } from '../AirQuality/styles'
import { Container } from './styles'
import { formatUnix } from '../Helper/formatUnix'
import { TimeData } from '../../models/climeData'
import Sun from '../../assets/icons/sun.svg'
import SunChart from '../../assets/icons/sun-chart.svg'

interface SunTimeProps {
  time: TimeData
}
export const SunTime = ({ time }: SunTimeProps) => {
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
          <time className='now'>{formatUnix(time.dt)}</time>
        </div>
      </div>
      <div className='time'>
        <time className='sunrise'>{formatUnix(time.sys.sunrise)}</time>
        <time className='sunrise'>{formatUnix(time.sys.sunset)}</time>
      </div>
    </Container>
  )
}
