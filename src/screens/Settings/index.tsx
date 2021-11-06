import {COLORS} from '@constants/style';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Switch, useTheme} from 'react-native-paper';

interface Props {}

const SettingsScreen = () => {
  const {
    colors: {primary},
  } = useTheme();
  return (
    <View>
      <List.Item
        title={'english'}
        right={() => <Switch value={false} color={primary} />}
        style={styles.listItem}
        titleStyle={styles.title}
      />
      <List.Item
        title={'dark mode'}
        right={() => <Switch value={false} color={primary} />}
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
