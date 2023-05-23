import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';
import {IM_AVATAR01} from '../../../assets/type';

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
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
  {
    avatar: require('../../../assets/images/avatar01.png'),
    name: 'tran thai linh',
    message: 'em an com voi rau co ngon ko',
  },
];
export const chatHistoryList: RawChatHistory[] = [
  {
    avatar: IM_AVATAR01,
    isSender: true,
    message:
      'anh da on honllllllllllllllllllllllllllllllllllllllllllllllllllll156516515152156165151651651651156165116156156151llllllllllllllllllllllcajndvjaknvjnasbvijwdsijabshjdbhijvksjfDJVKjllllllllllllllllllllllllllllllllllllllll',
    timestamp: 1684806624000,
  },
  {
    avatar: IM_AVATAR01,
    isSender: true,
    message: 'anh da on hon',
    timestamp: 1684803600000,
  },
  {
    avatar: IM_AVATAR01,
    isSender: true,
    message: 'anh da on hon',
    timestamp: 1684805004000,
  },
  {
    avatar: IM_AVATAR01,
    isSender: false,
    message: 'anh da on hon',
    timestamp: 1684804800000,
  },
  {
    avatar: IM_AVATAR01,
    isSender: false,
    message: 'anh da on hon',
    timestamp: 1684808400000,
  },
];
