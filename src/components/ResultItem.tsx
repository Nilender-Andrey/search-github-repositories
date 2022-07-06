import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { SearchResultType } from '../type';
import { Flex } from './components';

interface ResultItemProps {
  item: SearchResultType;
}

const ResultItem: FC<ResultItemProps> = ({ item }) => {
  const { name, html_url, visibility, forks, created_at } = item;

  const data = new Date(created_at).toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <ResultsListStyle>
      <Flex m='0 0 7px 0' g='10px'>
        <p>Название репозитория:</p>
        <a href={html_url} target='_blank' rel='noreferrer'>
          {name}
        </a>
      </Flex>
      <Flex m='0 0  7px 0' g='10px'>
        <p>Количество форков:</p>
        <p>{forks}</p>
      </Flex>
      <Flex m='0 0  7px 0' g='10px'>
        <p>Видимость:</p>
        <p>{visibility}</p>
      </Flex>
      <Flex m='0 0  7px 0' g='10px'>
        <p>Дата создания:</p>
        <p>{data}</p>
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
    flex: 1 1 40%;
  }
  p:last-child {
    flex: 1 1 60%;
    font-weight: 700;
  }

  a {
    flex: 1 1 60%;
    text-decoration: none;

    color: red;
  }

  @media (max-width: 640px) {
    font-size: 1.1rem;
    p:first-child {
      flex: 1 1 50%;
    }
    p:last-child {
      flex: 1 1 50%;
    }

    a {
      flex: 1 1 50%;
    }
  }
`;
