import { QualityData } from '../../models/climeData'
import { airQualityColors, airQualityLabel } from '../Helper/airQuality'
import { Container, Qualitative, Title, P } from './styles'
import Leaf from '../../assets/icons/leaf.svg'

interface AirQualityItemProps {
  item: QualityData['list'][0]
}

export const AirQualityItem = ({ item }: AirQualityItemProps) => {
  const { main, components } = item

  const renderComponent = (
    main: QualityData['list'][0]['main'],
    label: string,
    value: number | undefined,
  ) => {
    return (
      <div className='number'>
        <P color={airQualityColors[main.aqi]}>
          {value !== undefined ? Number(value).toFixed(1).padStart(2, '0') : '-'}
        </P>
        <small>{label}</small>
      </div>
    )
  }

  return (
    <Container key={main.aqi}>
      <Title>
        <img src={Leaf} alt='icone de folha' />
        Qualidade do ar
      </Title>
      <Qualitative color={airQualityColors[main.aqi]}>{airQualityLabel[main.aqi]}</Qualitative>
      <p className='number'>{main.aqi}</p>
      <div className='info'>
        {Object.entries(components).map(([key, value]) =>
          renderComponent(main, key.toUpperCase(), value),
        )}
      </div>
    </Container>
  )
}
