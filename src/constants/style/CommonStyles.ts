import {StyleSheet} from 'react-native';
import {calcFont} from './sizes';

const styles = StyleSheet.create({
  screensContainer: {
    flex: 1,
  },
  title: {
    marginEnd: calcFont(10),
  },
});

export default styles;
