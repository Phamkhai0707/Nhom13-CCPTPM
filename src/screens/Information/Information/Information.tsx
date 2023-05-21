import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {detailContactSelector} from '../../../Redux/Selectors';
import {contactSlide} from '../../Home/Contact/ContactSlide';
import { IC_ARROW, IC_CHANGEAVATAR, IC_FEATURE1, IC_FEATURE2, IC_FEATURE3, IC_FEATURE4 } from '../../../assets/type';

export default function Information() {
  const navigation = useNavigation();
  const [num, setNumber] = useState('');
  const detailContact = useSelector(detailContactSelector);
  const dispatch = useDispatch();
  const deleteContact = () => {
    dispatch(contactSlide.actions.deleteContact(detailContact.id));
  };
  const confirm = () => {
    Alert.alert('Confirm', 'Bạn thực sự muốn xóa liên hệ này', [
      {
        text: 'Cancel',
        // onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteContact();
          navigation.goBack();
        },
        // onPress: () => console.log('OK Pressed')
      },
    ]);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <Image source={IC_ARROW} />
          </BackButton>
          <EditButton onPress={() => navigation.navigate('EditInformation')}>
            <TextEdit> Edit </TextEdit>
          </EditButton>
        </Header>
        <BoxAvata>
          <TouchableOpacity>
            <Avata source={detailContact.imageAvata} />
          </TouchableOpacity>
          <ChangeAvata>
            <Image source={IC_CHANGEAVATAR} />
          </ChangeAvata>
          <Text1>{detailContact.fullName}</Text1>
          <Text2>{detailContact.company}</Text2>
          <Feature>
            <AloneFeature>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `tel:${detailContact.phone.find(e => e !== undefined)}`,
                  )
                }>
                <Image
                  source={IC_FEATURE1}
                />
              </TouchableOpacity>
              <Text3>Call</Text3>
            </AloneFeature>
            <AloneFeature>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `sms:${detailContact.phone.find(e => e !== undefined)}`,
                  )
                }>
                <Image
                  source={IC_FEATURE2}
                />
              </TouchableOpacity>
              <Text3>Messenger</Text3>
            </AloneFeature>
            <AloneFeature>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.google.com/')}>
                <Image
                  source={IC_FEATURE3}
                />
              </TouchableOpacity>
              <Text3>Website</Text3>
            </AloneFeature>
            <AloneFeature>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`mailto:${detailContact.email}`)
                }>
                <Image
                  source={IC_FEATURE4}
                />
              </TouchableOpacity>
              <Text3>Sent Email</Text3>
            </AloneFeature>
          </Feature>
        </BoxAvata>
        <Infor>
          <Box1
            onPress={() =>
              Linking.openURL(
                `tel:${detailContact.phone.find(e => e !== undefined)}`,
              )
            }>
            <Text4>Điện thoại</Text4>
            <Text5>{detailContact.phone.find(e => e !== undefined)}</Text5>
          </Box1>
          <Box2>
            <Note
              onChangeText={setNumber}
              value={num}
              placeholder={'Ghi chú'}
              placeholderTextColor={'#000'}
            />
          </Box2>
          <Box3
            onPress={() =>
              Linking.openURL(
                `sms:${detailContact.phone.find(e => e !== undefined)}`,
              )
            }>
            <Text4>Gửi tin nhắn</Text4>
          </Box3>
          <Box3 onPress={() => confirm()}>
            <TextDelete>Xóa người gọi</TextDelete>
          </Box3>
        </Infor>
      </View>
    </TouchableWithoutFeedback>
  );
}
const Header = styled.View`
  width: 100%;
  height: 45px;
  background-color: #f3f7fb;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const BackButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
const EditButton = styled.TouchableOpacity`
  margin-right: 10px;
`;
const TextEdit = styled.Text`
  font-family: roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #1e62be;
`;
const BoxAvata = styled.View`
  align-items: center;
  background-color: #f3f7fb;
`;
const Avata = styled.Image`
  margin-top: 20px;
  width: 100px;
  height: 100px;
`;
const ChangeAvata = styled.TouchableOpacity`
  top: -28px;
  left: 30px;
`;
const Text1 = styled.Text`
  top: -10px;
  color: #000;
  font-family: roboto;
  font-style: normal;
  font-size: 19px;
  font-weight: 800;
`;
const Text2 = styled.Text`
  top: -10px;
  font-family: Roboto;
  font-style: normal;
`;
const Feature = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;
const AloneFeature = styled.View`
  margin-horizontal: 15px;
  align-items: center;
`;
const Text3 = styled.Text`
  margin-top: 8px;
  margin-bottom: 15px;
  color: #1e62be;
  font-family: roboto;
  font-style: normal;
  font-size: 12px;
`;
const Infor = styled.View`
  align-items: center;
  height: 100%;
  background-color: white;
`;
const Text4 = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  color: #000;
`;
const Text5 = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  color: #1e62be;
`;
const Box1 = styled.TouchableOpacity`
  justify-content: space-evenly;
  width: 90%;
  height: 70px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;
const Box2 = styled.TouchableOpacity`
  justify-content: space-evenly;
  width: 90%;
  height: 80px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;
const Note = styled.TextInput`
  margin-top: 15px;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  color: #000;
`;
const Box3 = styled.TouchableOpacity`
  justify-content: space-evenly;
  width: 90%;
  height: 45px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;
const TextDelete = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  color: #ff4a4a;
`;
