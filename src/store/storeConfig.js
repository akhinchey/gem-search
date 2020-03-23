import {
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
import gemSearchReducer from './gemSearchReducer';
import storage from 'redux-persist/lib/storage';

const gemSearchPersistConfig = {
  key: 'gemSearch',
  storage,
  whitelist: ['savedGems']
};

const store = configureStore({
  reducer: persistReducer(gemSearchPersistConfig, gemSearchReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor = persistStore(store)
export default store;
