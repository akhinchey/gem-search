import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import store, { persistor } from './store/storeConfig';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router basename='/gem-search'>
				<App />
			</Router>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);