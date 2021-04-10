const formatDate = (date) => {
  let dateArray = new Date(Date.parse(date)).toDateString().split(" ").slice(1);
  dateArray[1] += ",";
  return dateArray.join(" ");
};

export default formatDate;
