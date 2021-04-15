const formatScore = (score) =>
  score > 1000 ? (score / 1000).toString().slice(0, 3) + "k" : score;

export default formatScore;
