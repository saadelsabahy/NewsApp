import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';

const CustomStatusBar = () => {
  const {
    colors: {background},
  } = useTheme();
  const statusBarStyle = false ? 'dark-content' : 'light-content';

  return <StatusBar backgroundColor={background} barStyle={statusBarStyle} />;
};

export {CustomStatusBar};
