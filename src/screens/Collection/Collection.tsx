import React, {useRef, useState} from 'react';
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
export default function Collection() {
  const DATA = [
    {
      id: '001',
      name: 'All',
    },
    {
      id: '002',
      name: 'General',
    },
    {
      id: '003',
      name: 'Investors',
    },
    {
      id: '004',
      name: 'Lead',
    },
    {
      id: '005',
      name: 'VIP',
    },
  ];
  const {isOpen, onOpen, onClose} = useDisclose();
  const [nameCollection, setNameCollection] = useState(false);
  const [nameGroup, setNameGroup] = useState('');
  const navigation = useNavigation();
  const confirm = () => {
    Alert.alert('Confirm', 'Bạn thực sự muốn xóa group này!', [
      {
        text: 'Cancel',
        onPress: () => onClose(),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => onClose(),
      },
    ]);
  };
  const Item = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.section}
          onPress={() => navigation.navigate('ChildCollection')}>
          <Image
            style={styles.iconFolder}
            source={require('../../assets/icons/iconFolderBig.png')}
          />
          <View style={styles.bottomLine}>
            <Text style={styles.Name}>{item.name}</Text>
            <TouchableOpacity style={styles.moreOption} onPress={onOpen}>
              <Image source={require('../../assets/icons/moreOption.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
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
            <Text style={styles.titleHeaderActionSheet}>Investors</Text>
          </Box>
          <Actionsheet.Item
            startIcon={
              <Image source={require('../../assets/icons/iconEdit.png')} />
            }
            onPress={() => navigation.navigate('ChildCollection')}>
            Edit
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Image source={require('../../assets/icons/iconDelete.png')} />
            }
            onPress={() => confirm()}>
            <Text style={styles.deleteGroup}>Delete group</Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    );
  }
  return (
    <NativeBaseProvider>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <Center>
          <Text style={styles.titleHeader}>Collections</Text>
        </Center>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => setNameCollection(true)}>
          <Image source={require('../../assets/icons/iconBluePlus.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={DATA}
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Center style={styles.modalTitle}>
              <Text style={styles.nameModalTitle}>Creat group</Text>
            </Center>
            <TextInput
              style={styles.inputNameGroup}
              onChangeText={e => {
                setNameGroup(e);
              }}
              value={nameGroup}
              placeholder="Add text"
            />
            <Center style={styles.buttonChose}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setNameCollection(false);
                }}>
                <Text style={styles.contentText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => setNameCollection(false)}>
                <Text style={styles.contentText}>Done</Text>
              </TouchableOpacity>
            </Center>
          </View>
        </View>
      </Modal>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  backButton: {
    marginLeft: 10,
  },
  plusButton: {
    marginRight: 10,
  },
  titleHeader: {
    position: 'absolute',
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
  flatList: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 45,
  },
  iconFolder: {
    marginLeft: 10,
  },
  bottomLine: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 15,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  Name: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 17,
    color: '#000',
  },
  moreOption: {
    marginLeft: 'auto',
  },
  headerActionSheet: {
    width: '100%',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  titleHeaderActionSheet: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    color: '#000',
  },
  deleteGroup: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#e22c2c',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 172,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  modalTitle: {
    width: '100%',
    height: 44,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#1e62be',
  },
  nameModalTitle: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
  },
  inputNameGroup: {
    height: 64,
    width: 220,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  buttonChose: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 64,
    width: 300,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#BDBDBD',
    height: 36,
    width: 86,
  },
  doneButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#1e62be',
    height: 36,
    width: 80,
  },
  contentText: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'white',
  },
});
