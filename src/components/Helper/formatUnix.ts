export const formatUnix = (unix: number): string => {
  const sunriseTime = new Date(unix * 1000)
  const hours = sunriseTime.getHours().toString().padStart(2, '0')
  const minutes = sunriseTime.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}
