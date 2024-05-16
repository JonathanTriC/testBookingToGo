import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: Colors.primary.background,
  },
  container: {padding: 16},
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  loading: {height: '90%'},
});
