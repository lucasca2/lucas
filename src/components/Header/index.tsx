import React from 'react';

import { Wrapper } from "./styles";

const Header: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default Header;