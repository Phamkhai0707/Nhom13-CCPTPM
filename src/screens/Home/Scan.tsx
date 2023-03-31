import React, {useState} from 'react';
import {Button, LogBox, Text, TextInput, View} from 'react-native';
import {render} from '@testing-library/react';

export default function Scan() {
  const [count, upCount] = useState(0);
  const handleCount = count => {
    upCount(count);
    // console.log('check', count);
  };
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}>
        {count}
      </Text>
      <Button
        title="count"
        onPress={() => {
          handleCount(count + 1);
        }}
      />
      <Button
        title="reset"
        onPress={() => {
          handleCount(0);
        }}
      />
    </View>
  );
}
