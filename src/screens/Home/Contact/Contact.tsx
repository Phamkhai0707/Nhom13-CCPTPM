import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {useDispatch, useSelector} from 'react-redux';
import {inforListRemainingSelector} from '../../../Redux/Selectors';
import {contactSlide} from './ContactSlide';

export default function Contact() {
  const navigation = useNavigation();
  const [searchContact, setSearchContact] = useState('');
  const [changeView, setChangeView] = useState('activeModul');
  const [filterStatus, setFilterStatus] = useState(false);
  const inforList = useSelector(inforListRemainingSelector);
  const dispatch = useDispatch();
  const changeList = [...inforList].sort((a, b) =>
    a.fullName.localeCompare(b.fullName),
  );
  const handleSearchContactChange = value => {
    setSearchContact(value);
    dispatch(contactSlide.actions.searchContact(value));
  };
  const handleView = (text: string) => {
    setChangeView(text);
  };
  const contactDetail = item => {
    dispatch(contactSlide.actions.contactDetail(item));
  };
  const Item = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate('Information');
          contactDetail(item);
        }}>
        <Image
          style={styles.imageInfor}
          source={require('../../../assets/images/per1.png')}
        />
        <Text style={styles.infor1}>{item.fullName}</Text>
        <Text style={styles.infor2}>{item.company}</Text>
      </TouchableOpacity>
    );
  };
  const renderItem = item => {
    return <Item item={item.item} />;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconMore}
            onPress={() => navigation.toggleDrawer('MyDrawer')}>
            <Image source={require('../../../assets/icons/iconMore.png')} />
          </TouchableOpacity>
          <Text style={styles.textHeader}> All contacts </Text>
          <View style={styles.view}>
            <TouchableOpacity
              onPress={() => {
                handleView('activeModul');
              }}>
              <Image
                style={{
                  tintColor:
                    changeView === 'activeModul' ? '#1e62be' : '#757575',
                }}
                source={require('../../../assets/icons/viewModul.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleView('activeList');
              }}>
              <Image
                style={{
                  tintColor:
                    changeView === 'activeList' ? '#1e62be' : '#757575',
                }}
                source={require('../../../assets/icons/viewList.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.search,
              {width: changeView === 'activeList' ? '93%' : '80%'},
            ]}>
            <Image
              style={styles.iconSearch}
              source={require('../../../assets/icons/icon_search.png')}
            />
            <TextInput
              style={{width: '100%'}}
              value={searchContact}
              onChangeText={value => handleSearchContactChange(value)}
              placeholder="Search"
            />
          </View>
          {changeView === 'activeModul' ? (
            filterStatus === false ? (
              <TouchableOpacity
                style={styles.filter}
                onPress={() => setFilterStatus(true)}>
                <Image
                  style={styles.iconfilter}
                  source={require('../../../assets/icons/icon_filter1.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.filter}
                onPress={() => setFilterStatus(false)}>
                <Image
                  style={styles.iconfilterActive}
                  source={require('../../../assets/icons/icon_filter1.png')}
                />
              </TouchableOpacity>
            )
          ) : (
            <></>
          )}
        </View>

        {changeView === 'activeModul' ? (
          <FlatList
            legacyImplementation={true}
            style={styles.flatList}
            data={filterStatus ? changeList : inforList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        ) : (
          <></>
        )}
        {changeView === 'activeList' ? (
          <AlphabetList
            style={styles.sectionList}
            data={inforList}
            keyExtractor={item => item.key}
            indexLetterStyle={{
              color: '#1e62be',
              fontSize: 15,
            }}
            renderCustomItem={item => {
              return (
                <TouchableOpacity
                  style={styles.person}
                  onPress={() => navigation.navigate('Information')}>
                  <Image source={item.imageAvata} />
                  <View style={styles.inforPerson}>
                    <Text style={styles.name}> {item.value} </Text>
                    <Text> {item.phone} </Text>
                    <Text> {item.company} </Text>
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
          <></>
        )}
      </View>
    </TouchableWithoutFeedback>
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
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    marginLeft: 12,
    borderRadius: 4,
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
