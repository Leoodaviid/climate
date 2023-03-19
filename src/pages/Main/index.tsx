import { useState, useEffect, ChangeEvent } from 'react'
import { AirQuality } from '../../components/AirQuality/AirQuality'
import { SunTime } from '../../components/SunTime/SunTime'
import { Temperature } from '../../components/Temperature/Temperature'
import { WeekWeather } from '../../components/WeekWeather/WeekWeather'
import { ClimeData, QualityData, TimeData, WeekData } from '../../models/climeData'
import { getAir, getClimate, getTime, getWeek } from '../../services/climate'
import { Container } from './styles'

export default function Main() {
  const [location, setLocation] = useState('')
  const [clime, setClime] = useState<ClimeData>()
  const [quality, setQuality] = useState<QualityData>()
  const [time, setTime] = useState<TimeData>()
  const [week, setWeek] = useState<WeekData>()
  const [isLoading, setIsLoading] = useState(false)

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleSearchClick = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const climeRequest = await getClimate({ location })
        const { lat: latitude, lon: longitude } = climeRequest.data.coord
        if (latitude && longitude) {
          setClime(climeRequest.data)
          const qualityRequest = await getAir({ lat: latitude, lon: longitude })
          setQuality(qualityRequest.data)
          const timeRequest = await getTime({ location })
          setTime(timeRequest.data)
          const weekRequest = await getWeek({ location })
          setWeek(weekRequest.data)
        }
      } catch (error) {
        console.log('Error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (isLoading) {
      fetchData()
    }
  }, [isLoading, location])

  return (
    <>
      <Container>
        <form>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            id='location'
            placeholder='Informe a Cidade ou País'
            value={location}
            onChange={handleLocationChange}
          />
          <button type='button' onClick={handleSearchClick} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </form>
        {clime && <Temperature clime={clime} />}
        {quality && <AirQuality quality={quality} />}
        {time && <SunTime time={time} />}
        {week && <WeekWeather week={week} />}
      </Container>
    </>
  )
}
