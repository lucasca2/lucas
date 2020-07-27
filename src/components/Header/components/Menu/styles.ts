import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Item = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  padding-bottom: 10px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  opacity: 0.5;
  
  transition: opacity .18s;
  will-change: opacity;
  
  &:hover {
    opacity: 1;
  }
  
  &::after {
    content: "";
    border-radius: 100%;
    position: absolute;
    width: 5px;
    height: 5px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) scale(0);
    background-color: ${p => p.theme.colors.secondary};
    opacity: 0;
    transition: transform .18s, opacity .18s;
    will-change: transform, opacity;
  }
  
  &:hover::after {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`;
