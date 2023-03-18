import { useEffect, useState } from 'react'
import { Temperature } from '../../components/Temperature/Temperature'
import { ClimateData } from '../../models/climateData'
import { getClimate } from '../../services/climate'
import { Container } from './styles'

export default function Main() {
  const [data, setData] = useState<ClimateData>()

  useEffect(() => {
    ;(async () => {
      const dataRequest = await getClimate()
      setData(dataRequest.data)
    })()
  }, [])

  return (
    <Container>
      <Temperature data={data} />
    </Container>
  )
}
