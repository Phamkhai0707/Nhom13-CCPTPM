import React from 'react';
import styled from 'styled-components';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  return (
    <View>
      <Logo1>
        <Image source={require('../../assets/images/logo1.png')} />
      </Logo1>
      <Logo2>
        <Image source={require('../../assets/images/logo2.png')} />
      </Logo2>
      <Text1>Base Contact</Text1>
      <Text2>
        Giải pháp quản lý công việc & dự án toàn diện cho doanh nghiệp 4.0
      </Text2>
      <IconLoading>
        <Image source={require('../../assets/icons/iconLoading.png')} />
      </IconLoading>
      <Text3>Bạn chưa đăng nhập</Text3>
      <Button1 onPress={() => navigation.navigate('MyDrawer')}>
        <Text4>ĐĂNG NHẬP BẰNG BASE ACCOUNT</Text4>
      </Button1>
      <Button2 onPress={() => navigation.navigate('MyDrawer')}>
        <Text5>ĐĂNG NHẬP THỦ CÔNG</Text5>
      </Button2>
    </View>
  );
}
const Logo1 = styled.View`
  top: 50px;
  left: 99px;
`;
const Logo2 = styled.Text`
  top: -95px;
  left: 15px;
`;
const Text1 = styled.Text`
  position: absolute;
  width: 182px;
  height: 35px;
  left: 104px;
  top: 356px;
  color: rgba(30, 98, 190, 1);
  font-family: roboto;
  font-style: normal;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.12px;
`;
const Text2 = styled.Text`
  position: absolute;
  width: 268px;
  height: 36px;
  left: 60px;
  top: 398px;
  font-family: roboto;
  font-style: normal;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.12px;
  color: #333333;
`;
const IconLoading = styled.View`
  top: 90px;
  left: 185px;
`;
const Text3 = styled.Text`
  position: absolute;
  width: 140px;
  height: 20px;
  left: 132px;
  top: 560px;
  font-family: roboto;
  font-style: italic;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.24px;
  color: #828282;
`;
const Button1 = styled.TouchableOpacity`
  position: absolute;
  width: 300px;
  height: 48px;
  left: 48px;
  top: 605px;
  align-items: center;
  padding: 10px;
  background-color: #1e62be;
  border-radius: 4px;
`;
const Text4 = styled.Text`
  position: absolute;
  top: 14px;
  font-family: roboto;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  color: #ffffff;
`;
const Button2 = styled.TouchableOpacity`
  position: absolute;
  width: 300px;
  height: 48px;
  left: 48px;
  top: 668px;
  align-items: center;
  background-color: white;
  border-color: #1e62be;
  border-width: 2px;
  border-radius: 4px;
`;
const Text5 = styled.Text`
  position: absolute;
  top: 12px;
  font-family: roboto;
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  color: #1e62be;
`;
