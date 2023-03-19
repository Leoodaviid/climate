import { useEffect, useState } from 'react'
import { Title } from '../AirQuality/styles'
import { Container, DivSun } from './styles'
import { formatUnix, getTimePercentage } from '../Helper/formatting'
import { TimeData } from '../../models/climeData'
import Sun from '../../assets/icons/sun.svg'
import SunChart from '../../assets/icons/sun-chart.svg'

interface SunTimeProps {
  time: TimeData
}
export const SunTime = ({ time }: SunTimeProps) => {
  const [sunPosition, setSunPosition] = useState<number>(0)

  useEffect(() => {
    const now = new Date().getTime() / 1000
    const sunrise = time.sys.sunrise
    const sunset = time.sys.sunset

    const percentage = getTimePercentage(now, sunrise, sunset)
    setSunPosition(percentage)
  }, [time.dt, time.sys.sunrise, time.sys.sunset])

  return (
    <Container>
      <Title>
        <img src={Sun} alt='iconde de um sol com um relógio dentro' />
        Horário do sol
      </Title>
      <div className='sun-chart-wrapper'>
        <DivSun position={sunPosition}>
          <div className='chart'>
            <img src={SunChart} alt='imagem de um gráfico semi circulo com traços' />
          </div>
          <time className='now'>{formatUnix(time.dt)}</time>
        </DivSun>
      </div>
      <div className='time'>
        <time className='sunrise'>{formatUnix(time.sys.sunrise)}</time>
        <time className='sunrise'>{formatUnix(time.sys.sunset)}</time>
      </div>
    </Container>
  )
}
