import { useEffect, useState } from 'react'
import { AirQuality } from '../../components/AirQuality/AirQuality'
import { Temperature } from '../../components/Temperature/Temperature'
import { ClimeData } from '../../models/climeData'
import { getClimate } from '../../services/climate'
import { Container } from './styles'

export default function Main() {
  const [clime, setClime] = useState<ClimeData>()

  useEffect(() => {
    ;(async () => {
      const climeRequest = await getClimate()
      setClime(climeRequest.data)
    })()
  }, [])

  return (
    <Container>
      <Temperature clime={clime} />
      <AirQuality />
    </Container>
  )
}
