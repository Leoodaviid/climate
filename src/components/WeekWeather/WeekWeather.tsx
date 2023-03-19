import { Title } from '../AirQuality/styles'
import { Container } from './styles'
import { WeekData } from '../../models/climeData'
import { formatHour, getDayOfWeek } from '../Helper/formatting'
import Cloud from '../../assets/icons/weather-cloud.svg'
import Sun from '../../assets/icons/weather-sun.svg'
import Rain from '../../assets/icons/weather-rain.svg'
import Thunder from '../../assets/icons/weather-thunder.svg'
import Cloudy from '../../assets/icons/weather-cloudy.svg'

const icones = {
  '500': Rain,
  '501': Thunder,
  '800': Sun,
  '801': Cloudy,
  '802': Cloud,
  '803': Cloud,
  '804': Cloud,
} as Record<string, string>

interface WeekWeatherProps {
  week: WeekData
}

export const WeekWeather = ({ week }: WeekWeatherProps) => {
  return (
    <Container>
      {week.list.map((week) => (
        <div className='day' key={week.dt}>
          <Title>
            {getDayOfWeek(week.dt_txt)}
            <small>{formatHour(week.dt_txt)}</small>
          </Title>
          {week.weather.map((week) => (
            <img key={week.id} src={icones[week.id] || ''} alt='' />
          ))}
          <p className='maxmin'>
            {week.main.temp_max.toFixed()}° <span>{week.main.temp_min.toFixed()}°</span>
          </p>
        </div>
      ))}
    </Container>
  )
}
