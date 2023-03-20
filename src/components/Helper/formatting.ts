export const formatUnix = (unix: number): string => {
  const sunriseTime = new Date(unix * 1000)
  const hours = sunriseTime.getHours().toString().padStart(2, '0')
  const minutes = sunriseTime.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export const getDayOfWeek = (dtTxt: string): string => {
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
  const date = new Date(dtTxt)
  const dayOfWeek = daysOfWeek[date.getDay()]
  return dayOfWeek
}

export const formatHour = (dtTxt: string): string => {
  const date = new Date(dtTxt)
  const hour = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hour}:${minutes}`
}

export const getTimePercentage = (time: number, sunrise: number, sunset: number) => {
  const totalDaylight = sunset - sunrise
  const currentTime = time - sunrise
  const percentage = (currentTime / totalDaylight) * 100
  return Math.min(Math.max(percentage, 0), 100) // limita o valor entre 0 e 100
}
