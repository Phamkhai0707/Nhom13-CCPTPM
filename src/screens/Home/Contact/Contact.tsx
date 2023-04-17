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
import styled from 'styled-components';
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
          <SectionList
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
const SectionList = styled(AlphabetList)`
  margin-top: 10px;
`;
const Header = styled.View`
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const IconMore = styled.TouchableOpacity`
  margin-left: 12px;
`;
const TextHeader = styled.Text`
  margin-left: 15px;
  color: #333333;
  text-align: center;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
`;
const WrapView = styled.View`
  margin-right: 12px;
  flex-direction: row;
`;
const IconSeach = styled.Image`
  margin-top: 14px;
  margin-left: 10px;
`;
const Search = styled.View`
  flex-direction: row;
  background-color: #f2f2f2;
  margin-left: 12px;
  border-radius: 4px;
  height: 45px;
`;
const Filter = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 20px;
  margin-top: 14px;
`;
const IconFilter = styled.Image`
  width: 25px;
  height: 24px;
`;
const IconFilterActive = styled.Image`
  //tintcolor: #1e62be
  width: 25px;
  height: 24px;
`;
const Flatlist = styled.FlatList`
  margin-top: 20px;
`;
const Box = styled.TouchableOpacity`
  width: 185px;
  height: 280px;
  background-color: white;
  border-width: 1px;
  border-radius: 9px;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0px, height: 2px};
  shadow-opacity: 0.25;
  shadow-radius: 4;
  elevation: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
`;
const ImageInfor = styled.Image`
  width: 100%;
  height: 165px;
  flex-wrap: wrap;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
const Infor1 = styled.Text`
  font-family: Roboto;
  margin-top: 20px;
  font-style: normal;
  font-size: 18px;
  font-weight: 800;
  color: #333333;
  text-align: center;
`;
const Infor2 = styled.Text`
  font-family: Roboto;
  margin-top: 15px;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  text-align: center;
`;
const HeaderTitle = styled.View`
  justify-content: center;
  height: 40px;
  background-color: #e0e0e0;
`;
const Title = styled.Text`
  margin-left: 15px;
  font-family: Roboto;
  font-style: normal;
  font-size: 17px;
  font-weight: 500;
  color: #000;
`;
const Person = styled.TouchableOpacity`
  margin-left: 15px;
  align-items: center;
  height: 90px;
  flex-direction: row;
  background-color: white;
`;
const InforPerson = styled.View`
  height: 90px;
  justify-content: center;
  border-bottom-color: #e6e6e6;
  border-bottom-width: 1px;
  margin-left: 15px;
  margin-right: 20px;
`;
const Name = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 17px;
  font-weight: 500;
  color: #000;
`;
