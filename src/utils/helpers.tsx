export const formatClockTime = (time: number): string => {
  return time.toString(10).length > 1 ? `${time}` : `0${time}`;
}

export const formatRemainingTimeInMinutes = (time: number): string => {
  return formatClockTime(Math.floor(time / 60));
}

export const formatRemainingTimeInSeconds = (time: number): string => {
  return formatClockTime(time % 60);
}
