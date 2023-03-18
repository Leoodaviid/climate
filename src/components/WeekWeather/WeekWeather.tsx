import { Title } from '../AirQuality/styles'
import { Container } from './styles'
import Cloud from '../../assets/icons/weather-cloud.svg'
import Sun from '../../assets/icons/weather-sun.svg'
import Rain from '../../assets/icons/weather-rain.svg'
import Thunder from '../../assets/icons/weather-thunder.svg'
import Cloudy from '../../assets/icons/weather-cloudy.svg'

export const WeekWeather = () => {
  return (
    <Container>
      <div className='day'>
        <Title>Amanhã</Title>
        <img src={Cloud} alt='' />
        <p className='maxmin'>
          21° <span>16°</span>
        </p>
      </div>
      <div className='day'>
        <Title>Segunda</Title>
        <img src={Sun} alt='' />
        <p className='maxmin'>
          28° <span>20°</span>
        </p>
      </div>
      <div className='day'>
        <Title>Terça</Title>
        <img src={Rain} alt='' />
        <p className='maxmin'>
          25° <span>21°</span>
        </p>
      </div>
      <div className='day'>
        <Title>Quarta</Title>
        <img src={Thunder} alt='' />
        <p className='maxmin'>
          20° <span>14°</span>
        </p>
      </div>
      <div className='day'>
        <Title>Quinta</Title>
        <img src={Cloudy} alt='' />
        <p className='maxmin'>
          24° <span>18°</span>
        </p>
      </div>
    </Container>
  )
}
