import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  Background,
  Header,
  CancelButton,
  Cancel,
  SaveButton,
  Save,
  Avata,
  ChangeAvata,
  WrapInfor1,
  WrapInfor2,
  WrapInfor3,
  Infor1,
  Infor2,
  ListPhoneNumber,
  Textinput,
} from './NewContactStyled';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {contactSlide} from '../Contact/ContactSlide';
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
  const renderItemPhone = ({item, index}) => {
    return (
      <WrapInfor3>
        <TouchableOpacity
          onPress={() => {
            deletePhoneNumber(index);
          }}>
          <Image source={require('../../../assets/icons/redMinus.png')} />
        </TouchableOpacity>
        <Textinput
          keyboardType={'numeric'}
          value={item}
          onChangeText={value => {
            changeNumberPhone(value, index);
          }}
        />
      </WrapInfor3>
    );
  };
  const renderItemEmail = ({item, index}) => {
    return (
      <WrapInfor3>
        <TouchableOpacity
          onPress={() => {
            deleteEmail(index);
          }}>
          <Image source={require('../../../assets/icons/redMinus.png')} />
        </TouchableOpacity>
        <Textinput
          value={item}
          onChangeText={value => {
            changeEmail(value, index);
          }}
        />
      </WrapInfor3>
    );
  };
  const renderItemAddress = ({item, index}) => {
    return (
      <WrapInfor3>
        <TouchableOpacity
          onPress={() => {
            deleteAddress(index);
          }}>
          <Image source={require('../../../assets/icons/redMinus.png')} />
        </TouchableOpacity>
        <Textinput
          value={item}
          onChangeText={value => {
            changeAddress(value, index);
          }}
        />
      </WrapInfor3>
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
        image: require('../../../assets/images/per1.png'),
        imageAvata: require('../../../assets/images/avatar01.png'),
      }),
    );
  };
  return (
    <Background>
      <Header>
        <CancelButton onPress={() => navigation.goBack()}>
          <Cancel> Hủy </Cancel>
        </CancelButton>
        <SaveButton
          onPress={() => {
            handlerSaveNewContact();
            navigation.goBack();
            refresh();
          }}>
          <Save> Save </Save>
        </SaveButton>
      </Header>
      <ScrollView>
        <Avata>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/defaultAvata.png')}
            />
          </TouchableOpacity>
          <ChangeAvata>
            <Image source={require('../../../assets/icons/changeAvatar.png')} />
          </ChangeAvata>
        </Avata>
        <WrapInfor1>
          <Infor1
            value={name}
            onChangeText={value => handlerName(value)}
            placeholder="Họ"
          />
          <Infor1
            value={batch}
            onChangeText={value => handlerBatch(value)}
            placeholder="Vị trí"
          />
          <Infor1
            value={company}
            onChangeText={value => handlerCompany(value)}
            placeholder="Công ty"
          />
        </WrapInfor1>

        <WrapInfor2>
          <ListPhoneNumber data={addNumberPhone} renderItem={renderItemPhone} />
          <WrapInfor3>
            <TouchableOpacity
              onPress={() => {
                handleAddNumberPhone();
              }}>
              <Image source={require('../../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Infor2> Thêm số điện thoại </Infor2>
          </WrapInfor3>
        </WrapInfor2>

        <WrapInfor2>
          <ListPhoneNumber data={addEmail} renderItem={renderItemEmail} />
          <WrapInfor3>
            <TouchableOpacity
              onPress={() => {
                handleAddEmail();
              }}>
              <Image source={require('../../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Infor2> Thêm email </Infor2>
          </WrapInfor3>
        </WrapInfor2>

        <WrapInfor2>
          <ListPhoneNumber data={addAddress} renderItem={renderItemAddress} />
          <WrapInfor3>
            <TouchableOpacity
              onPress={() => {
                handleAddAddress();
              }}>
              <Image source={require('../../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Infor2> Thêm địa chỉ </Infor2>
          </WrapInfor3>
        </WrapInfor2>

        <WrapInfor2>
          {add4 === 'true' ? (
            <WrapInfor3>
              <TouchableOpacity
                onPress={() => {
                  handleAdd4('false');
                }}>
                <Image source={require('../../../assets/icons/redMinus.png')} />
              </TouchableOpacity>
              <Textinput
                value={DoB}
                onChangeText={value => handlerDoB(value)}
              />
            </WrapInfor3>
          ) : (
            ''
          )}
          <WrapInfor3>
            <TouchableOpacity
              onPress={() => {
                handleAdd4('true');
              }}>
              <Image source={require('../../../assets/icons/greenPlus.png')} />
            </TouchableOpacity>
            <Infor2> Thêm ngày sinh </Infor2>
          </WrapInfor3>
        </WrapInfor2>
      </ScrollView>
    </Background>
  );
}
