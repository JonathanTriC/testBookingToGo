import Colors from '@constants/colors';
import {windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    gap: 4,
  },
  cardImg: {
    height: 180,
    width: windowWidth - 56,
    borderRadius: 16,
    marginBottom: 8,
  },
  cardTitle: {
    color: Colors.primary.base,
    fontWeight: '600',
    fontSize: 18,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardAddress: {
    color: Colors.gray,
    fontSize: 12,
    width: '80%',
  },
  cardStar: {
    color: Colors.primary.base,
    fontWeight: 'bold',
    paddingLeft: 4,
  },
  cardFacilities: {
    color: Colors.gray,
  },
  cardRowPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  cardPrice: {
    color: Colors.red,
    fontSize: 16,
    fontWeight: '700',
  },
  cardPriceNight: {
    color: Colors.gray,
  },
});
