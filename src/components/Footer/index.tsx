import React from 'react';

import { Wrapper, Logo, ContentFooter, Copyright } from "./styles";
import Section from 'components/Section';
import Lucas from './lucas';
import Menu from './components/Menu';
import Title from './components/Title';
import TitleAndSubtitle from 'components/TitleAndSubtitle';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Section color={'footer'}>
        <TitleAndSubtitle
          title={"Contato"}
          subtitle={"Fale Comigo"}
          description={"Qualquer tipo de dúvidas, ou\nse apenas quiser trocar uma ideia."}
          links={[
            { title: '(48) 9 9918-4666 →' },
            { title: 'lucas@amaral.dev.br →' },
          ]}
        />
      </Section>
      <Section color={'footerDark'}>
        <ContentFooter color={'footerDark'}>
          <Logo />
        </ContentFooter>
      </Section>
      <Copyright>
        2020 © Lucas Costa Amaral - Todos os direitos reservados
      </Copyright>
    </Wrapper>
  )
};

export default Footer;
