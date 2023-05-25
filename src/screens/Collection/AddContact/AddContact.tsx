import React, {useState} from 'react';
import {Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {useDispatch, useSelector} from 'react-redux';
import {inforListRemainingInAddContactSelector} from '../../../Redux/Selectors';
import {contentCollectionSlide} from '../ChildCollection/ContentCollectionSlide';
import {contactSlide} from '../../Home/Contact/ContactSlide';

export default function AddContact() {
  const inforListRemainingInAddContact = useSelector(
    inforListRemainingInAddContactSelector,
  );
  const [searchContact, setSearchContact] = useState('');
  const navigation = useNavigation();
  const [checkList, setCheckList] = useState([]);
  const dispatch = useDispatch();
  const isChecked = id => {
    return checkList.includes(id);
  };
  const toggleStatus = id => {
    isChecked(id)
      ? setCheckList(checkList.filter(item => item !== id))
      : setCheckList([...checkList, id]);
  };
  const handleSearchContactChange = (value: any) => {
    setSearchContact(value);
    dispatch(contactSlide.actions.searchInAddContact(value));
  };
  const addNewContact = () => {
    dispatch(
      contentCollectionSlide.actions.addContactToCollection(
        inforListRemainingInAddContact.filter(item =>
          checkList.includes(item.id),
        ),
      ),
    );
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header>
        <TextHeader> Add contact </TextHeader>
        <BackButton
          onPress={() => {
            navigation.navigate('ChildCollection');
            setCheckList([]);
          }}>
          <Image source={require('../../../assets/icons/arrow.png')} />
        </BackButton>
        <DoneButton
          onPress={() => {
            navigation.navigate('ChildCollection');
            addNewContact();
            setCheckList([]);
          }}>
          <Done>Done ({checkList.length})</Done>
        </DoneButton>
      </Header>
      <WrapSearch>
        <Search>
          <IconsSearch
            source={require('../../../assets/icons/icon_search.png')}
          />
          <TextInput
            style={{flex: 1}}
            onChangeText={value => handleSearchContactChange(value)}
            value={searchContact}
            placeholder="Search"
          />
        </Search>
      </WrapSearch>

      <SectionList
        data={inforListRemainingInAddContact}
        keyExtractor={item => item.key}
        indexLetterStyle={{
          color: '#1e62be',
          fontSize: 15,
        }}
        renderCustomItem={item => {
          return (
            <Person onPress={() => toggleStatus(item.id)}>
              {isChecked(item.id) ? (
                <Image
                  source={require('../../../assets/icons/checkBoxTrue.png')}
                />
              ) : (
                <Image
                  source={require('../../../assets/icons/checkBoxfalse.png')}
                />
              )}
              <Avata source={item.imageAvata} />
              <InforPerson>
                <Name> {item.value} </Name>
                <Text> {item.phone} </Text>
                <Text> {item.bank} </Text>
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
    </View>
  );
}
const SectionList = styled(AlphabetList)`
  margin-top: 10px;
`;
const Header = styled(View)`
  height: 50px;
  flex-direction: row;
  align-items: center;
`;
const BackButton = styled(TouchableOpacity)`
  position: absolute;
  margin-left: 12px;
`;
const TextHeader = styled(Text)`
  flex: 1;
  text-align: center;
  margin-left: 15px;
  color: #333333;
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
`;
const DoneButton = styled(TouchableOpacity)`
  position: absolute;
  margin-left: 310px;
`;
const Done = styled(Text)`
  color: #1e62be;
  font-family: Roboto;
  font-style: normal;
  font-weight: 600px;
  font-size: 18px;
`;
const IconsSearch = styled(Image)`
  margin-top: 14px;
  margin-left: 10px;
`;
const WrapSearch = styled(View)`
  align-items: center;
`;
const Search = styled(View)`
  flex-direction: row;
  background-color: #f2f2f2;
  border-radius: 4px;
  width: 93%;
  height: 45px;
`;
const Avata = styled(Image)`
  margin-left: 12px;
`;
const HeaderTitle = styled(View)`
  justify-content: center;
  height: 40px;
  background-color: #e0e0e0;
`;
const Title = styled(Text)`
  margin-left: 15px;
  font-family: Roboto;
  font-style: normal;
  font-size: 17px;
  font-weight: 500;
  color: #000;
`;
const Person = styled(TouchableOpacity)`
  margin-left: 15px;
  align-items: center;
  height: 90px;
  flex-direction: row;
  flex: 1;
  background-color: white;
`;
const InforPerson = styled(View)`
  height: 90px;
  justify-content: center;
  border-bottom-color: #e6e6e6;
  border-bottom-width: 1px;
  margin-left: 15px;
  margin-right: 20px;
`;
const Name = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-size: 17px;
  font-weight: 500;
  color: #000;
`;
