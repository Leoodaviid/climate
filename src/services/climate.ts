import { ClimeData, QualityData } from '../models/climeData'
import baseApi from './mainApi/config/api'

const token = '0720188f76903c6fe50931b602a81073'

export const getClimate = async () => baseApi.get<ClimeData>('/data')
export const getAir = async () => baseApi.get<QualityData>('/air')
