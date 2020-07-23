import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    fontFamily: string;
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      caution: string;
      light: string;
      dark: string;
      success: string;
      background: string;
      title: string;
      text: string;
    };
  }
}
