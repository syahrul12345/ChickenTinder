import { createStore, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import UserReducer from './user';

const store = createStore(
  combineReducers({
    user: UserReducer,
  }),
);
const persistor = persistStore(store);
export { store, persistor };
