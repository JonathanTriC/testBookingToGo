import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {padding: 16, gap: 12},
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
  formContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    marginRight: 8,
  },
  formError: {
    color: Colors.red,
  },
});
