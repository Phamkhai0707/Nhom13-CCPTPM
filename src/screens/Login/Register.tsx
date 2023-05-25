import {memo, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const Register = memo(function () {
  const [email, onChangeEmail] = useState<string>('');
  const [pass, onChangePass] = useState<string>('');
  const [rePass, onChangeRePass] = useState<string>('');
  return (
    <ScreenWrapper>
      <HeaderWrapper>
        <HeaderText>Already have an Account?</HeaderText>
        <SImage source={require('../../assets/icons/Register.png')} />
      </HeaderWrapper>
      <InputWrapper>
        <SView>
          <Text style={{color: '#1e62be'}}>Email:</Text>
          <STextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Example@gmail.com"
          />
          <SText>Password:</SText>
          <STextInput
            onChangeText={onChangePass}
            value={pass}
            secureTextEntry={true}
            placeholder="Enter your password"
          />
          <SText>Retype password:</SText>
          <STextInput
            onChangeText={onChangeRePass}
            value={rePass}
            secureTextEntry={true}
            placeholder="Re-enter your password"
          />
        </SView>
        <RegisterTouch>
          <Ssubmit>Register</Ssubmit>
        </RegisterTouch>
      </InputWrapper>
      <View style={{alignItems: 'center', width: '100%'}}>
        <FooterWrapper>
          <Line />
          <Text style={{color: 'white', padding: 10}}>Use other methods?</Text>
          <Line />
        </FooterWrapper>
        <FooterIcon>
          <TouchableOpacity>
            <Sicon source={require('../../assets/icons/facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SiconGoogle source={require('../../assets/icons/google.png')} />
          </TouchableOpacity>
        </FooterIcon>
      </View>
    </ScreenWrapper>
  );
});

const ScreenWrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: #1e62be;
`;

const HeaderWrapper = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const SImage = styled(Image)`
  height: 130px;
  width: 130px;
  tint-color: #ffffff;
`;

const HeaderText = styled(Text)`
  width: 50%;
  font-size: 25px;
  font-weight: 700;
  color: white;
`;

const InputWrapper = styled(View)`
  width: 95%;
  border-radius: 15px;
  padding: 10px;
  align-items: center;
  background-color: white;
`;

const SView = styled(View)`
  width: 95%;
`;

const STextInput = styled(TextInput)`
  border-bottom-width: 1;
  border-color: #1e62be;
  color: black;
  height: 40px;
`;

const SText = styled(Text)`
  margin-top: 30px;
  color: #1e62be;
`;

const RegisterTouch = styled(TouchableOpacity)`
  border-radius: 45px;
  width: 50%;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  background-color: #777677;
`;

const Ssubmit = styled(Text)`
  font-size: 16px;
  color: white;
`;

const FooterWrapper = styled(View)`
  align-items: center;
  flex-direction: row;
`;

const Line = styled(View)`
  height: 1px;
  width: 25%;
  background-color: white;
`;

const FooterIcon = styled(View)`
  flex-direction: row;
  width: 20%;
  justify-content: space-between;
`;

const Sicon = styled(Image)`
  tint-color: white;
  height: 30px;
  width: 30px;
`;

const SiconGoogle = styled(Image)`
  tint-color: white;
  height: 30.6px;
  width: 30px;
`;
