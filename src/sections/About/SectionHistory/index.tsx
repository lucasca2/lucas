import React from 'react';

import Section from 'components/Section';
import TitleAndSubtitle from 'components/TitleAndSubtitle';

const SectionHistory: React.FC = () => {
  return (
    <Section color={"dark"}>
      <TitleAndSubtitle
        title={"Minha História"}
        subtitle={"Quem sou eu?"}
        description={(
          <>
            <p>
              Pra que não me conhece, me chamo Lucas Costa Amaral, pra quem me conhece, também...
            </p>
            <p>
              Tenho X anos, nasci e vivi minha vida inteira em Tubarão - Santa Catarina.
            </p>
            <p>
              Sou uma pessoa divertida, e sempre gosto de estar em ambientes divertidos, gosto tanto de rir quando de fazer as pessoas rirem.
            </p>
            <p>
              Minha história começa há X anos, quando terminei o ensino médio e resolvi iniciar minha faculdade de psicologia(exatamente, psicologia), eu adorava essa área, e tinha total certeza de que era isso com o que eu queria trabalhar pelo resto da vida, até eu terminar o primeiro semestre.
            </p>
            <p>
              Quando terminei o primeiro semestre, percebi que aquilo não era pra mim, eu era de exatas, pra mim, o que era lógico é que fazia sentido, então larguei a psicologia.
            </p>
            <p>
              Aí me encontrei na seguinte situação, 19 anos, larguei a faculdade que eu tanto queria desde sempre, o que eu vou fazer?
            </p>
            <p>
              Desde sempre eu fui bastante ligado a tecnologia, sempre gostei de usar o computador, então essa foi minha desculpa para resolver fazer um curso técnico em programação, e desde as primeiras semanas de curso eu já percebi que era aquilo que eu queria, eu chegava em casa, pegava meu notebook e fazia vários códigos bobos apenas para ter a satisfação de ver eles funcionando.
            </p>
            <p>
              E desde então comecei a me aprofundar cada vez mais na área e nos conhecimentos, e assim começou minha história na programação.
            </p>
          </>
        )}

      />
    </Section>
  )
}

export default SectionHistory;
