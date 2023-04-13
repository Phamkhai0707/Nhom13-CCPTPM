import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Information() {
  const navigation = useNavigation();
  const [num, setNumber] = useState('');
  const confirm = () => {
    Alert.alert('Confirm', 'Bạn thực sự muốn xóa liên hệ này', [
      {
        text: 'Cancel',
        // onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        // onPress: () => console.log('OK Pressed')
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/icons/arrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditInformation')}>
            <Text style={styles.textEdit}> Edit </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxAvatar}>
          <TouchableOpacity>
            <Image
              style={styles.avatar}
              source={require('../../assets/images/avatar.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.changeAvatar}>
            <Image source={require('../../assets/icons/changeAvatar.png')} />
          </TouchableOpacity>
          <Text style={styles.text1}>Nguyễn Tiến Nam</Text>
          <Text style={styles.text2}>UI/UX Design</Text>
          <View style={styles.feature}>
            <View style={styles.aloneFeature}>
              <TouchableOpacity onPress={() => Linking.openURL('tel:')}>
                <Image
                  source={require('../../assets/icons/iconFeature1.png')}
                />
              </TouchableOpacity>
              <Text style={styles.text3}>Call</Text>
            </View>
            <View style={styles.aloneFeature}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/iconFeature2.png')}
                />
              </TouchableOpacity>
              <Text style={styles.text3}>Messenger</Text>
            </View>
            <View style={styles.aloneFeature}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/iconFeature3.png')}
                />
              </TouchableOpacity>
              <Text style={styles.text3}>Website</Text>
            </View>
            <View style={styles.aloneFeature}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/iconFeature4.png')}
                />
              </TouchableOpacity>
              <Text style={styles.text3}>Sent Email</Text>
            </View>
          </View>
        </View>
        <View style={styles.infor}>
          <View style={styles.box1}>
            <Text style={styles.text4}>Điện thoại</Text>
            <Text style={styles.text5}>0977272160</Text>
          </View>
          <View style={styles.box2}>
            <TextInput
              style={styles.note}
              onChangeText={setNumber}
              value={num}
              placeholder={'Ghi chú'}
              placeholderTextColor={'#000'}
            />
          </View>
          <TouchableOpacity style={styles.box3}>
            <Text style={styles.text4}>Gửi tin nhắn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3} onPress={() => confirm()}>
            <Text style={styles.textDel}>Xóa người gọi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 45,
    backgroundColor: '#f3f7fb',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButton: {
    marginLeft: 10,
  },
  editButton: {
    marginRight: 10,
  },
  textEdit: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    color: '#1E62BE',
  },
  boxAvatar: {
    alignItems: 'center',
    backgroundColor: '#f3f7fb',
  },
  avatar: {
    marginTop: 20,
  },
  changeAvatar: {
    top: -28,
    left: 30,
  },
  text1: {
    top: -10,
    color: '#000',
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 19,
    fontWeight: '800',
  },
  text2: {
    top: -10,
    fontFamily: 'roboto',
    fontStyle: 'normal',
  },
  feature: {
    marginTop: 10,
    flexDirection: 'row',
  },
  aloneFeature: {
    marginHorizontal: 15,
    alignItems: 'center',
  },
  text3: {
    marginTop: 8,
    marginBottom: 15,
    color: '#1E62BE',
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 12,
  },
  infor: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  text4: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#000',
  },
  text5: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    color: '#1e62be',
  },
  box1: {
    justifyContent: 'space-evenly',
    width: '90%',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  box2: {
    justifyContent: 'space-evenly',
    width: '90%',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  note: {
    marginBottom: 15,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#000',
  },
  box3: {
    justifyContent: 'space-evenly',
    width: '90%',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textDel: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#ff4a4a',
  },
});
