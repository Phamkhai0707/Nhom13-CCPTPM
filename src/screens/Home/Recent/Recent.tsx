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
        <TouchableOpacity
          style={styles.infor}
          onPress={() => Linking.openURL(`tel:${item.sdt}`)}>
          <Image style={styles.icon} source={item.icon} />
          <View style={[styles.inforChil, {marginLeft: item.missing ? 20 : 0}]}>
            <View style={styles.textInfor}>
              <Text
                style={[
                  styles.text1,
                  {color: item.missing ? '#FF4A4A' : '#000'},
                ]}>
                {item.name}
              </Text>
              <Text style={styles.text2}>{item.sdt}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
              <Text style={styles.text3}>{item.time}</Text>
              <TouchableOpacity
                style={styles.iconInfor}
                onPress={() => {
                  navigation.navigate('Information');
                  detailContact(item.id);
                }}>
                <Image source={item.iconInfor} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
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
const styles = StyleSheet.create({
  infor: {
    flexDirection: 'row',
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    marginTop: 15,
  },
  inforChil: {
    flexDirection: 'row',
    left: 13,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    flex: 1,
  },
  textInfor: {
    marginBottom: 14,
    left: 15,
  },
  text1: {
    left: -15,
    marginTop: 10,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
  },
  textRed: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    color: '#FF4A4A',
  },
  text2: {
    left: -15,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
  },
  text3: {
    marginTop: 20,
    marginRight: 45,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
  },
  iconInfor: {
    right: 25,
    marginTop: 20,
  },
});
