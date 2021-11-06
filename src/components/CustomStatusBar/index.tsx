import {ThemeContext} from '@contexts/ThemeProvider';
import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';

const CustomStatusBar = () => {
  const {
    colors: {background},
  } = useTheme();
  const {theme} = useContext(ThemeContext);
  const statusBarStyle = theme === 'light' ? 'dark-content' : 'light-content';

  return <StatusBar backgroundColor={background} barStyle={statusBarStyle} />;
};

export {CustomStatusBar};
