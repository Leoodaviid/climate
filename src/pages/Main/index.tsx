import { useEffect, useState } from 'react'
import { AirQuality } from '../../components/AirQuality/AirQuality'
import { SunTime } from '../../components/SunTime/SunTime'
import { Temperature } from '../../components/Temperature/Temperature'
import { WeekWeather } from '../../components/WeekWeather/WeekWeather'
import { ClimeData, QualityData, TimeData } from '../../models/climeData'
import { getAir, getClimate, getTime } from '../../services/climate'
import { Container } from './styles'

export default function Main() {
  const [clime, setClime] = useState<ClimeData>()
  const [quality, setquality] = useState<QualityData>()
  const [time, setTime] = useState<TimeData>()

  useEffect(() => {
    ;(async () => {
      const climeRequest = await getClimate()
      const qualityRequest = await getAir()
      const timeResponse = await getTime()
      setClime(climeRequest.data)
      setquality(qualityRequest.data)
      setTime(timeResponse.data)
    })()
  }, [])

  return (
    <Container>
      {clime && <Temperature clime={clime} />}
      {quality && <AirQuality quality={quality} />}
      {time && <SunTime time={time} />}
      <WeekWeather />
    </Container>
  )
}
