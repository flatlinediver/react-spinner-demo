import withUnit from './withUnit';

const shapes = {
  spacing: withUnit({
    default: 1,
    big: 2,
    gigantic: 4,
    small: 0.5,
  }),
  header: withUnit({
    height: 6,
  }),
};

export default shapes;
