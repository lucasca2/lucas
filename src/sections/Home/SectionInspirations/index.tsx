import React from 'react';

import Section from 'components/Section';
import TitleAndSubtitle from 'components/TitleAndSubtitle';

const SectionInspirations: React.FC = () => {
  return (
    <Section color={"dark"}>
      <TitleAndSubtitle
        align={"center"}
        title={"Inspirações"}
        subtitle={"Marcas e Empresas\nQue Me Inspiram"}
      />
    </Section>
  )
}

export default SectionInspirations;
