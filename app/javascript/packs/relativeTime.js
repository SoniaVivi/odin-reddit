const relativeTime = (time) => {
  const getMilliseconds = () => {
    return (
      new Date().getTime() -
      new Date(Date.parse(time + "Z")).getTime() +
      new Date().getTimezoneOffset() * 60000
    );
  };
  const getTimePosted = () => {
    let millisecondsPast = new Date(getMilliseconds());
    let getTime = {
      years: () => millisecondsPast.getUTCFullYear() - 1970,
      months: () => millisecondsPast.getMonth(),
      weeks: () => millisecondsPast / 604800000,
      days: () => millisecondsPast / 86400000,
      hours: () => millisecondsPast / 36000000,
      minutes: () => millisecondsPast / 600000,
      seconds: () => millisecondsPast / 10000,
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
