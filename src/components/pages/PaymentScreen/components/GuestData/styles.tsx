import Colors from '@constants/colors';
import {windowHeight} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: windowHeight / 2,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
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
  addGuest: {
    color: Colors.primary.base,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
