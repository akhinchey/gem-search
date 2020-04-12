import React from 'react';
import { Link } from 'react-router-dom';
import ViewSavedButton from './ViewSavedButton';
import {
  HeaderWrapper,
  SearchSection,
  SearchInput,
  SearchFormWrapper,
  SearchForm,
  SearchButton,
  AppHeader
} from './StyledComponents';

const HeaderSearchBar = ({ formData, setFormData, handleSubmit }) => {
  const handleChange = e => {
    setFormData(e.target.value);
  };

  return (
    <HeaderWrapper>
      <SearchSection>
        <AppHeader>
          <Link onClick={() => setFormData('')} to='/'>Search Ruby Gems foo</Link>
        </AppHeader>
        <SearchFormWrapper>
          <SearchForm onSubmit={handleSubmit}>
            <SearchInput type='text' value={formData} onChange={handleChange} />
            <SearchButton type='submit'>Search</SearchButton>
          </SearchForm>
        </SearchFormWrapper>
      </SearchSection>
      <ViewSavedButton />
    </HeaderWrapper>
  );
};

export default HeaderSearchBar;
