import {createSelector} from '@reduxjs/toolkit';
import {useState} from 'react';
export const inforListSelector = (state: {inforList: any}) =>
  state.contact.inforList;
export const collectionListSelector = (state: {collectionList: any}) =>
  state.collection.collectionList;
export const searchContactSelector = (state: {filters: string}) =>
  state.contact.filters.search;
export const searchInAddContactSelector = (state: {filters: string}) =>
  state.contact.filters.searchInAddContact;
export const recentListSelector = (state: {recentList: any}) => state.recent;
export const contentCollectionSelector = (state: {
  contentCollectionList: any;
}) => state.contentCollection;
export const detailContactSelector = state => state.contact.detailContact;
export const phoneNumberUISelector = state => state.contact.phoneNumber;
export const titleNameSelector = state => state.collection.titleName;
export const inforListRemainingSelector = createSelector(
  inforListSelector,
  searchContactSelector,
  (inforList, search) => {
    return inforList.filter(contact => {
      return contact.fullName.includes(search);
    });
  },
);
export const inforListRemainingInAddContactSelector = createSelector(
  inforListSelector,
  searchInAddContactSelector,
  (inforList, search) => {
    return inforList.filter(contact => {
      return contact.fullName.includes(search);
    });
  },
);
