import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Recent() {
  const DATA = [
    {
      id: Date.now,
      name: 'Nguyễn Tiến Nam',
      sdt: '0977272123',
      missing: false,
      time: 'Hôm nay',
      icon: require('../../assets/icons/iconPhone1.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Vũ Mạnh Linh',
      sdt: '0977272123',
      missing: false,
      time: 'Hôm nay',
      icon: require('../../assets/icons/iconPhone1.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Trần Thái Hà',
      sdt: '0977272123',
      missing: false,
      time: 'Hôm nay',
      icon: require('../../assets/icons/iconPhone1.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Lê Ngọc Linh',
      missing: true,
      sdt: '0977272123',
      time: 'Thứ Tư',
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Kiều Vân Anh',
      missing: true,
      sdt: '0977272123',
      time: 'Thứ Tư',
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Thái Thùy Trang',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Ba',
      icon: require('../../assets/icons/iconPhone1.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Thái Lê Kiều',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Hai',
      icon: require('../../assets/icons/iconPhone1.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Bảo Ngọc',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Hai',
      icon: require('../../assets/icons/iconPhone2.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Dương Lê',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Bảy',
      icon: require('../../assets/icons/iconPhone2.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Bảo Ngọc',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Hai',
      icon: require('../../assets/icons/iconPhone2.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Bảo Ngọc',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Hai',
      icon: require('../../assets/icons/iconPhone2.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Bảo Ngọc',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Hai',
      icon: require('../../assets/icons/iconPhone2.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Bảo Ngọc',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Hai',
      icon: require('../../assets/icons/iconPhone2.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
    {
      id: Date.now,
      name: 'Bảo Ngọc',
      sdt: '0977272123',
      missing: false,
      time: 'Thứ Hai',
      icon: require('../../assets/icons/iconPhone2.png'),
      iconInfor: require('../../assets/icons/iconInfor.png'),
    },
  ];
  const navigation = useNavigation();
  const Item = ({item}) => {
    return (
      <View
        style={{
          height: 64,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={styles.infor}
          onPress={() => navigation.navigate('Information')}>
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
              <Image style={styles.iconInfor} source={item.iconInfor} />
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
      data={DATA}
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
