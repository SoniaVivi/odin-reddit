const linkTo = (linkType, name) => {
  const types = { origin: `/f/${name}`, user: `/user/${name}` };
  return types[linkType];
};

export default linkTo;
