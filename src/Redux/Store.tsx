import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {contactSlide} from '../screens/Home/Contact/ContactSlide';
import {recentSlide} from '../screens/Home/Recent/RecentSlide';
import {collectionSlide} from '../screens/Collection/Collection/CollectionSlide';
import {contentCollectionSlide} from '../screens/Collection/ChildCollection/ContentCollectionSlide';
const createDebugger = require('redux-flipper').default;

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['titleName', 'filters', 'phoneNumber'],
};
const rootReducer = combineReducers({
  contact: contactSlide.reducer,
  recent: recentSlide.reducer,
  collection: collectionSlide.reducer,
  contentCollection: contentCollectionSlide.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createDebugger()),
});
export default store;
export const persistor = persistStore(store);
