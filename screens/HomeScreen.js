import {Button} from 'react-native';
import React from 'react';

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      <Button
        title="HelpScreen"
        onPress={() => navigation.navigate('HelpScreen', {})}
      />
      <Button
        title="CounterScreen"
        onPress={() => navigation.navigate('Counter', {})}
      />
    </>
  );
};
