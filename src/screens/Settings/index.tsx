import {CustomHeader} from '@components';
import {COLORS} from '@constants/style';
import {ThemeContext} from '@contexts/ThemeProvider';
import {useLanguage} from '@hooks';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {List, Switch, useTheme} from 'react-native-paper';

interface Props {}

const SettingsScreen = () => {
  const {
    colors: {primary},
  } = useTheme();
  const {t} = useTranslation();
  const {onChangeLanguage, selectedLanguage} = useLanguage();
  const {theme, updateTheme} = useContext(ThemeContext);
  const onToggleLanguage = () =>
    onChangeLanguage(selectedLanguage === 'en' ? 'ar' : 'en');

  const onToggleTheme = () => updateTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <View>
      <CustomHeader title={t('tabs:settings')} hideBack />
      <List.Item
        title={t('settings:arabic')}
        right={() => (
          <Switch
            value={selectedLanguage === 'ar'}
            color={primary}
            onValueChange={onToggleLanguage}
          />
        )}
        style={styles.listItem}
        titleStyle={styles.title}
      />
      <List.Item
        title={t('settings:darkTheme')}
        right={() => (
          <Switch
            value={theme === 'dark'}
            color={primary}
            onValueChange={onToggleTheme}
          />
        )}
        style={styles.listItem}
        titleStyle={styles.title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 0.4,
    borderColor: COLORS.GRAY,
  },
  title: {
    textTransform: 'capitalize',
  },
});

export {SettingsScreen};
