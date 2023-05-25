import React, {useCallback, useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
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
  const [indexPhone, setIndexPhone] = useState();
  const handleAddNumberPhone = () => {
    setAddNumberPhone([...addNumberPhone, '']);
  };
  const changeNumberPhone = (phone, index) => {
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
  const handleAdd4 = (add: any) => {
    setAdd4(add);
  };
  const handlerName = (name: any) => {
    setName(name);
  };
  const handlerBatch = (batch: any) => {
    setBatch(batch);
  };
  const handlerCompany = (company: any) => {
    setCompany(company);
  };
  const handlerDoB = (DoB: any) => {
    setDoB(DoB);
  };
  const renderItemPhone = ({item, index}: {item: any; index: any}) => {
    setIndexPhone(index);
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
  const renderItemEmail = ({item, index}: {item: any; index: any}) => {
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
  const renderItemAddress = ({item, index}: {item: any; index: any}) => {
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
const Background = styled(View)`
  flex: 1;
  background-color: white;
`;
const Header = styled(View)`
  flex-direction: row;
  height: 55px;
`;
const CancelButton = styled(TouchableOpacity)`
  justify-content: center;
  margin-left: 12px;
`;
const Cancel = styled(Text)`
  color: #1e62be;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;
const SaveButton = styled(TouchableOpacity)`
  justify-content: center;
  margin-left: auto;
  margin-right: 12px;
`;
const Save = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;
const Avata = styled(View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
`;
const ChangeAvata = styled(TouchableOpacity)`
  margin-top: -30px;
  margin-left: 65px;
`;
const WrapInfor1 = styled(View)`
  align-items: center;
`;
const Infor1 = styled(TextInput)`
  width: 90%;
  height: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;
const WrapInfor2 = styled(View)`
  margin-top: 15px;
  align-items: center;
`;
const WrapInfor3 = styled(View)`
  width: 90%;
  height: 45px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;
const Infor2 = styled(Text)`
  margin-left: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000;
`;
const ListPhoneNumber = styled(FlatList)`
  width: 90%;
`;
const Textinput = styled(TextInput)`
  flex: 1;
  margin-left: 12px;
`;
