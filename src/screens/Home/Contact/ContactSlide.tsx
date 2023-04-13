import {createSlice} from '@reduxjs/toolkit';
export const contactSlide = createSlice({
  name: 'contactList',
  initialState: {
    filters: {search: '', searchInAddContact: ''},
    detailContact: {},
    phoneNumber: [],
    inforList: [
      {
        id: 1,
        key: '1',
        fullName: 'Nam Design',
        value: 'Nam Design',
        company: 'Base.vn',
        phone: '0977272160',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar01.png'),
      },
      {
        id: 2,
        key: '2',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        fullName: 'Dương Lê',
        value: 'Dương Lê',
        phone: '0977272123',
        company: 'Techcombank',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar01.png'),
      },
      {
        id: 3,
        key: '3',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        fullName: 'Thùy Trang',
        value: 'Thùy Trang',
        phone: '0977272123',
        company: 'Techcombank',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar02.png'),
      },
      {
        id: 4,
        key: '4',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        phone: '0977272123',
        fullName: 'Hồng Đăng',
        value: 'Hồng Đăng',
        company: 'OTP',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar03.png'),
      },
      {
        id: 5,
        key: '5',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        phone: '0977272123',
        fullName: 'Nguyễn Tiến Nam',
        value: 'Nguyễn Tiến Nam',
        company: 'Techcombank',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar04.png'),
      },
      {
        id: 6,
        key: '6',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        phone: '0977272123',
        fullName: 'Bảo Ngọc',
        value: 'Bảo Ngọc',
        company: 'Techcombank',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar05.png'),
      },
      {
        id: 7,
        key: '7',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        phone: '0977272123',
        fullName: 'Thái Thùy Trang',
        value: 'Thái Thùy Trang',
        company: 'Techcombank',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar06.png'),
      },
      {
        id: 8,
        key: '8',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        phone: '0977272123',
        fullName: 'Lê Ngọc Linh',
        value: 'Lê Ngọc Linh',
        company: 'Techcombank',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar07.png'),
      },
      {
        id: 9,
        key: '9',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        phone: '0977272123',
        fullName: 'Trần Thái Hà',
        value: 'Trần Thái Hà',
        company: 'Techcombank',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar01.png'),
      },
      {
        id: 10,
        key: '10',
        batch: '',
        email: 'basenamnt@gmail.com',
        address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
        DoB: '26-10-1993',
        phone: '0977272123',
        fullName: 'Nguyễn Tiến Nam',
        value: 'Nguyễn Tiến Nam',
        company: 'Techcombank',
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar02.png'),
      },
    ],
  },
  reducers: {
    addInfor: (state, action) => {
      state.inforList.push(action.payload);
    },
    searchContact: (state, action) => {
      state.filters.search = action.payload;
    },
    searchInAddContact: (state, action) => {
      state.filters.searchInAddContact = action.payload;
    },
    contactDetail: (state, action) => {
      state.detailContact = action.payload;
    },
    editContact: (state, action) => {
      Object.assign(
        state.inforList.find(item => item.id === action.payload.id),
        action.payload,
      );
    },
    deleteContact: (state, action) => {
      state.inforList.splice(
        state.inforList.findIndex(item => item.id === action.payload),
        1,
      );
    },
    detailContactFrom: (state, action) => {
      state.detailContact = state.inforList.find(
        item => item.id === action.payload,
      );
    },
    addPhoneNumber: (state, action) => {
      state.phoneNumber.push(action.payload);
    },
    deletePhoneNumber: (state, action) => {
      state.phoneNumber.splice(
        state.phoneNumber.findIndex(item => item === action.payload),
        1,
      );
    },
  },
});
