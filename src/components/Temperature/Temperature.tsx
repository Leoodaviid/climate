import { Container } from './styles'
import Pin from '../../assets/icons/pin.png'
import Wind from '../../assets/icons/wind.svg'
import Humidity from '../../assets/icons/humidity.svg'
import Rain from '../../assets/icons/rain.svg'
import { ClimeData } from '../../models/climeData'

interface TemperatureProps {
  clime: ClimeData
}

export const Temperature = ({ clime }: TemperatureProps) => {
  return (
    <Container>
      <div className='location'>
        <img src={Pin} alt='Icone de localização' />
        <strong>
          {clime.name}, {clime.sys.country}
        </strong>
      </div>
      <div className='temp'>
        <div className='number'>
          {clime.main.temp.toFixed()}
          <div className='maxmin'>
            {clime.main.temp_max.toFixed()}° <span>{clime.main.temp_min.toFixed()}°</span>
          </div>
        </div>
        <div className='celcius'>°C</div>
      </div>
      <div className='statistics'>
        <div className='stats'>
          <img src={Wind} alt='Icone de vento' />
          <div className='info'>
            <p>vento</p>
            {clime.wind ? (
              <h5>
                {Math.round(Number(clime.wind.speed.toFixed()) * 1.60934)} <span>km/h</span>
              </h5>
            ) : null}
          </div>
        </div>
        <div className='stats'>
          <img src={Humidity} alt='Icone de umidade' />
          <div className='info'>
            <p>Umidade</p>
            <h5>
              {clime.main.humidity} <span>%</span>
            </h5>
          </div>
        </div>
        <div className='stats'>
          <img src={Rain} alt='Icone de chuva' />
          <div className='info'>
            <p>Chuva</p>
            {clime.rain && (
              <h5>
                {clime.rain['1h']} <span>mm</span>
              </h5>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
