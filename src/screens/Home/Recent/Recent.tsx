import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
} from 'react-native';
import {
  Infor,
  Icon,
  InforChil,
  TextInfor,
  Text2,
  Text1,
  Text3,
  IconInfor,
} from './RecentStyled';
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
