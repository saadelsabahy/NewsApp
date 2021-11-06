import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {I18nManager, StyleSheet} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import {
  default as Icon,
  default as Icon,
} from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/style';
import {calcFont, SCREEN_WIDTH} from '../../constants/style/sizes';
interface Props {
  hideBack?: boolean;

  title?: string;
}

const CustomHeader = ({hideBack, title}: Props) => {
  const navigation = useNavigation();

  const {
    colors: {primary, text},
  } = useTheme();

  return (
    <Appbar.Header style={[styles.APPBAR]}>
      {!hideBack ? (
        <Appbar.Action
          icon={I18nManager.isRTL ? 'chevron-right' : 'chevron-left'}
          size={calcFont(25)}
          onPress={() => navigation.goBack()}
          style={styles.appbarAction}
        />
      ) : (
        <Appbar.Action style={styles.appbarAction} />
      )}

      <Appbar.Content
        title={title}
        style={styles.appbarContent}
        titleStyle={[styles.title, {color: text}]}
      />
    </Appbar.Header>
  );
};

export {CustomHeader};

const styles = StyleSheet.create({
  APPBAR: {
    //backgroundColor: COLORS.WHITE,
    width: SCREEN_WIDTH,
    elevation: 0,
    alignSelf: 'center',
    borderColor: COLORS.CART_ITEM_BORDER,
  },
  title: {
    fontSize: calcFont(16),
    fontWeight: '600',
    fontStyle: 'normal',
    //letterSpacing: -0.28,
    color: COLORS.HEADER_TEXT,
    textTransform: 'capitalize',
  },
  appbarAction: {
    marginStart: 0,
    // backgroundColor: 'yellow',
    marginEnd: 0,
  },
  appbarContent: {
    alignItems: 'center',
    marginStart: 0,
    // backgroundColor: 'red',
    marginEnd: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  endActionText: {
    //color: COLORS.MAINCOLOR,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: calcFont(14),
    letterSpacing: calcFont(-0.28),
    marginHorizontal: 0,
    marginVertical: 0,
  },
  textButton: {
    justifyContent: 'center',
    width: 'auto',
    marginEnd: calcFont(5),
    //borderRadius: 0,
  },
});
