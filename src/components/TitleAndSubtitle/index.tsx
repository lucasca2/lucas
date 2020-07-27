import React from 'react';
import { TitleAndSubtitleProps } from './types';

import {
  Wrapper,
  Title,
  Subtitle,
  Description,
  Link,
} from './styles';

const TitleAndSubtitle: React.FC<TitleAndSubtitleProps> = ({ title, subtitle, align = 'start', description, links }) => {
  function transformText(text: string) {
    return text.replace(/\n/g, '<br />');
  }

  return (
    <Wrapper align={align}>
      <Title align={align}>{title}</Title>
      {subtitle && (<Subtitle dangerouslySetInnerHTML={{ __html: transformText(subtitle) }} />)}
      {description && (<Description dangerouslySetInnerHTML={{ __html: transformText(description) }} />)}
      {links?.map((link) => (
        <Link>{link.title}</Link>
      ))}
    </Wrapper>
  )
}

export default TitleAndSubtitle;
