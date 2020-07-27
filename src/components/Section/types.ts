import { ReactNode } from  'react';
import { DefaultTheme } from "styled-components"

export type WrapperProps = {
  color: Colors;
  theme: DefaultTheme;
}

export type SectionProps = {
  color: Colors;
  children: ReactNode;
}
