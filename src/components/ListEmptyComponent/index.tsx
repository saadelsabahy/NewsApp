import Spaces from '@constants/style/spaces';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

interface Props {
  iconSize?: number;
  emptyText?: string;
}
const EmptyList = ({iconSize, emptyText}: Props) => {
  const {
    colors: {primary},
  } = useTheme();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Icon name={'exclamation'} size={iconSize || 40} color={primary} />
      <Text children={emptyText || t('general:noData')} style={styles.text} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    letterSpacing: 1,
    marginVertical: Spaces.small,
    textTransform: 'capitalize',
  },
});

export {EmptyList};
