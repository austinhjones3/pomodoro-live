/**
 * Formats a number of minutes as 'mm:00'.
 *
 * For example,
 *    minutesToDuration(3) = '03:00'
 *    minutesToDuration(45) = '45:00'
 *
 * @param givenMinutes
 *    the number of minutes in the duration
 * @returns {string}
 *    the given minutes formatted as 'mm:00'
 */

function minutesToDuration(givenMinutes) {
  const minutes = Math.floor(givenMinutes).toString().padStart(2, "0");
  return `${minutes}:00`;
}

/**
 * Formats a number of seconds as 'mm:ss'.
 *
 * For example,
 *    secondsToDuration(305) = '05:05'
 *    secondsToDuration(930) = '15:30'
 *
 * @param givenSeconds
 *    the number of seconds in the duration
 * @returns {string}
 *    the given seconds formatted as 'mm:ss'
 */

function secondsToDuration(givenSeconds) {
  let minutes = Math.floor(givenSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.round(givenSeconds % 60)
    .toString()
    .padStart(2, "0");
  // if (minutes === "00" && seconds === "00") minutes = "60";
  return `${minutes}:${seconds}`;
}

export default { minutesToDuration, secondsToDuration };
