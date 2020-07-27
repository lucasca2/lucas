import { DefaultTheme } from 'styled-components';

type Link = {
  title: string;
}

type Align = 'start' | 'center';

export type TitleAndSubtitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
  align?: Align,
  links?: Link[];
};

export type WrapperProps = {
  align?: Align,
  theme: DefaultTheme;
}
