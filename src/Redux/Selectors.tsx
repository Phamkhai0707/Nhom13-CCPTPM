// export const inforListRemainingSelector = state => {
//   return state.inforList.filter(contact => {
//     return contact.fullName.includes(state.filter.search);
//   });
// };
import {createSelector} from 'reselect';

export const inforListSelector = (state: {inforList: any}) => state.inforList;
export const collectionListSelector = (state: {collectionList: any}) =>
  state.collectionList;
export const searchContactSelector = (state: {filter: string}) =>
  state.filter.search;
export const recentListSelector = (state: {recentList: any}) =>
  state.recentList;
export const contentCollectionSelector = (state: {
  contentCollectionList: any;
}) => state.contentCollectionList;

export const inforListRemainingSelector = createSelector(
  inforListSelector,
  searchContactSelector,
  (inforList, search) => {
    return inforList.filter(contact => {
      return contact.fullName.includes(search);
    });
  },
);
// export const inforListRemainingSelector = createSelector(
//   inforListSelector,
//   searchContactSelector,
//   (inforList, search) => {
//     console.log('ccscas', inforList);
//     return inforList.filter(contactName => {
//       return inforList.name.includes(search);
//     });
//   },
// );
