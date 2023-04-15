import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
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
import {
  Header,
  IconMore,
  IconSeach,
  IconFilter,
  IconFilterActive,
  Filter,
  Flatlist,
  Box,
  TextHeader,
  WrapView,
  Search,
  ImageInfor,
  Infor1,
  Infor2,
  HeaderTitle,
  Title,
  Person,
  InforPerson,
  Name,
} from './ContactStyded';
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
      <Box
        onPress={() => {
          navigation.navigate('Information');
          contactDetail(item);
        }}>
        <ImageInfor source={require('../../../assets/images/per1.png')} />
        <Infor1>{item.fullName}</Infor1>
        <Infor2>{item.company}</Infor2>
      </Box>
    );
  };
  const renderItem = item => {
    return <Item item={item.item} />;
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header>
          <IconMore onPress={() => navigation.toggleDrawer('MyDrawer')}>
            <Image source={require('../../../assets/icons/iconMore.png')} />
          </IconMore>
          <TextHeader> All contacts </TextHeader>
          <WrapView>
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
          </WrapView>
        </Header>
        <View style={{flexDirection: 'row'}}>
          <Search style={{width: changeView === 'activeList' ? '93%' : '80%'}}>
            <IconSeach
              source={require('../../../assets/icons/icon_search.png')}
            />
            <TextInput
              style={{width: '100%'}}
              value={searchContact}
              onChangeText={value => handleSearchContactChange(value)}
              placeholder="Search"
            />
          </Search>
          {changeView === 'activeModul' ? (
            filterStatus === false ? (
              <Filter onPress={() => setFilterStatus(true)}>
                <IconFilter
                  source={require('../../../assets/icons/icon_filter1.png')}
                />
              </Filter>
            ) : (
              <Filter onPress={() => setFilterStatus(false)}>
                <IconFilterActive
                  source={require('../../../assets/icons/icon_filter1.png')}
                />
              </Filter>
            )
          ) : (
            <></>
          )}
        </View>

        {changeView === 'activeModul' ? (
          <Flatlist
            legacyImplementation={true}
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
                <Person onPress={() => navigation.navigate('Information')}>
                  <Image source={item.imageAvata} />
                  <InforPerson>
                    <Name> {item.value} </Name>
                    <Text> {item.phone} </Text>
                    <Text> {item.company} </Text>
                  </InforPerson>
                </Person>
              );
            }}
            renderCustomSectionHeader={section => (
              <HeaderTitle>
                <Title> {section.title} </Title>
              </HeaderTitle>
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
  sectionList: {
    marginTop: 10,
  },
});
