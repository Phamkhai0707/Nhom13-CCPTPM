import React from "react";
import styled from "styled-components";
import { Image } from "react-native";
// import {useNavigation} from '@react-navigation/native';
export default function Login() {
  // const navigation = useNavigation();
  return (
    <WrapScreen>
      <Logo1>
        <Image source={require("../../assets/images/logo1.png")} />
      </Logo1>
      <Logo2>
        <Image source={require("../../assets/images/logo2.png")} />
      </Logo2>
      <Text1>Group 13</Text1>
      <Text2>
        Ứng dụng liên lạc & chats dành cho sinh viên
      </Text2>
      <IconLoading>
        <Image source={require("../../assets/icons/iconLoading.png")} />
      </IconLoading>
      <Text3>Bạn chưa đăng nhập</Text3>
      <Button1>
        <Text4>ĐĂNG NHẬP</Text4>
      </Button1>
      <Button2>
        <Text5>ĐĂNG KÝ</Text5>
      </Button2>
    </WrapScreen>
  );
}
const WrapScreen = styled.View`
  align-items: center;
`;
const Logo1 = styled.View`
  top: 50px;
`;
const Logo2 = styled.View`
  position: absolute;
  top: 100px;
`;
const Text1 = styled.Text`
  position: absolute;
  text-align: center;
  width: 182px;
  height: 35px;
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
  top: 300px;
`;
const Text3 = styled.Text`
  position: absolute;
  width: 140px;
  height: 20px;
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
