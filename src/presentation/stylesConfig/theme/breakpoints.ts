import withUnit from './withUnit';

const breakpoints = withUnit(
  {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  'px'
);

export default breakpoints;
