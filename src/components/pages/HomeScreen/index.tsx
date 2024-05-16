import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {useLayoutEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {CardHotel} from './components';
import {styles} from './styles';
import useHomeScreen from './useHomeScreen';

const HomeScreen = () => {
  const {navigation, navigateScreen, detailHotelData, isLoading} =
    useHomeScreen();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label="Home" withBackIcon={false} />,
    });
  }, []);

  return (
    <>
      <View style={styles.pageWrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>All Available Hotels In Jakarta</Text>
          {isLoading ? (
            <ActivityIndicator
              color={Colors.primary.base}
              size={'large'}
              style={styles.loading}
            />
          ) : (
            <CardHotel
              data={detailHotelData}
              onPress={() => {
                navigateScreen<DetailScreenParams>('DetailScreen', {
                  dataHotel: detailHotelData,
                });
              }}
            />
          )}
        </View>
      </View>
    </>
  );
};

export {HomeScreen};
