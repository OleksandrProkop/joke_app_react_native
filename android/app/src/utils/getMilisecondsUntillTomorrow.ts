export const getMilisecondsUntillTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setHours(0);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);
  tomorrow.setMilliseconds(0);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow.getTime() - Date.now();
};
