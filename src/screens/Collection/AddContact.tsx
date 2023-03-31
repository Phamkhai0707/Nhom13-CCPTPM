import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AlphabetList} from 'react-native-section-alphabet-list';

export default function AddContact() {
  const DATA = [
    {
      value: 'Dương Lê',
      key: '001',
      phone: '0977272123',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar01.png'),
      isChecked: false,
    },
    {
      value: 'Thùy Trang',
      key: '002',
      phone: '0977272123',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar02.png'),
      isChecked: false,
    },
    {
      key: '003',
      phone: '0977272123',
      value: 'Hồng Đăng',
      bank: 'OTP',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar03.png'),
      isChecked: false,
    },
    {
      key: '004',
      phone: '0977272123',
      value: 'Nguyễn Tiến Nam',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar04.png'),
      isChecked: false,
    },
    {
      key: '005',
      phone: '0977272123',
      value: 'Bảo Ngọc',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar05.png'),
      isChecked: false,
    },
    {
      key: '006',
      phone: '0977272123',
      value: 'Thái Thùy Trang',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar06.png'),
      isChecked: false,
    },
    {
      key: '007',
      phone: '0977272123',
      value: 'Lê Ngọc Linh',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar07.png'),
      isChecked: false,
    },
    {
      key: '008',
      phone: '0977272123',
      value: 'Trần Thái Hà',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar01.png'),
      isChecked: false,
    },
    {
      key: '009',
      phone: '0977272123',
      value: 'Nguyễn Tiến Nam',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar02.png'),
      isChecked: false,
    },
    {
      value: 'Hồng Đăng',
      key: '010',
      phone: '0977272123',
      bank: 'OTP',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar03.png'),
      isChecked: false,
    },
    {
      value: 'Bảo Ngọc',
      key: '011',
      phone: '0977272123',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar04.png'),
      isChecked: false,
    },
  ];
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const [checker, setCheckBox] = useState(false);
  const [count, setCount] = useState(0);
  const handlerCheckBox = () => {
    if (checker) {
      setCount(count - 1);
      setCheckBox(!checker);
      return;
    }
    setCount(count + 1);
    setCheckBox(!checker);
  };
  const handleText = () => {
    setNumber('');
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.textHeader}> Add contact </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('ChildCollection')}>
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.navigate('ChildCollection')}>
          <Text style={styles.done}>Done ({count})</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.warpSearch}>
        <View style={styles.search}>
          <Image
            style={styles.iconSearch}
            source={require('../../assets/icons/icon_search.png')}
          />
          <TextInput
            onChangeText={handleText}
            value={number}
            placeholder="Search"
          />
        </View>
      </View>

      <AlphabetList
        style={styles.sectionList}
        data={DATA}
        indexLetterStyle={{
          color: '#1e62be',
          fontSize: 15,
        }}
        renderCustomItem={item => {
          return (
            <View
              style={styles.person}
              onPress={() => navigation.navigate('Information')}>
              {checker === false ? (
                <TouchableOpacity
                  onPress={() => {
                    handlerCheckBox();
                  }}>
                  <Image
                    source={require('../../assets/icons/checkBoxfalse.png')}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    handlerCheckBox();
                  }}>
                  <Image
                    source={require('../../assets/icons/checkBoxTrue.png')}
                  />
                </TouchableOpacity>
              )}

              <Image style={styles.avata} source={item.imageAvata} />
              <View style={styles.inforPerson}>
                <Text style={styles.name}> {item.value} </Text>
                <Text> {item.phone} </Text>
                <Text> {item.bank} </Text>
              </View>
            </View>
          );
        }}
        renderCustomSectionHeader={section => (
          <View style={styles.headerTitle}>
            <Text style={styles.title}> {section.title} </Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    marginLeft: 12,
  },
  textHeader: {
    flex: 1,
    textAlign: 'center',
    marginLeft: 15,
    color: '#333333',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
  },
  doneButton: {
    position: 'absolute',
    marginLeft: 318,
  },
  done: {
    color: '#1e62be',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
  },
  view: {
    marginRight: 12,
    flexDirection: 'row',
  },
  iconSearch: {
    marginTop: 14,
    marginLeft: 10,
  },
  text1: {
    color: '#333333',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 22,
  },
  warpSearch: {
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    width: '93%',
    height: 45,
  },
  flatList: {
    marginTop: 20,
  },
  avata: {
    marginLeft: 12,
  },
  box: {
    width: 185,
    height: 280,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 9,
    marginHorizontal: 6,
  },
  imageInfor: {
    width: '100%',
    height: 165,
    flexWrap: 'wrap',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  infor1: {
    fontFamily: 'Roboto',
    marginTop: 20,
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '800',
    color: '#333333',
    textAlign: 'center',
  },
  infor2: {
    fontFamily: 'Roboto',
    marginTop: 15,
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '400',
    color: '#828282',
    textAlign: 'center',
  },
  sectionList: {
    marginTop: 10,
  },
  headerTitle: {
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#e0e0e0',
  },
  title: {
    marginLeft: 15,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  person: {
    marginLeft: 15,
    alignItems: 'center',
    height: 90,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
  },
  inforPerson: {
    flex: 1,
    height: 90,
    justifyContent: 'center',
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 20,
  },
  name: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
});
