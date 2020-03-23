import React from 'react';
import { SaveButton } from './StyledComponents';
import { GemName, GemDescription } from './StyledComponents';

const Gem = ({ gem, gemNotSaved, handleSave }) => {
  return (
    <li>
      <GemName href={gem.documentation_uri} target="_blank">
        {gem.name}
      </GemName>
      <SaveButton
        onClick={() => {
          handleSave(gem);
        }}
      >
        {gemNotSaved ? 'Save' : 'Unsave'} Gem
      </SaveButton>
      <GemDescription>{gem.info}</GemDescription>
    </li>
  );
};

export default Gem;