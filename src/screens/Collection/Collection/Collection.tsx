import React, {useState} from 'react';
import {View, Image, StyleSheet, Alert, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Actionsheet,
  Box,
  Center,
  NativeBaseProvider,
  useDisclose,
} from 'native-base';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {collectionListSelector} from '../../../Redux/Selectors';
import {collectionSlide} from './CollectionSlide';
export default function Collection() {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [nameCollection, setNameCollection] = useState(false);
  const [editNameCollection, setEditNameCollection] = useState(false);
  const [nameGroup, setNameGroup] = useState('');
  const [idGroup, setIdGroup] = useState('');
  const [changeNameGroup, setChangeNameGroup] = useState('');
  const navigation = useNavigation();
  const collectionList = useSelector(collectionListSelector);
  const dispatch = useDispatch();
  const handleChangeNameGroup = nameGroup => {
    setChangeNameGroup(nameGroup);
  };
  const handleNameGroup = nameGroup => {
    setNameGroup(nameGroup);
  };
  const handleAddNewCollection = () => {
    dispatch(
      collectionSlide.actions.addCollection({
        id: Date.now(),
        name: nameGroup,
        folderBig: require('../../../assets/icons/iconFolderBig.png'),
        moreOption: require('../../../assets/icons/moreOption.png'),
      }),
    );
  };
  const saveEditName = (idGroup, nameGroup) => {
    dispatch(collectionSlide.actions.editNameGroup({idGroup, nameGroup}));
  };
  const deleteGroup = idGroup => {
    dispatch(collectionSlide.actions.deleteGroup(idGroup));
  };
  const navigateTitle = value => {
    dispatch(collectionSlide.actions.navigateTitleName(value));
  };
  const confirm = () => {
    Alert.alert('Confirm', 'Bạn thực sự muốn xóa group này!', [
      {
        text: 'Cancel',
        onPress: () => onClose(),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          onClose();
          deleteGroup(idGroup);
        },
      },
    ]);
  };
  const Item = ({item}) => {
    return (
      <View>
        <Section
          onPress={() => {
            navigation.navigate('ChildCollection');
            navigateTitle(item.name);
          }}>
          <Iconfolder source={item.folderBig} />
          <BottomLine>
            <Name>{item.name}</Name>
            <MoreOption
              onPress={() => {
                onOpen();
                setIdGroup(item.id);
                handleChangeNameGroup(item.name);
              }}>
              <Image source={item.moreOption} />
            </MoreOption>
          </BottomLine>
        </Section>
      </View>
    );
  };
  const renderItem = item => {
    return <Item item={item.item} />;
  };
  function ActionSheet() {
    return (
      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
        <Actionsheet.Content borderTopRadius="6">
          <HeaderActionSheet h={10} px={3} justifyContent="center">
            <TitleHeaderActionSheet>Investors</TitleHeaderActionSheet>
          </HeaderActionSheet>
          <Actionsheet.Item
            startIcon={
              <Image source={require('../../../assets/icons/iconEdit.png')} />
            }
            onPress={() => {
              setEditNameCollection(true);
              onClose();
            }}>
            Edit
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Image source={require('../../../assets/icons/iconDelete.png')} />
            }
            onPress={() => confirm()}>
            <DeleteGroup>Delete group</DeleteGroup>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    );
  }
  return (
    <NativeBaseProvider>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/icons/arrow.png')} />
        </BackButton>
        <Center>
          <TitleHeader>Collections</TitleHeader>
        </Center>
        <PlusButton onPress={() => setNameCollection(true)}>
          <Image source={require('../../../assets/icons/iconBluePlus.png')} />
        </PlusButton>
      </Header>
      <Flatlist
        data={collectionList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ActionSheet />
      <Modal
        animationType="slide"
        transparent={true}
        visible={nameCollection}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setNameCollection(false);
        }}>
        <CenteredView>
          <ModalView>
            <ModalTitle>
              <NameModalTitle>Creat group</NameModalTitle>
            </ModalTitle>
            <InputNameGroup
              onChangeText={value => {
                handleNameGroup(value);
              }}
              value={nameGroup}
              placeholder="Add text"
            />
            <ButtonChose>
              <CancelButton
                onPress={() => {
                  setNameCollection(false);
                }}>
                <ContentText>Cancel</ContentText>
              </CancelButton>
              <DoneButton
                onPress={() => {
                  setNameCollection(false), handleAddNewCollection();
                }}>
                <ContentText>Done</ContentText>
              </DoneButton>
            </ButtonChose>
          </ModalView>
        </CenteredView>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editNameCollection}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setNameCollection(false);
        }}>
        <CenteredView>
          <ModalView>
            <ModalTitle>
              <NameModalTitle>Edit name group</NameModalTitle>
            </ModalTitle>
            <InputNameGroup
              value={changeNameGroup}
              onChangeText={value => {
                handleChangeNameGroup(value);
              }}
            />
            <ButtonChose>
              <CancelButton
                onPress={() => {
                  setEditNameCollection(false);
                }}>
                <ContentText>Cancel</ContentText>
              </CancelButton>
              <DoneButton
                onPress={() => {
                  setEditNameCollection(false);
                  saveEditName(idGroup, changeNameGroup);
                }}>
                <ContentText>Done</ContentText>
              </DoneButton>
            </ButtonChose>
          </ModalView>
        </CenteredView>
      </Modal>
    </NativeBaseProvider>
  );
}
const ButtonChose = styled(Center)`
  flex-direction: row;
  justify-content: space-around;
  height: 64px;
  width: 300px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const ModalTitle = styled(Center)`
  width: 100%;
  height: 44px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #1e62be;
`;
const HeaderActionSheet = styled(Box)`
  width: 100%
  border-bottom-color: #e6e6e6;
  border-bottom-width: 1px;
`;
const Header = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom-color: #e6e6e6;
  border-bottom-width: 1px;
`;
const BackButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
const PlusButton = styled.TouchableOpacity`
  margin-right: 10px;
`;
const TitleHeader = styled.Text`
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 20;
  color: #000;
`;
const Flatlist = styled.FlatList`
  flex: 1;
  background-color: white;
`;
const Section = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 45px;
`;
const Iconfolder = styled.Image`
  margin-left: 10px;
`;
const BottomLine = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  margin-right: 15px;
  margin-left: 15px;
  height: 45px;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
`;
const Name = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 17px;
  color: #000;
`;
const MoreOption = styled.TouchableOpacity`
  margin-left: auto;
`;
const TitleHeaderActionSheet = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #000;
`;
const DeleteGroup = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #e22c2c;
`;
const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ModalView = styled.View`
  background-color: white;
  border-radius: 5;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.25;
  shadow-radius: 4;
  elevation: 5;
  align-items: center;
`;
const NameModalTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: white;
`;
const InputNameGroup = styled.TextInput`
  font-size: 18px;
  font-weight: 500;
  height: 64px;
  width: 220px;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
`;
const CancelButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #bdbdbd;
  height: 36px;
  width: 86px;
`;
const DoneButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: 1e62be;
  height: 36px;
  width: 80px;
`;
const ContentText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: white;
`;
