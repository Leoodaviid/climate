export interface ClimeData {
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

export interface QualityData {
  list: {
    main: {
      aqi: number
    }
    components: {
      co: number
      no: number
      no2: number
      o3: number
      so2: number
      pm2_5: number
      pm10: number
      nh3: number
    }
    dt: number
  }[]
}
