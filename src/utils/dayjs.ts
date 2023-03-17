import dayjs from 'dayjs'

export function useFormatDate(date: dayjs.Dayjs, dateFormat = 'HH:mm:ss') {
  return dayjs(date).format(dateFormat)
}
