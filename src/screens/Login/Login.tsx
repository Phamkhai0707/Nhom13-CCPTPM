import React from 'react';
import {
  Logo1,
  Logo2,
  Text1,
  Text3,
  Text4,
  Text5,
  Text2,
  Button2,
  Button1,
  IconLoading,
} from './LoginStyled';
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
