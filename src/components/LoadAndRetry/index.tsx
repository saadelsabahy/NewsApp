import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, IconButton, Text} from 'react-native-paper/';
import {calcFont} from '../../constants/style/sizes';

interface Props {
  loading: boolean;
  error: boolean;
  onRetryPressed: () => void;
  loadingText?: string;
  errorText?: string;
}
const LoaderAndRetry = ({
  loading,
  error,
  onRetryPressed,
  loadingText,
  errorText,
}: Props) => {
  return (
    <View style={styles.container}>
      {loading && (
        <>
          <ActivityIndicator size="large" />
          <Text children={loadingText || 'loading..'} style={styles.text} />
        </>
      )}
      {error && (
        <>
          <IconButton
            icon="reload"
            onPress={onRetryPressed}
            size={calcFont(25)}
          />
          <Text
            children={errorText || 'something went wrong please  try again'}
            style={styles.text}
          />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  text: {
    textTransform: 'capitalize',
    fontSize: calcFont(17),
  },
});

export {LoaderAndRetry};
