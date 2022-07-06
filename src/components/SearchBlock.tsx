import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { SearchResultType } from '../type';
import { ButtonStyle, InputStyle } from './components';

interface SearchBlockProps {
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResultType[]>>;
}

const SearchBlock: FC<SearchBlockProps> = () => {
  const [search, setSearch] = useState('');

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log();
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <FormSearchStyle onSubmit={submitHandler}>
      <InputSearchStyle
        type='text'
        placeholder='Введите ключевое слово'
        value={search}
        onInput={searchHandler}
      />
      <ButtonStyle type='submit'>Поиск</ButtonStyle>
    </FormSearchStyle>
  );
};

export default SearchBlock;

const FormSearchStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 100px;

  padding: 20px 40px;
  margin-bottom: 20px;

  border: 2px solid #24173d;
  border-radius: 5px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const InputSearchStyle = styled(InputStyle)`
  flex: 1 1 auto;
`;
