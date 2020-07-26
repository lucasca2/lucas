import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  position: relative;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.placeholder};
  
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(100% + 15px);
    transform: translateY(-50%);
    width: 100px;
    height: 1px;
    background-color: ${(p) => p.theme.colors.placeholder};
  }
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
