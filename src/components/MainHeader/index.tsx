import React, { useMemo } from "react"
import { globalHistory } from '@reach/router';

import { Wrapper, Content, Logo, BackgroundImage, TopHeader, BottomHeader, WrapperTitleAndSubtitle, WrapperTitle } from "./styles";
import Lucas from './lucas';
import Menu from './components/Menu';
import Title from './components/Title';
import TitleAndSubtitle from 'components/TitleAndSubtitle';

const MainHeader: React.FC = () => {

  const isHome = useMemo(() => {
    const path = globalHistory.location.pathname;

    return path === '/';
  }, [globalHistory.location.pathname]);

  return (
    <Wrapper>
      <Content isHome={isHome}>
        <TopHeader>
          <Logo />
          <Menu />
        </TopHeader>
        {isHome && (
          <>
            <BottomHeader>
              <WrapperTitle>
                <Title />
              </WrapperTitle>
              <WrapperTitleAndSubtitle>
                <TitleAndSubtitle
                  title={"Sobre mim"}
                  subtitle={`Desenvolvedor Full Stack e\nDesigner UI/UX, de Tubarão - SC`}
                  links={[{ title: "Mais sobre mim →", to: "/sobre" }]}
                />
              </WrapperTitleAndSubtitle>
            </BottomHeader>
            <BackgroundImage>
              <Lucas />
            </BackgroundImage>
          </>
        )}
      </Content>
    </Wrapper>
  )
};

export default MainHeader;
