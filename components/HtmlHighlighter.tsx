import React from 'react';
import styled from 'styled-components';

const INDENT_SIZE = 2;

const Code = styled.code`
  font-family: monospace;
  font-size: 18px;
  line-height: 1.5;

  .caret {
    color: ${({ theme }) => theme.colors.blue};
  }

  .tag-name {
    color: ${({ theme }) => theme.colors.red};
  }
`;

type HtmlNode = {
  tag: string;
  content: string | HtmlNode | HtmlNode[];
};

type Props = {
  data: HtmlNode;
};

const openTag = (name: string): string => {
  return `<span class="caret">&lt;</span><span class="tag-name">${name}</span><span class="caret">&gt;</span>`;
};

const closeTag = (name: string): string => {
  return `<span class="caret">&lt;/</span><span class="tag-name">${name}</span><span class="caret">&gt;</span>`;
};

const htmlLine = (content: string, depth: number): string => {
  const indentChars = '&nbsp;'.repeat(depth * INDENT_SIZE);

  return `<div>${indentChars}${content}</div>`;
};

const mapData = (node: HtmlNode, depth = 0): string => {
  // we've reached a leaf node which is just content
  if (typeof node.content === 'string') {
    // if content is too long we'll put it on its own line between
    // the tags so it stays pretty
    if (node.content.length > 20) {
      return [
        htmlLine(openTag(node.tag), depth),
        htmlLine(node.content, depth + 1),
        htmlLine(closeTag(node.tag), depth),
      ].join('');
    }

    return htmlLine(
      `${openTag(node.tag)}${node.content}${closeTag(node.tag)}`,
      depth
    );
  }

  // content is an array of children, se need to assess each one
  if (Array.isArray(node.content)) {
    return [
      htmlLine(openTag(node.tag), depth),
      ...node.content.map((n) => mapData(n, depth + 1)),
      htmlLine(closeTag(node.tag), depth),
    ].join('');
  }

  // Generic case of a node having a single child which is also a node
  return [
    htmlLine(openTag(node.tag), depth),
    mapData(node.content as HtmlNode, depth + 1),
    htmlLine(closeTag(node.tag), depth),
  ].join('');
};

const HtmlHighlighter = ({ data }: Props) => {
  return <Code dangerouslySetInnerHTML={{ __html: mapData(data) }} />;
};

export default HtmlHighlighter;
