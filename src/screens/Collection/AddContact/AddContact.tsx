import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {
  Header,
  BackButton,
  TextHeader,
  DoneButton,
  Done,
  IconsSearch,
  Text1,
  WrapSearch,
  Search,
  Flaslist,
  Avata,
  HeaderTitle,
  Title,
  Person,
  InforPerson,
  Name,
} from './AddContactStyled';
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
  const handleSearchContactChange = value => {
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

      <AlphabetList
        style={styles.sectionList}
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
const styles = StyleSheet.create({
  sectionList: {
    marginTop: 10,
  },
});
