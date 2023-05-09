import moment from 'moment/moment'
export const getCurrentTimeStamp = (timeFormat) => {
  // return moment().format('LLLL'); // Dé Máirt, 9 Bealtaine 2023 14:13
  return moment().format(timeFormat)
}
