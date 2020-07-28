import styled from 'styled-components';
import logo from 'images/logo.svg';

export const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const Content = styled.header`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  min-height: 650px;
  max-width: 1300px;
  width: 100%;
  padding: 90px;
  overflow: hidden;
  align-content: space-between;
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  width: 70px;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  z-index: 0;
  background-color: ${p => p.theme.colors.dark};
  border-radius: 100%;
  top: 90px;
  left: 90px;
  width: 800px;
  height: 800px;
  padding: 90px;
  
  & > div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  
  & img {
    filter: drop-shadow(-15px 5px 10px rgba(0, 0, 0, 0.25))
  }
`
export const TopHeader = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BottomHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

