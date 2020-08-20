import React from 'react';

import { Wrapper } from './styles';
import MainHeader from "components/MainHeader"
import Footer from "components/Footer";


type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <MainHeader />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default MainLayout;
