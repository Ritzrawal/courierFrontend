import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer/rootReducer';
const persistConfig = {
  key: 'loginReducer',
  storage: storage,
  whitelist: ['loginReducer'] // which reducer want to store
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const middleware = applyMiddleware(thunk, logger);
const allMiddlewares = [thunk, createLogger()];
const store = createStore(
    persistedReducer,
    applyMiddleware(...allMiddlewares),
  );
const persistor = persistStore(store);
export  { persistor, store };