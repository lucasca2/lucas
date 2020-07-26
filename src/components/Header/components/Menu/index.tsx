import React from 'react';

import {
  Wrapper,
  Item
} from './styles';

const Menu: React.FC = () => {
  return (
    <Wrapper>
      <Item>Experiência</Item>
      <Item>Trabalhos</Item>
      <Item>Inspirações</Item>
      <Item>Contato</Item>
    </Wrapper>
  )
};

export default Menu;
