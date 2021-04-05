import {} from 'styled-components';
import { CSSProp } from 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme> | CSSObject;
  }
}
