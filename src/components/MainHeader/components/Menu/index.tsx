import React from 'react';
import { Link } from 'gatsby';

import {
  Wrapper,
  Item
} from './styles';

const Menu: React.FC = () => {
  return (
    <Wrapper>
      <Link activeClassName={"active"} to={"/"}>Início</Link>
      <Link activeClassName={"active"} to={"/sobre"}>Sobre Mim</Link>
      <Link activeClassName={"active"} to={"/trabalhos"}>Trabalhos</Link>
      <Link activeClassName={"active"} to={"/contato"}>Contato</Link>
    </Wrapper>
  )
};

export default Menu;
