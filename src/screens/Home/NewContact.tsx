import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addNewContact} from '../../Redux/Actions';
export default function NewContact() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [add1, setAdd1] = useState();
  const [add2, setAdd2] = useState();
  const [add3, setAdd3] = useState();
  const [add4, setAdd4] = useState();
  const [name, setName] = useState();
  const [batch, setBatch] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [DoB, setDoB] = useState();
  const handlerName = name => {
    setName(name);
  };
  const handlerBatch = batch => {
    setBatch(batch);
  };
  const handlerCompany = company => {
    setCompany(company);
  };
  const handlerPhone = phone => {
    setPhone(phone);
  };
  const handlerEmail = email => {
    setEmail(email);
  };
  const handlerAddress = address => {
    setAddress(address);
  };
  const handlerDoB = DoB => {
    setDoB(DoB);
  };
  const handleAdd1 = add => {
    setAdd1(add);
  };
  const handleAdd2 = add => {
    setAdd2(add);
  };
  const handleAdd3 = add => {
    setAdd3(add);
  };
  const handleAdd4 = add => {
    setAdd4(add);
  };
  const handlerSaveNewContact = () => {
    dispatch(
      addNewContact({
        id: Date.now(),
        fullName: name,
        batch: batch,
        company: company,
        phone: phone,
        email: email,
        address: address,
        DoB: DoB,
        image: require('../../assets/images/per1.png'),
        imageAvata: require('../../assets/images/avatar01.png'),
      }),
    );
  };
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}> Hủy </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handlerSaveNewContact}>
          <Text style={styles.save}> Save </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.avata}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/defaultAvata.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.changeAvata}>
            <Image source={require('../../assets/icons/changeAvatar.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.warpInfor1}>
          <TextInput
            style={styles.infor1}
            value={name}
            onChangeText={value => handlerName(value)}
            placeholder="Họ"
          />
          <TextInput
            style={styles.infor1}
            value={batch}
            onChangeText={value => handlerBatch(value)}
            placeholder="Vị trí"
          />
          <TextInput
            style={styles.infor1}
            value={company}
            onChangeText={value => handlerCompany(value)}
            placeholder="Công ty"
          />
        </View>

        <View style={styles.warpInfor2}>
          {add1 === 'true' ? (
            <View style={styles.warpInfor3}>
              <TouchableOpacity
                onPress={() => {
                  handleAdd1('false');
                }}>
                <Image source={require('../../assets/icons/redMinus.png')} />
              </TouchableOpacity>
              <TextInput
                style={styles.textInput}
                value={phone}
                onChangeText={value => handlerPhone(value)}
              />
            </View>
          ) : (
            ''
          )}
          <View style={styles.warpInfor3}>
            <TouchableOpacity
              onPress={() => {
                handleAdd1('true');
              }}>
              <Image source={require('../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Text style={styles.infor2}> Thêm số điện thoại </Text>
          </View>
        </View>

        <View style={styles.warpInfor2}>
          {add2 === 'true' ? (
            <View style={styles.warpInfor3}>
              <TouchableOpacity
                onPress={() => {
                  handleAdd2('false');
                }}>
                <Image source={require('../../assets/icons/redMinus.png')} />
              </TouchableOpacity>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={value => handlerEmail(value)}
              />
            </View>
          ) : (
            ''
          )}
          <View style={styles.warpInfor3}>
            <TouchableOpacity
              onPress={() => {
                handleAdd2('true');
              }}>
              <Image source={require('../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Text style={styles.infor2}> Thêm email </Text>
          </View>
        </View>

        <View style={styles.warpInfor2}>
          {add3 === 'true' ? (
            <View style={styles.warpInfor3}>
              <TouchableOpacity
                onPress={() => {
                  handleAdd3('false');
                }}>
                <Image source={require('../../assets/icons/redMinus.png')} />
              </TouchableOpacity>
              <TextInput
                style={styles.textInput}
                value={address}
                onChangeText={value => handlerAddress(value)}
              />
            </View>
          ) : (
            ''
          )}
          <View style={styles.warpInfor3}>
            <TouchableOpacity
              onPress={() => {
                handleAdd3('true');
              }}>
              <Image source={require('../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Text style={styles.infor2}> Thêm địa chỉ </Text>
          </View>
        </View>

        <View style={styles.warpInfor2}>
          {add4 === 'true' ? (
            <View style={styles.warpInfor3}>
              <TouchableOpacity
                onPress={() => {
                  handleAdd4('false');
                }}>
                <Image source={require('../../assets/icons/redMinus.png')} />
              </TouchableOpacity>
              <TextInput
                style={styles.textInput}
                value={DoB}
                onChangeText={value => handlerDoB(value)}
              />
            </View>
          ) : (
            ''
          )}
          <View style={styles.warpInfor3}>
            <TouchableOpacity
              onPress={() => {
                handleAdd4('true');
              }}>
              <Image source={require('../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Text style={styles.infor2}> Thêm ngày sinh </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    height: 55,
  },
  cancelButton: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  cancel: {
    color: '#1e62be',
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
  },
  saveButton: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 12,
  },
  save: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
  },
  scroll: {},
  avata: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 130,
  },
  changeAvata: {
    marginTop: -30,
    marginLeft: 65,
  },
  warpInfor1: {
    alignItems: 'center',
  },
  infor1: {
    width: '90%',
    height: 40,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  warpInfor2: {
    marginTop: 15,
    alignItems: 'center',
  },
  warpInfor3: {
    width: '90%',
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  infor2: {
    marginLeft: 12,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    color: '#000',
  },
  textInput: {
    flex: 1,
    marginLeft: 12,
  },
});
