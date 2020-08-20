import React from 'react';
import { DefaultTheme } from 'styled-components';

type Link = {
  title: string;
  to: string;
}

type Align = 'start' | 'center';

export type TitleAndSubtitleProps = {
  title: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  align?: Align,
  links?: Link[];
};

export type WrapperProps = {
  align: Align,
  theme: DefaultTheme;
}
