import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Appearance, ColorSchemeName} from 'react-native';

interface Props {
  children: React.ReactNode;
}
type ITheme = 'light' | 'dark';
interface ContextType {
  theme: ITheme;
  isLoadingTheme: boolean;
  updateTheme: (currentTheme: ITheme) => void;
}
export const ThemeContext = React.createContext<ContextType>({} as ContextType);
const ThemeProvider = ({children}: Props) => {
  const colorScheme: ColorSchemeName = Appearance.getColorScheme();
  const [theme, setTheme] = useState<ITheme>(colorScheme || 'light');
  const [isLoadingTheme, setIsLoadingTheme] = useState(true);

  const findOldTheme = async () => {
    const themeMode = await AsyncStorage.getItem('themeMode');
    if (themeMode !== null) {
      themeMode === 'light' ? setTheme('light') : setTheme('dark');
      setIsLoadingTheme(false);
    }
    setIsLoadingTheme(false);
  };

  useEffect(() => {
    findOldTheme();
  }, []);

  const updateTheme = (currentThemeMode: ITheme) => {
    const newTheme = currentThemeMode === 'light' ? 'light' : 'dark';
    setTheme(newTheme);
    AsyncStorage.setItem('themeMode', newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, isLoadingTheme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
