import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import palette from './palette';
import transitions from './transitions';
import breakpoints from './breakpoints';
import typography from './typography';
import shadows from './shadows';
import shapes from './shapes';
import zIndex from './zIndex';

export const theme = {
  palette,
  transitions,
  breakpoints,
  typography,
  shadows,
  shapes,
  zIndex,
};

export const useTheme = () => useContext(ThemeContext);
