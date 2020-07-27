import styled, { css } from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => p.align};
  text-align: ${(p) => p.align};
`;

export const Title = styled.h2<WrapperProps>`
  position: relative;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.placeholder};
  
  ${(p) => ['start', 'center'].includes(p.align) && (
    css`
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: calc(100% + 15px);
        transform: translateY(-50%);
        width: ${p.align === 'center' ? '50px' : '100px'};
        height: 1px;
        background-color: ${(p) => p.theme.colors.placeholder};
      }
    `
  )};
  
  ${(p) => ['center'].includes(p.align) && (
  css`
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: calc(100% + 15px);
        transform: translateY(-50%);
        width: ${p.align === 'center' ? '50px' : '100px'};
        height: 1px;
        background-color: ${(p) => p.theme.colors.placeholder};
      }
    `
)};
  
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${(p) => p.theme.colors.placeholder};
`;

export const Link = styled.span`
  color: ${(p) => p.theme.colors.secondary};
  font-size: 16px;
  margin-top: 30px;
`;
