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
import {contentCollectionSelector} from '../../Redux/Selectors';
import {useSelector} from 'react-redux';
export default function ChildCollection() {
  const navigation = useNavigation();
  const [editName, setStatusEditName] = useState(false);
  const contentCollectionList = useSelector(contentCollectionSelector);
  const Item = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.per}
        onPress={() => navigation.navigate('Information')}>
        <Image source={item.imageAvata} />
        <View style={styles.warpInfor}>
          <View style={styles.infor}>
            <Text style={styles.name}> {item.fullName} </Text>
            <Text> {item.phone} </Text>
          </View>
          {editName === true ? (
            <TouchableOpacity>
              {item.isChecked === false ? (
                <Image
                  source={require('../../assets/icons/checkBoxfalse.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/icons/checkBoxTrue.png')}
                />
              )}
            </TouchableOpacity>
          ) : (
            ''
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
          <Text style={styles.headerTitle}>General</Text>
          <Text>{contentCollectionList.length} thành viên</Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Collection')}>
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        {editName === true ? (
          <TouchableOpacity style={styles.delButton}>
            <Text style={styles.delete}>Delete ()</Text>
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
          onPress={() => navigation.navigate('AddContact')}>
          <Image source={require('../../assets/icons/Addcontact.png')} />
          <Text style={styles.textBottomButton}>Add contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.valueBotBut}
          onPress={() => setStatusEditName(!editName)}>
          <Image source={require('../../assets/icons/editName.png')} />
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
    marginLeft: 305,
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
