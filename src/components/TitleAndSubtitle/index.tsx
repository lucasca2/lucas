import React from 'react';
import { Link } from 'gatsby';
import { TitleAndSubtitleProps } from './types';

import {
  Wrapper,
  Title,
  Subtitle,
  Description,
} from './styles';

const TitleAndSubtitle: React.FC<TitleAndSubtitleProps> = ({ title, subtitle, align = 'start', description, links }) => {
  function transformText(text: string) {
    return text.replace(/\n/g, '<br />');
  }

  return (
    <Wrapper align={align}>
      <Title align={align}>{title}</Title>
      {subtitle && (<Subtitle dangerouslySetInnerHTML={{ __html: transformText(subtitle) }} />)}
      {typeof description === 'string' ? (<Description dangerouslySetInnerHTML={{ __html: transformText(description) }} />) : (
        <Description>
          {description}
        </Description>
      )}
      {links?.map((link) => (
        <Link to={link.to}>{link.title}</Link>
      ))}
    </Wrapper>
  )
}

export default TitleAndSubtitle;
