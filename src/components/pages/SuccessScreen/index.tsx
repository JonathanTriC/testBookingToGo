import Colors from '@constants/colors';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-paper';
import {useSplashScreen} from '../SplashScreen/useSplashScreen';
import {styles} from './styles';

const SuccessScreen = () => {
  const {} = useSplashScreen();
  return (
    <View style={styles.container}>
      <Icon source={'check-circle'} size={100} color={Colors.green} />
      <Text style={styles.txt}>Success Payment</Text>
    </View>
  );
};

export {SuccessScreen};
