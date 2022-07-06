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
  console.log(searchData, error);

  const message = !searchData && (
    <Text ta='center' fw='700'>
      Здесь будут результаты поиска
    </Text>
  );

  const messageNotFound = searchData && !searchData.total_count && (
    <Text ta='center' fw='700'>
      По вашему запросу ни чего не найдено
    </Text>
  );

  const resultsList = searchData && (
    <ResultsList
      items={searchData.items}
      total_count={searchData.total_count}
    />
  );

  const errorMessage = error && (
    <Text ta='center' fw='700'>
      {error}
    </Text>
  );

  const result = messageNotFound || errorMessage || message || resultsList;

  return <ResultsBlockStyle>{result}</ResultsBlockStyle>;
};

export default ResultsBlock;

const ResultsBlockStyle = styled.div``;
