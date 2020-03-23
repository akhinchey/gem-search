import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveGem, unsaveGem } from '../store/gemSearchReducer';
import Gem from './Gem';
import { GemUl, MainContentHeader, SubHeader, Query } from './StyledComponents';

const GemResultList = () => {
  const dispatch = useDispatch();
  const { currentGems, savedGems, currentSearch } = useSelector(state => state);
  const gemNotSaved = gemName => !savedGems.find(gem => gem.name === gemName);
  const handleSave = gem =>
    gemNotSaved(gem.name) ? dispatch(saveGem(gem)) : dispatch(unsaveGem(gem));

  return (
    <>
      <MainContentHeader>
        <div>
          Search for: <Query>{currentSearch}</Query>
        </div>
        <SubHeader>{currentGems.length} gems found</SubHeader>
      </MainContentHeader>
      <GemUl>
        {currentGems.map(gem => (
          <Gem
            key={gem.name}
            gem={gem}
            gemNotSaved={gemNotSaved(gem.name)}
            handleSave={handleSave}
          />
        ))}
      </GemUl>
    </>
  );
};
export default GemResultList;
