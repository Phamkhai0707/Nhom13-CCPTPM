import React, {useState} from 'react';
import {FlatList, Image, Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {
  contentCollectionSelector,
  titleNameSelector,
} from '../../../Redux/Selectors';
import {useDispatch, useSelector} from 'react-redux';
import {contactSlide} from '../../Home/Contact/ContactSlide';
import {contentCollectionSlide} from './ContentCollectionSlide';
import { IC_ADDCONTACT, IC_ARROW, IC_CHECKBOXFALSE, IC_CHECKBOXTRUE, IC_EDITNAME } from '../../../assets/type';
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
                source={IC_CHECKBOXTRUE}
              />
            ) : (
              <Image
                source={IC_CHECKBOXFALSE}
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
          <Image source={IC_ARROW} />
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
          <Image source={IC_ADDCONTACT} />
          <TextBottomButton>Add contact</TextBottomButton>
        </ValueBottomButton>
        <ValueBottomButton
          onPress={() => {
            setStatusEditName(!editName);
            setCheckedList([]);
          }}>
          <Image source={IC_EDITNAME} />
          <TextBottomButton>Edit name</TextBottomButton>
        </ValueBottomButton>
      </BottomButton>
    </NativeBaseProvider>
  );
}
const Header = styled.View`
  background-color: white;
  height: 54px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #bdbdbd;
`;
const BackButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: 10px;
`;
const WrapHeaderTitle = styled.View`
  flex: 1;
  align-items: center;
`;
const HeaderTitle = styled.Text`
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #000;
`;
const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: 300px;
`;
const Delete = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 18px;
  font-weight: 600;
  color: #ff4a4a;
`;
const Per = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 15px;
  height: 55px;
  align-items: center;
`;
const WrapInfor = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-right: 35px;
  margin-left: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
`;
const Infor = styled.View`
  justify-content: space-evenly;
`;
const Name = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000;
`;
const BottomButton = styled.View`
  background-color: #1e62be;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`;
const TextBottomButton = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: white;
`;
const ValueBottomButton = styled.TouchableOpacity`
  align-items: center;
`;
