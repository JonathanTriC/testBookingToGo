/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {useSplashScreen} from './useSplashScreen';

type Props = {
  navigation: any;
};

const SplashScreen: FC<Props> = ({navigation}) => {
  const {} = useSplashScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BookingToGo</Text>
    </View>
  );
};

export {SplashScreen};
