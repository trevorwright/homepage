import styled from 'styled-components';
import usePivotTile from '../utilities/hooks/usePivotTile';
import HtmlHighlighter from './HtmlHighlighter';
import media from '../styles/media';

const Window = styled.div`
  padding: 12px;
  font-size: 11px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  user-select: none;

  > * {
    pointer-events: none;
  }

  ${media.custom(400)} {
    font-size: 12px;
    padding: 12px;
  }

  ${media.small} {
    font-size: 14px;
    padding: 20px;
  }

  ${media.medium} {
    font-size: 18px;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto) 1fr;
  grid-gap: 6px;
  margin-bottom: 12px;

  ${media.medium} {
    grid-gap: 10px;
  }
`;

const Button = styled.span<{ color: 'red' | 'yellow' | 'green' }>`
  height: 8px;
  width: 8px;
  ${({ theme, color }) =>
    color === 'red' && `background: ${theme.colors.macRed}`};
  ${({ theme, color }) =>
    color === 'yellow' && `background: ${theme.colors.macYellow}`};
  ${({ theme, color }) =>
    color === 'green' && `background: ${theme.colors.macGreen}`};
  border-radius: 50%;

  ${media.small} {
    height: 12px;
    width: 12px;
  }

  ${media.medium} {
    height: 15px;
    width: 15px;
  }
`;

const Content = styled.pre`
  ${media.custom(400)} {
    padding: 0 12px;
  }
`;

const data = {
  tag: 'Info',
  content: [
    {
      tag: 'Name',
      content: 'Trevor Wright',
    },
    {
      tag: 'Title',
      content: 'Front-End Architect',
    },
    {
      tag: 'Company',
      content: 'Prodigy Education',
    },
    {
      tag: 'Description',
      content: 'Leader, Web Developer, Mentor',
    },
  ],
};

const CodeCard = () => {
  const ref = usePivotTile();

  return (
    <Window ref={ref}>
      <Header>
        <Button color="red" />
        <Button color="yellow" />
        <Button color="green" />
      </Header>
      <Content>
        <HtmlHighlighter data={data} />
      </Content>
    </Window>
  );
};

export default CodeCard;
