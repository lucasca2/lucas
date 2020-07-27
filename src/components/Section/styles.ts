import styled from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper = styled.section<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors[p.color] };
`;

export const Content = styled.div`
  padding: 90px;
  width: 100%;
  max-width: 1300px;
`;
