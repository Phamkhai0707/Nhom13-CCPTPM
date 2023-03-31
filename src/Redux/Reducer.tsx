const initState = {
  inforList: [
    {
      id: 1,
      fullName: 'Nam Design',
      batch: '',
      company: 'Base.vn',
      phone: '0977272160',
      email: 'basenamnt@gmail.com',
      address: 'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
      DoB: '26-10-1993',
    },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'inforList/addInfor':
      return {
        ...state,
        inforList: [
          ...state.inforList,
          {
            id: 1,
            fullName: 'Kien Design',
            batch: '',
            company: 'Base.vn',
            phone: '0977272160',
            email: 'basekiennt@gmail.com',
            address: 'Số 08, Hoàng Công Chất, Bắc Từ Liêm, Hà Nội',
            DoB: '26-10-1993',
          },
        ],
      };
    default:
      return state;
  }
};
export default rootReducer;
