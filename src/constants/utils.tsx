import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

export const renderIconFacilities = (facility: String) => {
  switch (facility) {
    case 'Air Conditioning':
      return 'air-conditioner';
    case 'Bar':
      return 'glass-cocktail';
    case 'Pool':
      return 'pool';
    case 'Restaurant':
      return 'silverware-fork-knife';
    case 'Wireless internet':
      return 'wifi';
    case 'Car parking':
      return 'parking';
    case 'Disabled facilities':
      return 'human-wheelchair';
    case 'Gym/fitness facilities':
      return 'dumbbell';
    case 'Wheelchair access':
      return 'wheelchair-accessibility';
    default:
      return '';
  }
};
