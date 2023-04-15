import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Background,
  Header,
  BackButton,
  WrapHeaderTitle,
  HeaderTitle,
  DeleteButton,
  Delete,
  Per,
  WrapInfor,
  Infor,
  Name,
  BottomButton,
  TextBottomButton,
  ValueBottomButton,
} from './ContentCollectionStyled';
import {useNavigation} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {
  contentCollectionSelector,
  titleNameSelector,
} from '../../../Redux/Selectors';
import {useDispatch, useSelector} from 'react-redux';
import {contactSlide} from '../../Home/Contact/ContactSlide';
import {contentCollectionSlide} from './ContentCollectionSlide';
export default function ChildCollection() {
  const title = useSelector(titleNameSelector);
  const navigation = useNavigation();
  const [editName, setStatusEditName] = useState(false);
  const contentCollectionList = useSelector(contentCollectionSelector);
  const [checkedList, setCheckedList] = useState([]);
  const dispatch = useDispatch();
  const detailContact = id => {
    dispatch(contactSlide.actions.detailContactFrom(id));
  };
  const isChecked = id => {
    return checkedList.includes(id);
  };
  const toggleStatus = id => {
    if (editName === true) {
      if (isChecked(id)) {
        setCheckedList(checkedList.filter(item => item !== id));
      } else {
        setCheckedList([...checkedList, id]);
      }
    }
  };
  const deleteContactCollection = () => {
    dispatch(
      contentCollectionSlide.actions.deleteContactOfCollection(checkedList),
    );
  };
  // const contentSelected = () => {
  //   return contentCollectionList.map(item =>
  //     Object.assign({}, item, {checked: false}),
  //   );
  // };
  const Item = ({item}) => {
    return (
      <Per
        onPress={() => {
          detailContact(item.id);
          toggleStatus(item.id);
          editName === false ? navigation.navigate('Information') : {};
        }}>
        <Image source={item.imageAvata} />
        <WrapInfor>
          <Infor>
            <Name> {item.fullName} </Name>
            <Text> {item.phone} </Text>
          </Infor>
          {editName === true ? (
            isChecked(item.id) ? (
              <Image
                source={require('../../../assets/icons/checkBoxTrue.png')}
              />
            ) : (
              <Image
                source={require('../../../assets/icons/checkBoxfalse.png')}
              />
            )
          ) : (
            <></>
          )}
        </WrapInfor>
      </Per>
    );
  };
  const renderItem = item => {
    return <Item item={item.item} />;
  };
  return (
    <NativeBaseProvider style={{flex: 1, backgourndColor: 'white'}}>
      <Header>
        <WrapHeaderTitle>
          <HeaderTitle>{title}</HeaderTitle>
          <Text>{contentCollectionList.length} thành viên</Text>
        </WrapHeaderTitle>
        <BackButton
          onPress={() => {
            navigation.navigate('Collection');
            setStatusEditName(false);
            setCheckedList([]);
          }}>
          <Image source={require('../../../assets/icons/arrow.png')} />
        </BackButton>
        {editName === true ? (
          <DeleteButton
            onPress={() => {
              deleteContactCollection();
              setCheckedList([]);
            }}>
            <Delete>Delete ({checkedList.length})</Delete>
          </DeleteButton>
        ) : (
          ''
        )}
      </Header>

      <FlatList
        style={{backgroundColor: 'white'}}
        data={contentCollectionList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <BottomButton>
        <ValueBottomButton
          onPress={() => {
            navigation.navigate('AddContact');
            setStatusEditName(false);
            setCheckedList([]);
          }}>
          <Image source={require('../../../assets/icons/Addcontact.png')} />
          <TextBottomButton>Add contact</TextBottomButton>
        </ValueBottomButton>
        <ValueBottomButton
          onPress={() => {
            setStatusEditName(!editName);
            setCheckedList([]);
          }}>
          <Image source={require('../../../assets/icons/editName.png')} />
          <TextBottomButton>Edit name</TextBottomButton>
        </ValueBottomButton>
      </BottomButton>
    </NativeBaseProvider>
  );
}
