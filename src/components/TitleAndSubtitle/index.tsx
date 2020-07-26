import React from 'react';

import {
  Wrapper,
  Title,
  Subtitle,
  Description,
  Link,
} from './styles';

type Link = {
  title: string;
}

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  links?: Link[];
};

const TitleAndSubtitle: React.FC<Props> = ({ title, subtitle, description, links }) => {
  function transformText(text: string) {
    return text.replace('\n', '<br />');
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && (<Subtitle dangerouslySetInnerHTML={{ __html: transformText(subtitle) }} />)}
      {description && (<Description dangerouslySetInnerHTML={{ __html: transformText(description) }} />)}
      {links?.map((link) => (
        <Link>{link.title}</Link>
      ))}
    </Wrapper>
  )
}

export default TitleAndSubtitle;
