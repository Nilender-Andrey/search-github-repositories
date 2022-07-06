import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { ResponseDataType } from '../type';
import { Text } from './components';
import ResultsList from './ResultsList';

interface ResultsBlockProps {
  searchData: ResponseDataType | null;
  error: string;
}

const ResultsBlock: FC<ResultsBlockProps> = ({ searchData, error }) => {
  const message = !searchData && (
    <Text ta='center' fw='700' lh='1.5'>
      Здесь будут результаты поиска
    </Text>
  );

  const messageNotFound = searchData && !searchData.total_count && (
    <Text ta='center' fw='700' lh='1.5'>
      По вашему запросу ничего не найдено
    </Text>
  );

  const resultsList = searchData && (
    <ResultsList
      items={searchData.items}
      total_count={searchData.total_count}
    />
  );

  const errorMessage = error && (
    <Text ta='center' fw='700' lh='1.5'>
      {error}
    </Text>
  );

  const result = errorMessage || messageNotFound || message || resultsList;

  return <ResultsBlockStyle>{result}</ResultsBlockStyle>;
};

export default ResultsBlock;

const ResultsBlockStyle = styled.div``;
