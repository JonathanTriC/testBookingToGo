import Colors from '@constants/colors';
import {windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: Colors.primary.background,
  },
  container: {padding: 16},
  image: {width: windowWidth - 32, height: 200, borderRadius: 20},
  dotContainer: {
    position: 'absolute',
    bottom: -50,
    width: windowWidth - 32,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary.base,
  },
  title: {
    color: Colors.primary.base,
    fontSize: 22,
    fontWeight: '700',
  },
  header: {
    color: Colors.primary.base,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4,
  },
  detailContainer: {
    marginTop: 40,
    backgroundColor: Colors.white,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  detailStar: {
    color: Colors.primary.base,
    fontWeight: 'bold',
    paddingLeft: 4,
  },
  detailFacilityContainer: {alignItems: 'center', flex: 1, marginVertical: 6},
  detailFacilityTxt: {
    marginTop: 4,
    textAlign: 'center',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 0.5,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.white,
    width: windowWidth,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  bottomRowPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bottomPrice: {
    color: Colors.red,
    fontSize: 16,
    fontWeight: '700',
  },
  bottomPriceNight: {
    color: Colors.gray,
  },
});
