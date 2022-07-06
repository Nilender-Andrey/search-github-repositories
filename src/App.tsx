import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ResultsBlock from './components/ResultsBlock';

import SearchBlock from './components/SearchBlock';
import { SearchResultType } from './type';

function App() {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);

  return (
    <AppStyle>
      <SearchBlock setSearchResults={setSearchResults} />
      <ResultsBlock searchResults={searchResults} />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  padding: 0 10px;
  margin: 0 auto;
  max-width: 1000px;
`;
