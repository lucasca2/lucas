import React from 'react';

import Section from 'components/Section';
import TitleAndSubtitle from 'components/TitleAndSubtitle';

const SectionWorks: React.FC = () => {
  return (
    <Section color={"primary"}>
      <TitleAndSubtitle
        title={"Portfólio"}
        subtitle={"Meus Trabalhos"}
        description={"Projetos que desenvolvi para praticar,\ntestar alguma funcionalidade,\nou apenas para desenvolvimento pessoal."}
      />
    </Section>
  )
}

export default SectionWorks;
