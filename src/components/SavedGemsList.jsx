import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveGem } from '../store/gemSearchReducer';
import Gem from './Gem';
import { GemUl, BackLink } from './StyledComponents';

const SavedGemsList = () => {
  const dispatch = useDispatch();
  const { savedGems, currentGems, currentSearch } = useSelector(state => state);
  const handleUnsaveGem = gem => dispatch(unsaveGem(gem));

  const url = currentSearch ? `/search?name=${currentSearch}` : '/';

  return (
    <>
      {!savedGems.length && (
        <div>
          <p>You currently have no saved gems.</p>
        </div>
      )}
      {!!currentGems.length && (
        <BackLink to={url}>{'<<'} Back To Search Page</BackLink>
      )}
      <GemUl>
        {savedGems.map(gem => (
          <Gem
            key={gem.name}
            gem={gem}
            gemNotSaved={false}
            handleSave={handleUnsaveGem}
          />
        ))}
      </GemUl>
    </>
  );
};
export default SavedGemsList;