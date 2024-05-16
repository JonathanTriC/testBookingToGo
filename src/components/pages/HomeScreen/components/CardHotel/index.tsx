import Colors from '@constants/colors';
import {globalStyles} from '@constants/globalStyles';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {formatCurrency} from 'react-native-format-currency';
import {Icon} from 'react-native-paper';
import {styles} from './styles';

type CardHotelProps = {
  data?: IDetailHotel;
  onPress: () => void;
};

const CardHotel = ({data, onPress}: CardHotelProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <FastImage
          source={{
            uri: data?.chosen_hotel_detail?.images?.[0].url,
          }}
          style={styles.cardImg}
        />
        <Text style={styles.cardTitle}>
          {data?.chosen_hotel_detail?.hotel_name}
        </Text>
        <View style={styles.cardRow}>
          <Text style={styles.cardAddress}>
            {data?.chosen_hotel_detail?.address}
          </Text>
          <View style={globalStyles.flexRow}>
            <Icon source={'star'} size={20} color={Colors.yellow} />
            <Text style={styles.cardStar}>
              {data?.chosen_hotel_detail?.star}
            </Text>
          </View>
        </View>
        <View style={styles.cardRowPrice}>
          <Text style={styles.cardPrice}>
            {
              formatCurrency({
                amount: Number(
                  data?.chosen_hotel_prices?.price_detail?.total || 0,
                ),
                code: 'IDR',
              })[0]
            }
          </Text>
          <Text style={styles.cardPriceNight}> /night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {CardHotel};
