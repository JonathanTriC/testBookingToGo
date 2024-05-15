import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.primary.base,
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 4,
  },
});
