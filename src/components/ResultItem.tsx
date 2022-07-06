import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { SearchResultType } from '../type';
import { Flex, Text } from './components';

interface ResultItemProps {
  item: SearchResultType;
}

const ResultItem: FC<ResultItemProps> = ({ item }) => {
  const { name, html_url, visibility, forks } = item;

  return (
    <ResultsListStyle>
      <Flex>
        <p>Ссылка на репозиторий:</p>
        <p>{html_url}</p>
      </Flex>
      <Flex>
        <p>Имя владельца:</p>
        <p>{name}</p>
      </Flex>
      <Flex>
        <p>Количество форков:</p>
        <p>{forks}</p>
      </Flex>
      <Flex>
        <p>Видимость:</p>
        <p>{visibility}</p>
      </Flex>
    </ResultsListStyle>
  );
};

export default ResultItem;

const ResultsListStyle = styled.li`
  margin-bottom: 10px;
  padding: 10px;

  border: 1px solid #24173d;

  font-size: 1.4rem;

  p:first-child {
    flex: 1 1 30%;
  }
  p:last-child {
    flex: 1 1 70%;
    font-weight: 700;
  }
`;
