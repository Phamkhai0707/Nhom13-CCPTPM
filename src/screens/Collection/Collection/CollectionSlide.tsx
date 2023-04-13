import {createSlice} from '@reduxjs/toolkit';
export const collectionSlide = createSlice({
  name: 'collectionList',
  initialState: {
    collectionList: [
      {
        id: 1,
        name: 'All',
        folderBig: require('../../assets/icons/iconFolderBig.png'),
        moreOption: require('../../assets/icons/moreOption.png'),
      },
      {
        id: 2,
        name: 'General',
        folderBig: require('../../assets/icons/iconFolderBig.png'),
        moreOption: require('../../assets/icons/moreOption.png'),
      },
      {
        id: 3,
        name: 'Investors',
        folderBig: require('../../assets/icons/iconFolderBig.png'),
        moreOption: require('../../assets/icons/moreOption.png'),
      },
      {
        id: 4,
        name: 'Lead',
        folderBig: require('../../assets/icons/iconFolderBig.png'),
        moreOption: require('../../assets/icons/moreOption.png'),
      },
      {
        id: 5,
        name: 'VIP',
        folderBig: require('../../assets/icons/iconFolderBig.png'),
        moreOption: require('../../assets/icons/moreOption.png'),
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
  },
});
