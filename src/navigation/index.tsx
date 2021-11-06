import {NoInternet} from '@components';
import {COLORS, FONTS} from '@constants/style';
import {NetworkContext} from '@contexts';
import {ThemeContext} from '@contexts/ThemeProvider';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {configureFonts, ThemeProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStack from './App.stack';

interface Props {}
const fonts = configureFonts({
  ios: FONTS,
  android: FONTS,
  default: FONTS,
});
const AppNavigation = () => {
  const {isOnline} = useContext(NetworkContext);
  const {theme} = useContext(ThemeContext);
  const APP_THEME = theme === 'light' ? COLORS.defaultTheme : COLORS.darkTheme;
  return (
    <ThemeProvider theme={{...APP_THEME, fonts}}>
      {!isOnline && <NoInternet />}
      <SafeAreaProvider>
        <NavigationContainer theme={APP_THEME}>
          <AppStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default AppNavigation;
