import React from 'react';

import { Wrapper } from './styles';
import Header from "components/Header"


type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

export default MainLayout;
