import styled from 'styled-components';

export const Text = styled.h1`
  font-size: 66px;
  line-height: 66px;
  margin-inline-start: -6px;
  padding-bottom: 40px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 10px;
    background-color: ${(p) => p.theme.colors.secondary};
  }
`;
