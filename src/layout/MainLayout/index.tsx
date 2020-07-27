import React from 'react';

import { Wrapper } from './styles';
import Header from "components/Header"
import Footer from "components/Footer";


type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default MainLayout;
