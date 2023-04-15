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
import {
  Header,
  BackButton,
  EditButton,
  TextEdit,
  BoxAvata,
  ChangeAvata,
  Text5,
  Text2,
  Text3,
  Text4,
  Text1,
  TextDelete,
  Avata,
  Feature,
  AloneFeature,
  Infor,
  Box3,
  Box2,
  Box1,
  Note,
} from './InformationStyled';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {detailContactSelector} from '../../../Redux/Selectors';
import {contactSlide} from '../../Home/Contact/ContactSlide';

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
            <Image source={require('../../../assets/icons/arrow.png')} />
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
            <Image source={require('../../../assets/icons/changeAvatar.png')} />
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
                  source={require('../../../assets/icons/iconFeature1.png')}
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
                  source={require('../../../assets/icons/iconFeature2.png')}
                />
              </TouchableOpacity>
              <Text3>Messenger</Text3>
            </AloneFeature>
            <AloneFeature>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.google.com/')}>
                <Image
                  source={require('../../../assets/icons/iconFeature3.png')}
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
                  source={require('../../../assets/icons/iconFeature4.png')}
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
