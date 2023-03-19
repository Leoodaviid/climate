import { QualityData } from '../../models/climeData'
import { AirQualityItem } from './AirQualityItem'

interface AirQualityProps {
  quality: QualityData
}

export const AirQuality = ({ quality }: AirQualityProps) => {
  return (
    <>
      {quality.list.map((item) => (
        <AirQualityItem key={item.dt} item={item} />
      ))}
    </>
  )
}
