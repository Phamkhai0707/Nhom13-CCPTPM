import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {useSelector} from 'react-redux';
import {inforListSelector} from '../../Redux/Selectors';

export default function Contact() {
  const DATA = [
    {
      value: 'Dương Lê',
      key: '001',
      phone: '0977272123',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar01.png'),
    },
    {
      value: 'Thùy Trang',
      key: '002',
      phone: '0977272123',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar02.png'),
    },
    {
      key: '003',
      phone: '0977272123',
      value: 'Hồng Đăng',
      bank: 'OTP',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar03.png'),
    },
    {
      key: '004',
      phone: '0977272123',
      value: 'Nguyễn Tiến Nam',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar04.png'),
    },
    {
      key: '005',
      phone: '0977272123',
      value: 'Bảo Ngọc',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar05.png'),
    },
    {
      key: '006',
      phone: '0977272123',
      value: 'Thái Thùy Trang',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar06.png'),
    },
    {
      key: '007',
      phone: '0977272123',
      value: 'Lê Ngọc Linh',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar07.png'),
    },
    {
      key: '008',
      phone: '0977272123',
      value: 'Trần Thái Hà',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar01.png'),
    },
    {
      key: '009',
      phone: '0977272123',
      value: 'Nguyễn Tiến Nam',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar02.png'),
    },
    {
      value: 'Hồng Đăng',
      key: '010',
      phone: '0977272123',
      bank: 'OTP',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar03.png'),
    },
    {
      value: 'Bảo Ngọc',
      key: '011',
      phone: '0977272123',
      bank: 'Techcombank',
      image: require('../../assets/images/per1.png'),
      imageAvata: require('../../assets/images/avatar04.png'),
    },
  ];
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const [changeView, setChangeView] = useState('activeModul');
  const [filterStatus, setFilterStatus] = useState(false);
  const inforList = useSelector(inforListSelector);

  const handleText = () => {
    setNumber('');
  };

  const handleView = (text: string) => {
    setChangeView(text);
  };

  const Item = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('Information')}>
        <Image style={styles.imageInfor} source={item.image} />
        {inforList.map(infor => (
          <Text style={styles.infor1}>{infor.name}</Text>
        ))}
        <Text style={styles.infor2}>{item.bank}</Text>
      </TouchableOpacity>
    );
  };
  const renderItem = item => {
    return <Item item={item.item} />;
  };

  // const renderItem = item => {
  //   console.log('check item', item.item.image);
  //   return (
  //     <View>
  //       <Image source={item.item.image} />
  //       <Text>abc</Text>
  //     </View>
  //   );
  // };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconMore}
          onPress={() => navigation.toggleDrawer('MyDrawer')}>
          <Image source={require('../../assets/icons/iconMore.png')} />
        </TouchableOpacity>
        <Text style={styles.textHeader}> All contacts </Text>
        <View style={styles.view}>
          <TouchableOpacity
            onPress={() => {
              handleView('activeModul');
            }}>
            <Image
              style={{
                tintColor: changeView === 'activeModul' ? '#1e62be' : '#757575',
              }}
              source={require('../../assets/icons/viewModul.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleView('activeList');
            }}>
            <Image
              style={{
                tintColor: changeView === 'activeList' ? '#1e62be' : '#757575',
              }}
              source={require('../../assets/icons/viewList.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.search, {flexDirection: 'row'}]}>
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
        {filterStatus === false ? (
          <TouchableOpacity
            style={styles.filter}
            onPress={() => setFilterStatus(!filterStatus)}>
            <Image
              style={styles.iconfilter}
              source={require('../../assets/icons/icon_filter1.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.filter}
            onPress={() => setFilterStatus(!filterStatus)}>
            <Image
              style={styles.iconfilterActive}
              source={require('../../assets/icons/icon_filter1.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      {changeView === 'activeModul' ? (
        <FlatList
          style={styles.flatList}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          numColumns={2}
        />
      ) : (
        ''
      )}
      {changeView === 'activeList' ? (
        <AlphabetList
          style={styles.sectionList}
          data={DATA}
          indexLetterStyle={{
            color: '#1e62be',
            fontSize: 15,
          }}
          // keyExtractor={(item, index) => item + index}
          renderCustomItem={item => {
            return (
              <TouchableOpacity
                style={styles.person}
                onPress={() => navigation.navigate('Information')}>
                <Image source={item.imageAvata} />
                <View style={styles.inforPerson}>
                  <Text style={styles.name}> {item.value} </Text>
                  <Text> {item.phone} </Text>
                  <Text> {item.bank} </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          renderCustomSectionHeader={section => (
            <View style={styles.headerTitle}>
              <Text style={styles.title}> {section.title} </Text>
            </View>
          )}
        />
      ) : (
        ''
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMore: {
    marginLeft: 12,
  },
  textHeader: {
    marginLeft: 15,
    color: '#333333',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
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
  search: {
    backgroundColor: '#F2F2F2',
    marginLeft: 12,
    borderRadius: 4,
    width: '80%',
    height: 45,
  },
  filter: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 14,
  },
  iconfilter: {
    width: 25,
    height: 24,
  },
  iconfilterActive: {
    tintColor: '#1e62be',
    width: 25,
    height: 24,
  },
  flatList: {
    marginTop: 20,
  },
  box: {
    width: 185,
    height: 280,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
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
