import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {chatHistoryList, RawChatHistory} from '../type';
import {MessengerItem} from '../components/MessengerItem';

export const Chats = ({route}) => {
  const [chatHistory, setChatHistory] =
    useState<RawChatHistory[]>(chatHistoryList);
  const item = route.params;
  const navigation = useNavigation();

  const renderItemMessage = useCallback(({item}) => {
    return <MessengerItem item={item} key={`${item.timestamp}`} />;
  }, []);
  return (
    <View>
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
    </View>
  );
};
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
