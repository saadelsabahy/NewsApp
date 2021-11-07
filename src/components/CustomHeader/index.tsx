import {COLORS} from '@constants/style';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {I18nManager, StyleSheet} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import {calcFont} from '../../constants/style/sizes';
interface Props {
  hideBack?: boolean;

  title?: string;
}

const CustomHeader = ({hideBack, title}: Props) => {
  const navigation = useNavigation();

  const {
    colors: {text, background},
  } = useTheme();

  return (
    <Appbar.Header style={[styles.APPBAR, {backgroundColor: background}]}>
      {!hideBack && (
        <Appbar.Action
          icon={I18nManager.isRTL ? 'chevron-right' : 'chevron-left'}
          //size={calcFont(25)}
          onPress={() => navigation.goBack()}
        />
      )}

      <Appbar.Content
        title={title}
        style={styles.appbarContent}
        titleStyle={[styles.title, {color: text}]}
      />
      {!hideBack && <Appbar.Action />}
    </Appbar.Header>
  );
};

export {CustomHeader};

const styles = StyleSheet.create({
  APPBAR: {
    elevation: 0,
  },
  title: {
    fontSize: calcFont(16),
    fontWeight: '600',
    fontStyle: 'normal',
    //letterSpacing: -0.28,
    textTransform: 'capitalize',
  },
  appbarContent: {
    alignItems: 'center',
  },
  appbarAction: {
    marginStart: 0,
    // backgroundColor: 'yellow',
    marginEnd: 0,
  },
});
