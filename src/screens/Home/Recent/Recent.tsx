import React from 'react';
import {View, FlatList, Image, Linking} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {recentListSelector} from '../../../Redux/Selectors';
import {contactSlide} from '../Contact/ContactSlide';

export default function Recent() {
  const navigation = useNavigation();
  const recentList = useSelector(recentListSelector);
  const dispatch = useDispatch();
  const detailContact = id => {
    dispatch(contactSlide.actions.detailContactFrom(id));
  };
  const Item = ({item}) => {
    return (
      <View
        style={{
          height: 64,
          backgroundColor: 'white',
        }}>
        <Infor onPress={() => Linking.openURL(`tel:${item.sdt}`)}>
          <Icon source={item.icon} />
          <InforChil style={{marginLeft: item.missing ? 20 : 0}}>
            <TextInfor>
              <Text1 style={{color: item.missing ? '#FF4A4A' : '#000'}}>
                {item.name}
              </Text1>
              <Text2>{item.sdt}</Text2>
            </TextInfor>
            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
              <Text3>{item.time}</Text3>
              <IconInfor
                onPress={() => {
                  navigation.navigate('Information');
                  detailContact(item.id);
                }}>
                <Image source={item.iconInfor} />
              </IconInfor>
            </View>
          </InforChil>
        </Infor>
      </View>
    );
  };
  const renderItem = item => {
    return <Item item={item.item} />;
  };
  return (
    <FlatList
      style={{flex: 1, backgroundColor: 'white'}}
      data={recentList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
const Infor = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 10px;
  flex: 1;
`;
const Icon = styled.Image`
  margin-top: 15px;
`;
const InforChil = styled.View`
  flex-direction: row;
  left: 13px;
  border-bottom-color: #e6e6e6;
  border-bottom-width: 1;
  flex: 1;
`;
const TextInfor = styled.View`
  margin-bottom: 14px;
  left: 15px;
`;
const Text1 = styled.Text`
  left: -15px;
  margin-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
`;
const Text2 = styled.Text`
  left: -15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
const Text3 = styled.Text`
  margin-top: 20px;
  margin-right: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
`;
const IconInfor = styled.TouchableOpacity`
  right: 25px;
  margin-top: 20px;
`;
