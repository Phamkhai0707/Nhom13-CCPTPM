import React from 'react';
import styled from 'styled-components';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
} from '../../Firebase/firebase';

export default function Login() {
  const navigation = useNavigation();
  return (
    <WrapScreen>
      <Logo1>
        <Image source={require('../../assets/images/logo1.png')} />
      </Logo1>
      <Logo2>
        <Image source={require('../../assets/images/logo2.png')} />
      </Logo2>
      <Text1>Group 13</Text1>
      <Text2>Ứng dụng liên lạc dành cho sinh viên</Text2>
      <ButtonWrapper>
        <Button2 onPress={() => navigation.navigate('Register')}>
          <Text5>ĐĂNG KÝ</Text5>
        </Button2>
        <Button1 onPress={() => navigation.navigate('MyDrawer')}>
          <Text4>ĐĂNG NHẬP</Text4>
        </Button1>
        <Text3>Bạn chưa đăng nhập</Text3>
        <SImage source={require('../../assets/icons/iconLoading.png')} />
      </ButtonWrapper>
    </WrapScreen>
  );
}
const WrapScreen = styled.View`
  align-items: center;
  flex: 1;
`;
const Logo1 = styled.View`
  margin-top: 50px;
`;
const Logo2 = styled.View`
  position: absolute;
  margin-top: 100px;
`;
const Text1 = styled.Text`
  text-align: center;
  margin-top: 60px;
  color: rgba(30, 98, 190, 1);
  font-family: roboto;
  font-style: normal;
  font-size: 30px;
  font-weight: 700;
`;
const Text2 = styled.Text`
  font-family: roboto;
  margin-top: 15px;
  font-style: normal;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  color: #333333;
`;
const Text3 = styled.Text`
  margin-bottom: 15px;
  font-family: roboto;
  font-style: italic;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.24px;
  color: #828282;
`;

const SImage = styled(Image)`
  margin-bottom: 15px;
`;

const ButtonWrapper = styled(View)`
  flex: 1;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
`;

const Button1 = styled.TouchableOpacity`
  margin-bottom: 6px;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  background-color: #1e62be;
  border-radius: 4px;
`;
const Text4 = styled.Text`
  font-family: roboto;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  color: #ffffff;
`;
const Button2 = styled.TouchableOpacity`
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  background-color: white;
  border-color: #1e62be;
  border-width: 2px;
  border-radius: 4px;
`;
const Text5 = styled.Text`
  font-family: roboto;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #1e62be;
`;
