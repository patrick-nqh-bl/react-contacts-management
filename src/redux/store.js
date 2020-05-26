import { createStore, combineReducers, applyMiddleware } from 'redux';
import contactReducer from './contacts/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
