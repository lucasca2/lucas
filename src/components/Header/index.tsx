import React from 'react';

import { Wrapper, Content, Logo, BackgroundImage, TopHeader, BottomHeader } from "./styles";
import Lucas from './lucas';
import Menu from './components/Menu';
import Title from './components/Title';
import TitleAndSubtitle from 'components/TitleAndSubtitle';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <BackgroundImage>
          <Lucas />
        </BackgroundImage>
        <TopHeader>
          <Logo />
          <Menu />
        </TopHeader>
        <BottomHeader>
          <Title />
          <TitleAndSubtitle
            title={"Sobre mim"}
            subtitle={`Desenvolvedor Full Stack e\nDesigner UI/UX, de Tubarão - SC`}
            links={[{ title: "Mais sobre mim →" }]}
          />
        </BottomHeader>
      </Content>
    </Wrapper>
  )
};

export default Header;
