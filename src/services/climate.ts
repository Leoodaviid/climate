import { ClimeData, QualityData, TimeData, WeekData } from '../models/climeData'
import { GetAirProps, getClimateProps, GetTimeProps, GetWeekProps } from '../models/serviceApi'
import baseApi from './mainApi/config/api'

const token = '0720188f76903c6fe50931b602a81073'

export const getClimate = async (location: getClimateProps) =>
  baseApi.get<ClimeData>(
    `/data/2.5/weather?q=${location.location}&units=metric&lang=pt_br&appid=${token}`,
  )

export const getAir = async (air: GetAirProps) =>
  baseApi.get<QualityData>(`/data/2.5/air_pollution?lat=${air.lat}&lon=${air.lon}&appid=${token}`)

export const getTime = async (location: GetTimeProps) =>
  baseApi.get<TimeData>(
    `/data/2.5/weather?q=${location.location}&units=metric&lang=pt_br&appid=${token}`,
  )

export const getWeek = async (location: GetWeekProps) =>
  baseApi.get<WeekData>(
    `/data/2.5/forecast?q=${location.location}&units=metric&lang=pt_br&cnt=5&appid=${token}`,
  )
