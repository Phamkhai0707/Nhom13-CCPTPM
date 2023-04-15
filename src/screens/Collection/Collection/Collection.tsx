import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Actionsheet,
  Box,
  Center,
  NativeBaseProvider,
  useDisclose,
} from 'native-base';
import {
  Header,
  BackButton,
  PlusButton,
  TitleHeader,
  Flatlist,
  Section,
  Iconfolder,
  BottomLine,
  Name,
  MoreOption,
  TitleHeaderActionSheet,
  DeleteGroup,
  CenteredView,
  ModalView,
  NameModalTitle,
  InputNameGroup,
  CancelButton,
  DoneButton,
  ContentText,
} from './CollectionStyled';
import {useDispatch, useSelector} from 'react-redux';
import {collectionListSelector} from '../../../Redux/Selectors';
import {addNewCollection, editNameGroup} from '../../Redux/Actions';
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
          <Box
            h={10}
            px={3}
            justifyContent="center"
            style={styles.headerActionSheet}>
            <TitleHeaderActionSheet>Investors</TitleHeaderActionSheet>
          </Box>
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
            <Center style={styles.modalTitle}>
              <NameModalTitle>Creat group</NameModalTitle>
            </Center>
            <InputNameGroup
              onChangeText={value => {
                handleNameGroup(value);
              }}
              value={nameGroup}
              placeholder="Add text"
            />
            <Center style={styles.buttonChose}>
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
            </Center>
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
            <Center style={styles.modalTitle}>
              <NameModalTitle>Edit name group</NameModalTitle>
            </Center>
            <InputNameGroup
              value={changeNameGroup}
              onChangeText={value => {
                handleChangeNameGroup(value);
              }}
            />
            <Center style={styles.buttonChose}>
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
            </Center>
          </ModalView>
        </CenteredView>
      </Modal>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  headerActionSheet: {
    width: '100%',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  modalTitle: {
    width: '100%',
    height: 44,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#1e62be',
  },
  buttonChose: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 64,
    width: 300,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
