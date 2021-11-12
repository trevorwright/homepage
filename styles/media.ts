const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const media = {
  small: customMediaQuery(512),
  medium: customMediaQuery(768),
  large: customMediaQuery(922),
  custom: customMediaQuery,
};

export default media;
