import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <View style={styles.logo1}>
          <Image
            // style={{width: 200, height: 200}}
            source={require('../../assets/images/logo1.png')}
          />
        </View>
        <View style={styles.logo2}>
          <Image
            // style={{width: 375, height: 197}}
            source={require('../../assets/images/logo2.png')}
          />
        </View>
        <Text style={styles.text1}>Base Contact</Text>
        <Text style={styles.text2}>
          Giải pháp quản lý công việc & dự án toàn diện cho doanh nghiệp 4.0
        </Text>
        <View style={styles.iconLoading}>
          <Image
            // style={{width: 375, height: 197}}
            source={require('../../assets/icons/iconLoading.png')}
          />
        </View>
        <Text style={styles.text3}>Bạn chưa đăng nhập</Text>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('MyDrawer')}>
          <Text style={styles.text4}>ĐĂNG NHẬP BẰNG BASE ACCOUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('MyDrawer')}>
          <Text style={styles.text5}>ĐĂNG NHẬP THỦ CÔNG</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  logo1: {
    top: 50,
    left: 99,
  },
  logo2: {
    top: -95,
    left: 15,
  },
  text1: {
    position: 'absolute',
    width: 182,
    height: 35,
    left: 104,
    top: 356,

    color: 'rgba(30, 98, 190, 1)',
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 30,
    fontWeight: '700',
    // lineHeight: 35,
    letterSpacing: 0.12,
  },
  text2: {
    position: 'absolute',
    width: 268,
    height: 36,
    left: 60,
    top: 398,

    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '400',
    // lightHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.12,
    color: '#333333',
  },
  iconLoading: {
    top: 90,
    left: 185,
  },
  text3: {
    position: 'absolute',
    width: 140,
    height: 20,
    left: 132,
    top: 560,

    fontFamily: 'roboto',
    fontStyle: 'italic',
    fontSize: 15,
    fontWeight: 400,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#828282',
  },
  button1: {
    position: 'absolute',
    width: 300,
    height: 48,
    left: 48,
    top: 605,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1E62BE',
    borderRadius: 4,
  },
  text4: {
    position: 'absolute',
    top: 14,

    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '500',
    // lineHeight: 20,
    letterSpacing: -0.24,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  button2: {
    position: 'absolute',
    width: 300,
    height: 48,
    left: 48,
    top: 668,

    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#1E62BE',
    borderWidth: 2,
    borderRadius: 4,
  },
  text5: {
    position: 'absolute',
    top: 12,

    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    // lineHeight: 20,
    letterSpacing: -0.24,
    textTransform: 'uppercase',
    color: '#1E62BE',
  },
});
