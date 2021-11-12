import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';

const StyledTitle = styled.h2`
  position: relative;
  margin: 0 auto 42px auto;
  letter-spacing: 1px;
  font-size: 20px;
  text-align: center;

  ${media.small} {
    font-size: 24px;
  }

  ${media.medium} {
    font-size: 36px;
  }

  .highlight {
    color: ${({ theme }) => theme.colors.red};
  }

  span:not(:first-child) {
    margin-left: 12px;
  }

  &::after {
    position: absolute;
    content: '';
    bottom: -16px;
    width: 30%;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.red};
  }
`;

type Props = {
  children: string;
};

const Title = ({ children: title, ...rest }: Props) => {
  const words = title.split(' ');

  return (
    <StyledTitle {...rest}>
      {words.map((word, index) => (
        <React.Fragment key={`${index}${word}`}>
          <span className={index === 0 ? 'highlight' : ''}>
            {word.substring(0, 1)}
          </span>
          {word.substring(1)}
        </React.Fragment>
      ))}
    </StyledTitle>
  );
};

export default Title;
