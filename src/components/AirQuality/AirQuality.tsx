import { Container, Title } from './styles'
import Leaf from '../../assets/icons/leaf.svg'
import { QualityData } from '../../models/climeData'

interface AirQualityProps {
  quality: QualityData
}

export const AirQuality = ({ quality }: AirQualityProps) => {
  return (
    <>
      {quality.list.map((quality) => (
        <Container key={quality.main.aqi}>
          <Title>
            <img src={Leaf} alt='icone de folha' />
            Qualidade do ar
          </Title>
          {quality.main.aqi === 1 ? (
            <p className='qualitative'>Bom</p>
          ) : quality.main.aqi === 2 ? (
            <p className='qualitative'>Regular</p>
          ) : quality.main.aqi === 3 ? (
            <p className='qualitative'>Moderado</p>
          ) : quality.main.aqi === 4 ? (
            <p className='qualitative'>Ruim</p>
          ) : quality.main.aqi === 5 ? (
            <p className='qualitative'>Muito Ruim</p>
          ) : (
            <p className='qualitative'></p>
          )}

          <p className='number'>{quality.main.aqi}</p>
          <div className='info'>
            <div className='number'>
              <p>{quality.components.pm2_5}</p>
              <small>PM2.5</small>
            </div>
            <div className='number'>
              <p>{quality.components.pm10}</p>
              <small>PM10</small>
            </div>
            <div className='number'>
              <p>{quality.components.so2}</p>
              <small>SO₂</small>
            </div>
            <div className='number'>
              <p>{quality.components.no2}</p>
              <small>NO₂</small>
            </div>
            <div className='number'>
              <p>2{quality.components.o3.toFixed()}</p>
              <small>O₃</small>
            </div>
            <div className='number'>
              <p>{quality.components.co.toFixed()}</p>
              <small>CO</small>
            </div>
          </div>
        </Container>
      ))}
    </>
  )
}
