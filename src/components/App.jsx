import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom';
import { setCurrentGems, setCurrentSearch } from '../store/gemSearchReducer';
import SavedGemsList from './SavedGemsList';
import GemResultList from './GemResultList';
import HeaderSearchBar from './HeaderSearchBar';
import Error from './Error';
import { GlobalStyle, MainContent } from './StyledComponents';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState('');
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  const fetchGems = gemName => {
    axios
      .get(`/search.json?query=${gemName}`)
      .then(response => {
        dispatch(setCurrentGems(response.data));
      })
      .catch(error => {
        history.push('/error');
      });
  };

  useEffect(() => {
    const name = query.get('name');
    if (name && history.location.pathname === '/search') {
      fetchGems(name);
      dispatch(setCurrentSearch(name));
      setFormData(name);
    }
  }, []);
  
  useEffect(() => {
    if (formData === '') dispatch(setCurrentGems([]))
  }, [formData])

  const handleSubmit = e => {
    e.preventDefault();

    if (formData) {
      fetchGems(formData);
      dispatch(setCurrentSearch(formData));
      history.push(`/search?name=${formData}`);
    } else {
      alert('Please enter a valid search.');
    }
  };

  return (
    <>
      <GlobalStyle />
      <HeaderSearchBar
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <MainContent>
        <Switch>
          <Route path='/search'>
            <GemResultList />
          </Route>
          <Route path='/saved_gems'>
            <SavedGemsList />
          </Route>
          <Route path='/error'>
            <Error />
          </Route>
          <Route path='*'>
            <Redirect to='/foo' />
          </Route>
        </Switch>
      </MainContent>
    </>
  );
};
export default App;
