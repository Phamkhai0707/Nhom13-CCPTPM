import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const MessengerItem = props => {
  const {onPress} = props;
  const {avatar, isSender, message, timeStamp} = props.item;
  return (
    <View>
      {isSender === true ? (
        <TouchItem style={{flexDirection: 'row-reverse'}} onPress={onPress}>
          <Image style={{marginLeft: 12, marginRight: 12}} source={avatar} />
          <MessageWrapper
            style={{marginEnd: 100, flexDirection: 'row-reverse'}}>
            <MessageText
              style={{
                color: 'black',
                fontSize: 16,
                paddingHorizontal: 7,
                paddingVertical: 10,
              }}>
              {message}
            </MessageText>
          </MessageWrapper>
        </TouchItem>
      ) : (
        <TouchItem style={{flexDirection: 'row'}} onPress={onPress}>
          <Image style={{marginLeft: 12, marginRight: 12}} source={avatar} />
          <MessageWrapper style={{marginEnd: 100, flexDirection: 'row'}}>
            <MessageText
              style={{
                color: 'black',
                fontSize: 16,
                paddingHorizontal: 7,
                paddingVertical: 10,
              }}>
              {message}
            </MessageText>
          </MessageWrapper>
        </TouchItem>
      )}
    </View>
  );
};

const TouchItem = styled(TouchableOpacity)`
  margin-top: 10px;
`;

const MessageWrapper = styled(View)`
  background-color: #d7f9fa;
  border-radius: 12px;
  border-color: #ddd;
  elevation: 3;
`;

const MessageText = styled(Text)``;
