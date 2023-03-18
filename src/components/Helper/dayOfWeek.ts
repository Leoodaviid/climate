export function getDayOfWeek(dtTxt: string): string {
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
  const date = new Date(dtTxt)
  const dayOfWeek = daysOfWeek[date.getDay()]
  return dayOfWeek
}

export function formatHour(dtTxt: string): string {
  const date = new Date(dtTxt)
  const hour = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hour}:${minutes}`
}
