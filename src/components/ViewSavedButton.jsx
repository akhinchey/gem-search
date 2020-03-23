import React from 'react';
import { Link } from 'react-router-dom';
import { ViewSavedLinkSection } from './StyledComponents';

const ViewSavedButton = () => (
	<ViewSavedLinkSection>
		<Link to='/saved_gems'>View Saved Gems</Link>
	</ViewSavedLinkSection>
);

export default ViewSavedButton;