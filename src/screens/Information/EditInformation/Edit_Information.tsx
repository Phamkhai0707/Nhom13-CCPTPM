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
  AvataFlex,
  ChangeAvata,
  WrapInfor1,
  WrapInfor3,
  WrapInfor2,
  Infor2,
  Infor1,
  Textinput,
  ListTextInput,
} from './EditInformationStyled';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {detailContactSelector} from '../../../Redux/Selectors';
import {contactSlide} from '../../Home/Contact/ContactSlide';

export default function NewContact() {
  const navigation = useNavigation();
  const detailContact = useSelector(detailContactSelector);
  const [addNumberPhone, setAddNumberPhone] = useState([
    ...detailContact.phone,
  ]);
  const [addEmail, setAddEmail] = useState([...detailContact.email]);
  const [addAddress, setAddAddress] = useState([...detailContact.address]);
  const [add4, setAdd4] = useState('true');
  const [name, setName] = useState(detailContact.fullName);
  const [batch, setBatch] = useState(detailContact.batch);
  const [company, setCompany] = useState(detailContact.company);
  const [DoB, setDoB] = useState(detailContact.DoB);
  const dispatch = useDispatch();
  const handleAddNumberPhone = () => {
    setAddNumberPhone([...addNumberPhone, '']);
  };
  const changeNumberPhone = (phone, index) => {
    const update = [...addNumberPhone];
    update[index] = phone;
    setAddNumberPhone([...update]);
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
  const handleAdd4 = add => {
    setAdd4(add);
  };
  const saveEditContact = () => {
    dispatch(
      contactSlide.actions.editContact({
        id: detailContact.id,
        fullName: name,
        value: name,
        batch: batch,
        company: company,
        phone: addNumberPhone,
        email: addEmail,
        address: addAddress,
        DoB: DoB,
      }),
    );
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
  return (
    <Background>
      <Header>
        <CancelButton onPress={() => navigation.navigate('Information')}>
          <Cancel> Hủy </Cancel>
        </CancelButton>
        <SaveButton
          onPress={() => {
            navigation.navigate('Information');
            saveEditContact();
          }}>
          <Save> Save </Save>
        </SaveButton>
      </Header>
      <ScrollView>
        <Avata>
          <TouchableOpacity>
            <AvataFlex source={detailContact.imageAvata} />
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
          <ListTextInput data={addNumberPhone} renderItem={renderItemPhone} />
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
          <ListTextInput data={addEmail} renderItem={renderItemEmail} />
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
          <ListTextInput data={addAddress} renderItem={renderItemAddress} />
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
