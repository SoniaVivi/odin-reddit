const relativeTime = (time) => {
  const getMilliseconds = () => {
    return Date.now() - Date.parse(time + "Z");
  };
  const getTimePosted = () => {
    let millisecondsPast = getMilliseconds();
    let getTime = {
      years: () => new Date(millisecondsPast).getUTCFullYear() - 1970,
      months: () =>
        new Date(
          millisecondsPast + new Date().getTimezoneOffset() * 60000
        ).getMonth(),
      weeks: () => millisecondsPast / 604800000,
      days: () => millisecondsPast / 86400000,
      hours: () => millisecondsPast / 3600000,
      minutes: () => millisecondsPast / 60000,
      seconds: () => millisecondsPast / 1000,
      "just now": () => {},
    };
    for (const [units, func] of Object.entries(getTime)) {
      let timePast = Math.floor(func());
      if (timePast > 0) {
        return `${timePast} ${units}${units ? " ago" : ""}`;
      }
    }
  };
  return getTimePosted(time);
};

export default relativeTime;
