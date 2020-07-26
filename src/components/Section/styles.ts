import styled from 'styled-components';

type WrapperProps = {
  color: string;
}

export const Wrapper = styled.section<WrapperProps>`
  padding: 90px;
  background-color: ${(p) => p.theme.colors[p.color] }
`;
