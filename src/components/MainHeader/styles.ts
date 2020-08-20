import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type Content = {
  isHome?: boolean;
}

const imageAnimation = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring', damping: 80}
};

const bottomHeaderAnimation = {
  initial: { opacity: 0, x: 25 },
  animate: { opacity: 1, x: 0 },
  transition: { type: 'spring', damping: 80}
};

const titleAnimation = {
  initial: { opacity: 0, x: -25 },
  animate: { opacity: 1, x: 0 },
  transition: { type: 'spring', damping: 80}
}

export const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const WrapperTitleAndSubtitle = styled(motion.div).attrs({
  ...bottomHeaderAnimation
})``

export const WrapperTitle = styled(motion.div).attrs({
  ...titleAnimation
})``

export const Content = styled.header<Content>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  max-width: 1300px;
  width: 100%;
  padding: 90px;
  overflow: hidden;
  align-content: space-between;
  min-height: 1px;
  
  ${(p) => p.isHome && css`
    min-height: 650px;
    padding: 90px;
  `}
  
  
`;

export const Logo = styled.img.attrs({
  src: '/logo.svg'
})`
  width: 70px;
`;

export const BackgroundImage = styled(motion.div).attrs({
 ...imageAnimation
})`
  position: absolute;
  z-index: 0;
  background-color: ${p => p.theme.colors.dark};
  border-radius: 100%;
  top: 120px;
  left: 120px;
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
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const BottomHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 1;
`;

