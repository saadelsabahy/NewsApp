import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const PRIMARY: string = '#1DA1F2';
const WHITE: string = '#FFFFFF';
const BLACK: string = '#000000';
const LIGHT_COLOR: string = '#F8F8FA';
const Dark_COLOR: string = '#14171A';
const GRAY: string = '#657786';
const GRAY_LIGHT: string = '#AAB8C2';
const RED: string = '#f00';

const defaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: PRIMARY,
    text: BLACK,
    background: LIGHT_COLOR,
  },
  themeMode: 'light',
};

const darkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: PRIMARY,
    text: WHITE,
    surface: Dark_COLOR,
    background: Dark_COLOR,
  },
  themeMode: 'dark',
};
const Colors = {
  GRAY,
  RED,
  defaultTheme,
  darkTheme,
};

export default Colors;
