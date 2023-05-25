import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {messageList, RawPersonal} from './type';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

export default function Messager() {
  const navigation = useNavigation();
  const renderItemMessage = ({item}: {item: RawPersonal}) => {
    return (
      <Personal onPress={() => navigation.navigate('Chats', {param: item})}>
        <Image source={item.avatar} />
        <InfoWrapper>
          <SText>{item.name}</SText>
          <LText>{item.message}</LText>
        </InfoWrapper>
      </Personal>
    );
  };
  return (
    <ScreenWrapper>
      <SFlatlist
        data={messageList}
        renderItem={renderItemMessage}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </ScreenWrapper>
  );
}

const SText = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  color: black;
`;

const LText = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  color: black;
`;

const ScreenWrapper = styled(View)`
  flex: 1;
`;
const Personal = styled(TouchableOpacity)`
  width: 90%;
  flex-direction: row;
  height: 70px;
  align-items: center;
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
`;
const SFlatlist = styled(FlatList)`
  margin-top: 20px;
  background-color: white;
`;
const InfoWrapper = styled(View)`
  flex: 1;
  margin-left: 12px;
`;
