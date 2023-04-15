import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
      <TouchableOpacity
        style={styles.per}
        onPress={() => {
          detailContact(item.id);
          toggleStatus(item.id);
          editName === false ? navigation.navigate('Information') : {};
        }}>
        <Image source={item.imageAvata} />
        <View style={styles.warpInfor}>
          <View style={styles.infor}>
            <Text style={styles.name}> {item.fullName} </Text>
            <Text> {item.phone} </Text>
          </View>
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
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = item => {
    return <Item item={item.item} />;
  };
  return (
    <NativeBaseProvider style={styles.backGround}>
      <View style={styles.header}>
        <View style={styles.warpHeaderTitle}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text>{contentCollectionList.length} thành viên</Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.navigate('Collection');
            setStatusEditName(false);
            setCheckedList([]);
          }}>
          <Image source={require('../../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        {editName === true ? (
          <TouchableOpacity
            style={styles.delButton}
            onPress={() => {
              deleteContactCollection();
              setCheckedList([]);
            }}>
            <Text style={styles.delete}>Delete ({checkedList.length})</Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>

      <FlatList
        style={{backgroundColor: 'white'}}
        data={contentCollectionList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.bottomButton}>
        <TouchableOpacity
          style={styles.valueBotBut}
          onPress={() => {
            navigation.navigate('AddContact');
            setStatusEditName(false);
            setCheckedList([]);
          }}>
          <Image source={require('../../../assets/icons/Addcontact.png')} />
          <Text style={styles.textBottomButton}>Add contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.valueBotBut}
          onPress={() => {
            setStatusEditName(!editName);
            setCheckedList([]);
          }}>
          <Image source={require('../../../assets/icons/editName.png')} />
          <Text style={styles.textBottomButton}>Edit name</Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
  },
  backButton: {
    position: 'absolute',
    marginLeft: 10,
  },
  warpHeaderTitle: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  delButton: {
    position: 'absolute',
    marginLeft: 300,
  },
  delete: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '600',
    color: '#ff4a4a',
  },
  per: {
    flexDirection: 'row',
    marginLeft: 15,
    height: 55,
    alignItems: 'center',
  },
  warpInfor: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    marginRight: 35,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  infor: {
    justifyContent: 'space-evenly',
  },
  name: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  bottomButton: {
    backgroundColor: '#1e62be',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
  },
  textBottomButton: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    color: 'white',
  },
  valueBotBut: {
    alignItems: 'center',
  },
  checkBox: {
    width: 25,
  },
});
