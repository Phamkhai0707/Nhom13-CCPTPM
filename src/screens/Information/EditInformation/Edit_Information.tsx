import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {detailContactSelector} from '../../../Redux/Selectors';
import {contactSlide} from '../../Home/Contact/ContactSlide';
import { IC_CHANGEAVATAR, IC_GREENPLUS, IC_REDMIMUS } from '../../../assets/type';

export default function NewContact() {
  const navigation = useNavigation();
  const detailContact = useSelector(detailContactSelector);
  const [addNumberPhone, setAddNumberPhone] = useState([
    ...detailContact.phone,
  ]);
  const [addEmail, setAddEmail] = useState([...detailContact.email]);
  const [addAddress, setAddAddress] = useState([...detailContact.address]);
  const [add4, setAdd4] = useState('true');
  const [avata, setAvata] = useState('');
  const [name, setName] = useState(detailContact.fullName);
  const [batch, setBatch] = useState(detailContact.batch);
  const [company, setCompany] = useState(detailContact.company);
  const [DoB, setDoB] = useState(detailContact.DoB);
  const dispatch = useDispatch();
  const chosePhotoOnLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setAvata(image.path);
    });
  };
  const takeAPhotoOnCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setAvata(image.path);
    });
  };
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
        imageAvata: avata,
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
          <Image source={IC_REDMIMUS} />
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
          <Image source={IC_REDMIMUS} />
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
          <Image source={IC_REDMIMUS} />
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
          <TouchableOpacity onPress={chosePhotoOnLibrary}>
            <AvataFlex source={detailContact.imageAvata} />
          </TouchableOpacity>
          <ChangeAvata onPress={takeAPhotoOnCamera}>
            <Image source={IC_CHANGEAVATAR} />
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
              <Image source={IC_GREENPLUS} />
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
              <Image source={IC_GREENPLUS} />
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
              <Image source={IC_GREENPLUS} />
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
                <Image source={IC_REDMIMUS} />
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
              <Image source={IC_GREENPLUS} />
            </TouchableOpacity>
            <Infor2> Thêm ngày sinh </Infor2>
          </WrapInfor3>
        </WrapInfor2>
      </ScrollView>
    </Background>
  );
}
const Background = styled.View`
  flex: 1;
  background-color: white;
`;
const Header = styled.View`
  flex-direction: row;
  height: 55px;
`;
const CancelButton = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 12px;
`;
const Cancel = styled.Text`
  font-family: roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;
const SaveButton = styled.TouchableOpacity`
  justify-content: center;
  margin-left: auto;
  margin-right: 12px;
`;
const Save = styled.Text`
  color: #1e62be;
  font-family: roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;
const Avata = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
`;
const AvataFlex = styled.Image`
  width: 100px;
  height: 100px;
`;
const ChangeAvata = styled.TouchableOpacity`
  margin-top: -30px;
  margin-left: 65px;
`;
const WrapInfor1 = styled.View`
  align-items: center;
`;
const Infor1 = styled.TextInput`
  width: 90%;
  height: 40px;
  font-family: roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;
const WrapInfor2 = styled.View`
  margin-top: 15px;
  align-items: center;
`;
const WrapInfor3 = styled.View`
  width: 90%;
  height: 45px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;
const Infor2 = styled.Text`
  margin-left: 12px;
  font-family: roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000;
`;
const Textinput = styled.TextInput`
  flex: 1;
  margin-left: 12px;
  font-family: roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #1e62be;
`;
const ListTextInput = styled.FlatList`
  width: 90%;
`;
