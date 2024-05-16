import Colors from '@constants/colors';
import {windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {padding: 16},
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  hotelCard: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  hotelImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  hotelName: {
    color: Colors.primary.base,
    fontSize: 18,
    fontWeight: '600',
  },
  hotelRegion: {
    color: Colors.darkGray,
    fontSize: 12,
  },
  timeCheckRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  timeCheckLeft: {
    fontSize: 16,
    fontWeight: '600',
  },
  timeCheckRight: {
    fontSize: 14,
    color: Colors.darkGray,
  },
  divider: {
    height: 1,
    width: windowWidth - 32,
    backgroundColor: Colors.gray,
    marginTop: 4,
    marginBottom: 12,
  },
  addPersonalData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  personalDataCard: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  personalDataBtn: {
    color: Colors.primary.base,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  guestDataCard: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  guestsDataBtn: {
    color: Colors.primary.base,
    textDecorationLine: 'underline',
    fontWeight: '500',
    textAlign: 'center',
  },
  payNowBtn: {
    paddingHorizontal: 16,
  },
});
