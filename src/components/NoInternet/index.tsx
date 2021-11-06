import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {COLORS} from '../../constants/style';
import {calcHeight, SCREEN_WIDTH} from '../../constants/style/sizes';

interface Props {}

const NoInternet = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={[styles.container, {minHeight: calcHeight(45)}]}>
      <Text style={[styles.text]}>{t('general:noInternet')}</Text>
    </SafeAreaView>
  );
};

export {NoInternet};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.RED,
  },
  text: {
    textTransform: 'capitalize',
  },
});
