export interface ClimateData {
  name: string
  weather: {
    main: string
    description: string
  }[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed?: number | any
  }
  rain: {
    '1h': number
  }
  sys: {
    country: string
  }
}
