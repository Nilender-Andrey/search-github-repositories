import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { fetchSearch } from './api/fetch-search';
import ResultsBlock from './components/ResultsBlock';

import SearchBlock from './components/SearchBlock';
import { ResponseDataType } from './type';

function App() {
  const [searchData, setSearchData] = useState<ResponseDataType | null>(null);
  const [error, setError] = useState('');

  const addSearchData = async (request: string) => {
    try {
      const data = await fetchSearch(request);
      setSearchData(() => data);
      setError('');
    } catch (error) {
      setError('Сервер не ответил, попробуйте позже');
    }
  };

  return (
    <AppStyle>
      <SearchBlock addSearchData={addSearchData} />
      <ResultsBlock searchData={searchData} error={error} />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  padding: 20px 10px;
  margin: 0 auto;
  max-width: 1000px;
`;
