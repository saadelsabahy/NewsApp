import {NoInternet} from '@components';
import {COLORS, FONTS} from '@constants/style';
import {NetworkContext} from '@contexts';
import {ThemeContext} from '@contexts/ThemeProvider';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {configureFonts, ThemeProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStack from './App.stack';
interface Props {}
const fonts = configureFonts({
  ios: FONTS,
  android: FONTS,
  default: FONTS,
});
const config = {
  screens: {
    Tabs: {
      initialRouteName: 'News',
      screens: {News: 'news', Settings: 'settings'},
    },

    Details: {
      path: 'details/:id',
      parse: {
        id: (newsId: string) => newsId,
      },
    },
  },
};
const linking = {
  prefixes: ['newsapp://app'],
  config,
};
const AppNavigation = () => {
  const {isOnline} = useContext(NetworkContext);
  const {theme, isLoadingTheme} = useContext(ThemeContext);
  const APP_THEME = theme === 'light' ? COLORS.defaultTheme : COLORS.darkTheme;

  useEffect(() => {
    !isLoadingTheme && RNBootSplash.hide({fade: true});
  }, [isLoadingTheme]);

  return (
    <ThemeProvider theme={{...APP_THEME, fonts}}>
      {!isOnline && <NoInternet />}
      <SafeAreaProvider>
        <NavigationContainer
          theme={APP_THEME}
          linking={linking}
          /* fallback={<Text>{t('general:loading')}</Text>} */
        >
          <AppStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default AppNavigation;
