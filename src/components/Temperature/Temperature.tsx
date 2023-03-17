import { Container } from './styles'
import Pin from '../../assets/icons/pin.png'
import Wind from '../../assets/icons/wind.svg'
import Humidity from '../../assets/icons/humidity.svg'
import Rain from '../../assets/icons/rain.svg'

export const Temperature = () => {
  return (
    <Container>
      <div className='location'>
        <img src={Pin} alt='Icone de localização' />
        <strong>Rio do Sul, SC</strong>
      </div>
      <div className='temp'>
        <div className='number'>
          18
          <div className='maxmin'>
            22° <span>16°</span>
          </div>
        </div>
        <div className='celcius'>°C</div>
      </div>
      <div className='statistics'>
        <div className='stats'>
          <img src={Wind} alt='Icone de vento' />
          <div className='info'>
            <p>vento</p>
            <h5>
              17 <span>km/h</span>
            </h5>
          </div>
        </div>
        <div className='stats'>
          <img src={Humidity} alt='Icone de umidade' />
          <div className='info'>
            <p>Umidade</p>
            <h5>
              31 <span>%</span>
            </h5>
          </div>
        </div>
        <div className='stats'>
          <img src={Rain} alt='Icone de chuva' />
          <div className='info'>
            <p>Chuva</p>
            <h5>
              10 <span>%</span>
            </h5>
          </div>
        </div>
      </div>
    </Container>
  )
}
