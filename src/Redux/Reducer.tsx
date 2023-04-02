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
        inforList: [...state.inforList, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;
