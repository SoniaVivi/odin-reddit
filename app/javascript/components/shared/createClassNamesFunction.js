const createClassNamesFunction = (defaultClassNames) => (classNames = "") =>
  `${classNames} ${defaultClassNames}`;

export default createClassNamesFunction;
