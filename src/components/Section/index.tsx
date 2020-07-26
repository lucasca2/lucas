import React from 'react';

import { Wrapper } from './styles';

type Props = {
  color: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, color }) => {
  return (
    <Wrapper color={color}>
      {children}
    </Wrapper>
  )
}

export default Section;
