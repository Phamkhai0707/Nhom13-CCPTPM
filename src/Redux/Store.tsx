import {configureStore} from '@reduxjs/toolkit';
import {contactSlide} from '../screens/Home/Contact/ContactSlide';
import {recentSlide} from '../screens/Home/Recent/RecentSlide';
import {collectionSlide} from '../screens/Collection/Collection/CollectionSlide';
import {contentCollectionSlide} from '../screens/Collection/ChildCollection/ContentCollectionSlide';
const createDebugger = require('redux-flipper').default;
// const middlewares = [
//   /* other middlewares */
// ];
//
// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

const store = configureStore({
  reducer: {
    contact: contactSlide.reducer,
    recent: recentSlide.reducer,
    collection: collectionSlide.reducer,
    contentCollection: contentCollectionSlide.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});
export default store;
