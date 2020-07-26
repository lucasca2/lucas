import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    fontFamily: string;
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      light: string;
      dark: string;
      title: string;
      text: string;
      placeholder: string;
    };
  }
}
