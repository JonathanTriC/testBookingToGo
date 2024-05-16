import {Button, Spacer} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {globalStyles} from '@constants/globalStyles';
import {renderIconFacilities, windowWidth} from '@constants/utils';
import {useLayoutEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {formatCurrency} from 'react-native-format-currency';
import {FlatList} from 'react-native-gesture-handler';
import {Icon} from 'react-native-paper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {styles} from './styles';
import useDetailScreen from './useDetailScreen';

const DetailScreen = () => {
  const {
    navigation,
    navigateScreen,
    dataHotel,
    index,
    setIndex,
    showMoreFacilities,
    setShowMoreFacilities,
  } = useDetailScreen();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label="Detail Hotel" />,
    });
  }, []);
  return (
    <View style={globalStyles.flex1}>
      <ScrollView style={styles.pageWrapper}>
        <View>
          <View style={styles.container}>
            <Carousel
              loop
              sliderWidth={windowWidth - 32}
              itemWidth={windowWidth - 32}
              data={dataHotel?.chosen_hotel_detail?.images ?? []}
              onSnapToItem={index => setIndex(index)}
              renderItem={({item}) => {
                return (
                  <FastImage source={{uri: item?.url}} style={styles.image} />
                );
              }}
            />
            <View style={styles.dotContainer}>
              <Pagination
                dotsLength={dataHotel?.chosen_hotel_detail?.images?.length ?? 0}
                activeDotIndex={index}
                dotStyle={styles.dot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </View>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.title}>
              {dataHotel?.chosen_hotel_detail?.hotel_name}
            </Text>
            <View style={[globalStyles.flexRow, {marginVertical: 4}]}>
              <Icon source={'star'} size={20} color={Colors.yellow} />
              <Text style={styles.detailStar}>
                {dataHotel?.chosen_hotel_detail?.star}
                <Text style={{fontSize: 10}}>/5</Text>
              </Text>
              <Text style={{color: Colors.primary.base}}>
                {' '}
                • {dataHotel?.chosen_hotel_detail?.region_hotel}
              </Text>
            </View>
            <Text>{dataHotel?.chosen_hotel_detail?.address}</Text>
            <Text style={styles.header}>Facilities</Text>
            <FlatList
              nestedScrollEnabled
              numColumns={3}
              data={dataHotel?.chosen_hotel_detail?.facilities}
              renderItem={({item}) => {
                return (
                  <View style={styles.detailFacilityContainer}>
                    <Icon
                      source={renderIconFacilities(item)}
                      size={22}
                      color={Colors.primary.base}
                    />
                    <Text style={styles.detailFacilityTxt}>{item}</Text>
                  </View>
                );
              }}
            />
            <Text style={styles.header}>Description</Text>
            <Text>
              {dataHotel?.chosen_hotel_detail?.descriptions?.[0]?.description}
            </Text>
            <Spacer height={100} />
          </View>
        </View>
      </ScrollView>

      <View style={[styles.shadowProp, styles.bottomContainer]}>
        <View style={styles.bottomRowPrice}>
          <Text style={styles.title}>Price</Text>
          <View style={globalStyles.flexRow}>
            <Text style={styles.bottomPrice}>
              {
                formatCurrency({
                  amount: Number(
                    dataHotel?.chosen_hotel_prices?.price_detail?.total || 0,
                  ),
                  code: 'IDR',
                })[0]
              }
            </Text>
            <Text style={styles.bottomPriceNight}> /night</Text>
          </View>
        </View>

        <Button label="Book Hotel" action={() => {}} />
      </View>
    </View>
  );
};

export {DetailScreen};
