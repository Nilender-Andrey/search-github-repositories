import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { SearchResultType } from '../type';
import { Text } from './components';

interface ResultsBlockProps {
  searchResults: SearchResultType[];
}

const ResultsBlock: FC<ResultsBlockProps> = ({ searchResults }) => {
  const message = !searchResults.length && (
    <Text ta='center' fw='700'>
      Здесь будут результаты поиска
    </Text>
  );

  return <ResultsBlockStyle>{message}</ResultsBlockStyle>;
};

export default ResultsBlock;

const ResultsBlockStyle = styled.div``;
