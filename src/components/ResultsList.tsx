import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { SearchResultType } from '../type';
import ResultItem from './ResultItem';
import { Text } from './components';

interface ResultsListProps {
  items: SearchResultType[];
  total_count: number;
}

const ResultsList: FC<ResultsListProps> = ({ items, total_count }) => {
  console.log(items);
  return (
    <ResultsListStyle>
      <Text ta='center' m='0 0 20px 0' fw='700' lh='1.5'>
        Всего подходящих результатов: {total_count}
      </Text>
      {items.map((item: SearchResultType) => (
        <ResultItem item={item} key={item.id} />
      ))}
    </ResultsListStyle>
  );
};

export default ResultsList;

const ResultsListStyle = styled.ul``;
