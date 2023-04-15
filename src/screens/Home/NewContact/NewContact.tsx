import React, {useState} from 'react';
import {
  FlatList,
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
import {contactSlide} from './Contact/ContactSlide';
export default function NewContact() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [addNumberPhone, setAddNumberPhone] = useState([]);
  const [addEmail, setAddEmail] = useState([]);
  const [addAddress, setAddAddress] = useState([]);
  const [add4, setAdd4] = useState();
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [company, setCompany] = useState('');
  const [DoB, setDoB] = useState('');
  const handleAddNumberPhone = () => {
    setAddNumberPhone([...addNumberPhone, '']);
  };
  const changeNumberPhone = (phone, index) => {
    // const update = [...addNumberPhone];
    // console.log('update', update);
    // update[index] = phone;
    setAddNumberPhone(value => [
      ...value.map((item, i) => {
        if (index === i) {
          return phone;
        }
        return item;
      }),
    ]);
  };
  const deletePhoneNumber = id => {
    const newList = addNumberPhone
      .map((value, index) => (index === id ? (value = null) : value))
      .filter(value => value !== null);
    setAddNumberPhone([...newList]);
  };
  const handleAddEmail = () => {
    setAddEmail([...addEmail, '']);
  };
  const changeEmail = (email, index) => {
    const update = [...addEmail];
    update[index] = email;
    setAddEmail([...update]);
  };
  const deleteEmail = id => {
    const newList = addEmail
      .map((value, index) => (index === id ? (value = null) : value))
      .filter(value => value !== null);
    setAddEmail([...newList]);
  };
  const handleAddAddress = () => {
    setAddAddress([...addAddress, '']);
  };
  const changeAddress = (value, index) => {
    const update = [...addAddress];
    update[index] = value;
    setAddAddress([...update]);
  };
  const deleteAddress = id => {
    const newList = addAddress
      .map((value, index) => (index === id ? (value = null) : value))
      .filter(value => value !== null);
    setAddAddress([...newList]);
  };
  const handleAdd4 = add => {
    setAdd4(add);
  };
  const handlerName = name => {
    setName(name);
  };
  const handlerBatch = batch => {
    setBatch(batch);
  };
  const handlerCompany = company => {
    setCompany(company);
  };
  const handlerDoB = DoB => {
    setDoB(DoB);
  };
  // const ItemPhone = ({item, index}) => {
  //   return (
  //     <View style={styles.warpInfor3}>
  //       <TouchableOpacity
  //         onPress={() => {
  //           deletePhoneNumber(index);
  //         }}>
  //         <Image source={require('../../assets/icons/redMinus.png')} />
  //       </TouchableOpacity>
  //       <TextInput
  //         style={styles.textInput}
  //         keyboardType={'numeric'}
  //         value={item}
  //         onChangeText={value => {
  //           changeNumberPhone(value, index);
  //         }}
  //       />
  //     </View>
  //   );
  // };
  const renderItemPhone = ({item, index}) => {
    return (
      <View style={styles.warpInfor3}>
        <TouchableOpacity
          onPress={() => {
            deletePhoneNumber(index);
          }}>
          <Image source={require('../../assets/icons/redMinus.png')} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          keyboardType={'numeric'}
          value={item}
          onChangeText={value => {
            changeNumberPhone(value, index);
          }}
        />
      </View>
    );
  };
  const renderItemEmail = ({item, index}) => {
    return (
      <View style={styles.warpInfor3}>
        <TouchableOpacity
          onPress={() => {
            deleteEmail(index);
          }}>
          <Image source={require('../../assets/icons/redMinus.png')} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          value={item}
          onChangeText={value => {
            changeEmail(value, index);
          }}
        />
      </View>
    );
  };
  const renderItemAddress = ({item, index}) => {
    return (
      <View style={styles.warpInfor3}>
        <TouchableOpacity
          onPress={() => {
            deleteAddress(index);
          }}>
          <Image source={require('../../assets/icons/redMinus.png')} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          value={item}
          onChangeText={value => {
            changeAddress(value, index);
          }}
        />
      </View>
    );
  };
  const refresh = () => {
    setAddNumberPhone([]);
    setAddAddress([]);
    setAddEmail([]);
    setAdd4(false);
    setName('');
    setCompany('');
    setBatch('');
    setDoB('');
  };
  const handlerSaveNewContact = () => {
    dispatch(
      contactSlide.actions.addInfor({
        id: Date.now(),
        fullName: name,
        batch: batch,
        company: company,
        phone: addNumberPhone,
        email: addEmail,
        address: addAddress,
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
          onPress={() => {
            handlerSaveNewContact();
            navigation.goBack();
            refresh();
          }}>
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
          <FlatList
            style={styles.listPhoneNumber}
            data={addNumberPhone}
            renderItem={renderItemPhone}
          />
          <View style={styles.warpInfor3}>
            <TouchableOpacity
              onPress={() => {
                handleAddNumberPhone();
              }}>
              <Image source={require('../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Text style={styles.infor2}> Thêm số điện thoại </Text>
          </View>
        </View>

        <View style={styles.warpInfor2}>
          <FlatList
            style={styles.listPhoneNumber}
            data={addEmail}
            renderItem={renderItemEmail}
          />
          <View style={styles.warpInfor3}>
            <TouchableOpacity
              onPress={() => {
                handleAddEmail();
              }}>
              <Image source={require('../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Text style={styles.infor2}> Thêm email </Text>
          </View>
        </View>

        <View style={styles.warpInfor2}>
          <FlatList
            style={styles.listPhoneNumber}
            data={addAddress}
            renderItem={renderItemAddress}
          />
          <View style={styles.warpInfor3}>
            <TouchableOpacity
              onPress={() => {
                handleAddAddress();
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
  listPhoneNumber: {
    width: '90%',
  },
  textInput: {
    flex: 1,
    marginLeft: 12,
  },
});
