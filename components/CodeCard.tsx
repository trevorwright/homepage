import styled from 'styled-components';
import usePivotTile from '../utilities/hooks/usePivotTile';
import HtmlHighlighter from './HtmlHighlighter';

const Window = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  user-select: none;

  > * {
    pointer-events: none;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto) 1fr;
  grid-gap: 8px;
  margin-bottom: 20px;
`;

const Button = styled.span<{ color: 'red' | 'yellow' | 'green' }>`
  height: 15px;
  width: 15px;
  ${({ theme, color }) =>
    color === 'red' && `background: ${theme.colors.macRed}`};
  ${({ theme, color }) =>
    color === 'yellow' && `background: ${theme.colors.macYellow}`};
  ${({ theme, color }) =>
    color === 'green' && `background: ${theme.colors.macGreen}`};
  border-radius: 50%;
`;

const Content = styled.pre`
  padding: 0 20px;
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
  const ref = usePivotTile({ shadow: 'light' });

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
