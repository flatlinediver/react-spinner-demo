import withUnit from './withUnit';

const fontFamily = "'Poppins', 'Helvetica', 'Arial', sans-serif";
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;

const typography = {
  root: {
    ...withUnit({
      fontSize: 1,
    }),
    fontFamily,
  },
  h1: {
    fontFamily,
    fontWeight: fontWeightLight,
    ...withUnit({
      fontSize: 6,
    }),
    letterSpacing: -0.02,
  },
  subtitle1: {
    fontFamily,
    fontWeight: fontWeightRegular,
    ...withUnit({
      fontSize: 1,
    }),
    lineHeight: 1.75,
    letterSpacing: 0.01,
  },
  body1: {
    fontFamily,
    fontWeight: fontWeightRegular,
    ...withUnit({
      fontSize: 1,
      letterSpacing: 0.01,
    }),
    lineHeight: 1.5,
  },
  button: {
    fontFamily,
    fontWeight: fontWeightMedium,
    ...withUnit({
      fontSize: 0.8,
      letterSpacing: 0.03,
    }),
    lineHeight: 1.75,
    textTransform: 'uppercase',
  },
};

export default typography;
