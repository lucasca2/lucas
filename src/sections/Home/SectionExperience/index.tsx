import React from 'react';

import Section from 'components/Section';
import TitleAndSubtitle from 'components/TitleAndSubtitle';

const SectionExperience: React.FC = () => {
  return (
    <Section color={"dark"}>
      <TitleAndSubtitle
        title={"Experiência"}
        subtitle={"Minhas Habilidades"}
        description={"Minha auto avaliação nas ferramentas e\ntecnologias que eu trabalho."}
      />
    </Section>
  )
}

export default SectionExperience;
