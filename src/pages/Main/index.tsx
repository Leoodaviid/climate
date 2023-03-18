import { useEffect, useState } from 'react'
import { AirQuality } from '../../components/AirQuality/AirQuality'
import { SunTime } from '../../components/SunTime/SunTime'
import { Temperature } from '../../components/Temperature/Temperature'
import { ClimeData, QualityData } from '../../models/climeData'
import { getAir, getClimate } from '../../services/climate'
import { Container } from './styles'

export default function Main() {
  const [clime, setClime] = useState<ClimeData>()
  const [quality, setquality] = useState<QualityData>()

  useEffect(() => {
    ;(async () => {
      const climeRequest = await getClimate()
      const qualityRequest = await getAir()
      setClime(climeRequest.data)
      setquality(qualityRequest.data)
    })()
  }, [])

  return (
    <Container>
      <Temperature clime={clime} />
      <AirQuality quality={quality} />
      <SunTime />
    </Container>
  )
}
