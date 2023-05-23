import {createSlice} from '@reduxjs/toolkit';
import { IC_FORDERBIG, IC_MOREOPTION } from '../../../assets/type';
export const collectionSlide = createSlice({
  name: 'collectionList',
  initialState: {
    titleName: '',
    collectionList: [
      {
        id: 1,
        name: 'All',
        folderBig: IC_FORDERBIG,
        moreOption: IC_MOREOPTION,
      },
      {
        id: 2,
        name: 'General',
        folderBig: IC_FORDERBIG,
        moreOption: IC_MOREOPTION,
      },
      {
        id: 3,
        name: 'Investors',
        folderBig: IC_FORDERBIG,
        moreOption: IC_MOREOPTION,
      },
      {
        id: 4,
        name: 'Lead',
        folderBig: IC_FORDERBIG,
        moreOption: IC_MOREOPTION,
      },
      {
        id: 5,
        name: 'VIP',
        folderBig: IC_FORDERBIG,
        moreOption: IC_MOREOPTION,
      },
    ],
  },
  reducers: {
    addCollection: (state, action) => {
      state.collectionList.push(action.payload);
    },
    editNameGroup: (state, action) => {
      const newList = state.collectionList.find(
        item => item.id === action.payload.idGroup,
      );
      if (newList) {
        newList.name = action.payload.nameGroup;
      }
    },
    deleteGroup: (state, action) => {
      state.collectionList.splice(
        state.collectionList.findIndex(item => item.id === action.payload),
        1,
      );
    },
    navigateTitleName: (state, action) => {
      state.titleName = action.payload;
    },
  },
});
