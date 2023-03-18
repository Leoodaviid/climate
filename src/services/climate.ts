import { ClimeData, QualityData, TimeData, WeekData } from '../models/climeData'
import baseApi from './mainApi/config/api'

const token = '0720188f76903c6fe50931b602a81073'

export const getClimate = async () => baseApi.get<ClimeData>('/data')
export const getAir = async () => baseApi.get<QualityData>('/air')
export const getTime = async () => baseApi.get<TimeData>('/time')
export const getWeek = async () => baseApi.get<WeekData>('/week')
