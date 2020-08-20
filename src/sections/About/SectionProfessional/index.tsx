import React from 'react';

import Section from 'components/Section';
import TitleAndSubtitle from 'components/TitleAndSubtitle';

const SectionProfessional: React.FC = () => {
  return (
    <Section color={"primary"}>
      <TitleAndSubtitle
        title={"Profissionalmente"}
        subtitle={"Vida Profissional"}
        description={(
          <>
            <p>
              Desde que comecei meu curso de programação, meu próximo objetivo a qualquer custo era entrar na área profissionalmente, então no meu segundo semestre de curso eu consegui um estágio para programar em Delphi, e foi muito bom, lá eu comecei a perceber que o que ensinam nos cursos é apenas um empurrão para eu conseguir pesquisar por conta própria e conseguir aprender as coisas na prática.
            </p>
            <p>
              Lá eu aprendi muita coisa sobre lógica de programação, banco de dados, lidar com clientes, etc...
            </p>
            <p>
              Foi um desafio muito massa, o estágio durou cerca de 6 meses e fui contratado para o período integral.
            </p>
            <p>
              Depois de 3 meses trabalhando o dia inteiro com programação, recebi uma proposta de um professor para trabalhar período integral, recebendo mais que o dobro do que eu estava recebendo, com Javascript, mas eu não sabia nada de Javascript, mas só pelo conhecimento e experiência que eu iria adquirir, já valia a pena eu me arriscar e encarar esse desafio.
            </p>
            <p>
              Dito e feito, entrei nessa empresa lá eu comecei a aprender a programar em Javascript em tempo real, criando um projeto do zero com uma equipe e aprendendo a programar ao mesmo tempo, pressão total, prazos pra entregar, códigos para aprender, foi um desafio insano, foi muito massa, foram 6 meses que fiquei lá e trabalhei com Angular, NodeJS, Javascript(Vanilla), PHP, HTML, CSS, MongoDB e MySQL.
            </p>
            <p>
              Após esses 6 mêses incríveis de aprendizado e muito trabalho duro, infelizmente a empresa fechou, e de novo eu me vi solto no mercado de trabalho, porém agora com um novo objetivo, trabalhar com Javascript.
            </p>
            <p>
              Dias depois de a empresa fechar, comecei a enviar currículos e recebi uma proposta para trabalhar com ReactJS, denovo mais um desafio, e pensei ”deve ser parecido com Angular, vou topar”.
            </p>
            <p>
              Fiz o teste prático da empresa e tive duas descobertas, a primeira é que não tinha nada a ver com Angular, e a segunda é que ReactJS era o caminho que eu queria seguir.
            </p>
            <p>
              Passei no teste e comecei a trabalhar com ReactJS, após alguns mêses na empresa comecei também a trabalhar com React Native para criar aplicativos mobile.
            </p>
          </>
        )}
      />
    </Section>
  )
}

export default SectionProfessional;
