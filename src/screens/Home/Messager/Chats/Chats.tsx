import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {chatHistoryList, RawChatHistory} from '../type';
import {MessengerItem} from '../components/MessengerItem';
import {BottomTabView} from '@react-navigation/bottom-tabs';

export const Chats = ({route}) => {
  const [chatText, setChatText] = useState<string>('');
  const [chatHistory, setChatHistory] =
    useState<RawChatHistory[]>(chatHistoryList);
  const item = route.params;
  const navigation = useNavigation();

  const renderItemMessage = useCallback(({item}) => {
    return <MessengerItem item={item} key={`${item.timestamp}`} />;
  }, []);
  return (
    <ScreenWrapper>
      <HeaderChat>
        <GoBack onPress={() => navigation.goBack()}>
          <Image source={require('../../../../assets/icons/arrow.png')} />
        </GoBack>
        <AvatarPerson source={item.param.avatar} />
        <NameOfPerson>{item.param.name}</NameOfPerson>
      </HeaderChat>
      <FlatList
        style={{paddingBottom: 20}}
        data={chatHistory}
        renderItem={renderItemMessage}
      />
      <FooterWrapper>
        <STextInput
          onChangeText={setChatText}
          value={chatText}
          placeholder="Enter some message"
        />
        <TouchableOpacity>
          <SIcon source={require('../../../../assets/icons/sent.png')} />
        </TouchableOpacity>
      </FooterWrapper>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled(View)`
  align-self: flex-end;
`;

const HeaderChat = styled(View)`
  height: 60px;
  flex-direction: row;
  align-items: center;
  background-color: white;
`;
const GoBack = styled(TouchableOpacity)`
  margin-left: 12px;
`;
const AvatarPerson = styled(Image)`
  margin-left: 12px;
`;
const NameOfPerson = styled(Text)`
  margin-left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const STextInput = styled(TextInput)`
  margin-left: 10px;
  width: 85%;
  border-radius: 45px;
  background-color: white;
`;

const FooterWrapper = styled(View)`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SIcon = styled(Image)`
  tint-color: #1e62be;
  margin-right: 15px;
  height: 26px;
  width: 26px;
`;
