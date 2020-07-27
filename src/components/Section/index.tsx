import React from 'react';
import { SectionProps } from './types';

import { Wrapper, Content } from './styles';

const Section: React.FC<SectionProps> = ({ children, color }) => {
  return (
    <Wrapper color={color}>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Section;
