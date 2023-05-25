import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';

export interface RawPersonal {
  avatar: ImageSourcePropType;
  name: string;
  message: string;
}
export interface RawChatHistory {
  avatar: ImageSourcePropType;
  isSender: boolean;
  message: string;
  timestamp: number;
}
export const messageList: RawPersonal[] = [
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar02.png'),
    name: 'Nguyen Thai Bao',
    message: 'anh nho em lam',
  },
  {
    avatar: require('../../../assets/images/avatar03.png'),
    name: 'Pham Quoc An',
    message: 'mai mang t quyen sach nha',
  },
  {
    avatar: require('../../../assets/images/avatar04.png'),
    name: 'Nguyen Minh Chau',
    message: 'm oi tk kia no trap t',
  },
  {
    avatar: require('../../../assets/images/avatar05.png'),
    name: 'Mai Ngoc Diep',
    message: 'bat ngo ko m',
  },
  {
    avatar: require('../../../assets/images/avatar06.png'),
    name: 'Hoang Thu Huong',
    message: 'man hom qua ngon lam nha',
  },
  {
    avatar: require('../../../assets/images/avatar07.png'),
    name: 'Hong Mai Khang',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'Tran Linh Nhi',
    message: 'tran doi chua gap ai nhu no',
  },
  {
    avatar: require('../../../assets/images/avatar02.png'),
    name: 'Thai Quoc Chi',
    message: 'buc het ca minh',
  },
  {
    avatar: require('../../../assets/images/avatar03.png'),
    name: 'nay t lam cho roi',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar04.png'),
    name: 'Tran Chi Tai',
    message: 'dong tien tro nha',
  },
  {
    avatar: require('../../../assets/images/avatar05.png'),
    name: 'Ly Quang Khiem',
    message: 'quen mat day',
  },
  {
    avatar: require('../../../assets/images/avatar06.png'),
    name: 'Tran Thi My Hao',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar07.png'),
    name: 'Ngo chi Nghia',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'Quach Tien Thanh',
    message: 'em an com voi rau co ngon ko',
  },
];
export const chatHistoryList: RawChatHistory[] = [
  {
    avatar: require('../../../assets/images/avatar01.png'),
    isSender: true,
    message:
      'anh da on honllllllllllllllllllllllllllllllllllllllllllllllllllll156516515152156165151651651651156165116156156151llllllllllllllllllllllcajndvjaknvjnasbvijwdsijabshjdbhijvksjfDJVKjllllllllllllllllllllllllllllllllllllllll',
    timestamp: 1684806624000,
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    isSender: true,
    message: 'anh da on hon',
    timestamp: 1684803600000,
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    isSender: true,
    message: 'anh da on hon',
    timestamp: 1684805004000,
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    isSender: false,
    message: 'anh da on hon',
    timestamp: 1684804800000,
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    isSender: false,
    message: 'anh da on hon',
    timestamp: 1684808400000,
  },
];
