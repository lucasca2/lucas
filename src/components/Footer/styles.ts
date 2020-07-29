import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.primary};
`;

export const ContentFooter = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: ${(p) => p.theme.colors.footerDark};
`;

export const Logo = styled.img.attrs({
  src: '/logo.svg'
})`
  width: 70px;
`;

export const Copyright = styled.span`
  text-align: center;
  background-color: #020202;
  color: ${(p) => p.theme.colors.placeholder};
  width: 100%;
  padding: 20px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
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

