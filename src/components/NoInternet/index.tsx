import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {COLORS} from '../../constants/style';
import {calcHeight, SCREEN_WIDTH} from '../../constants/style/sizes';

interface Props {}

const NoInternet = () => {
  return (
    <SafeAreaView style={[styles.container, {minHeight: calcHeight(45)}]}>
      <Text style={[styles.text]}>no internet connection ...</Text>
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
