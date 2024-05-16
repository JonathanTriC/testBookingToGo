import {BottomSheet, Button} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {globalStyles} from '@constants/globalStyles';
import {windowHeight} from '@constants/utils';
import dayjs from 'dayjs';
import {isEmpty} from 'lodash';
import {useLayoutEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-paper';
import {GuestData, PersonalData} from './components';
import {styles} from './styles';
import usePaymentScreen from './usePaymentScreen';

const PaymentScreen = () => {
  const {
    navigation,
    navigateScreen,
    hotelImg,
    hotelName,
    hotelRegion,
    isShowPersonalData,
    setShowPersonalData,
    personalData,
    controlPD,
    handleSubmitPD,
    onSubmitPD,
    isShowGuestsData,
    setShowGuestsData,
    itemsGD,
    listGD,
    addItemGD,
    deleteItemGD,
    updateItemValueGD,
    saveListGD,
  } = usePaymentScreen();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label="Payment Details" />,
    });
  }, []);

  return (
    <>
      <View style={globalStyles.flex1}>
        <ScrollView style={styles.pageWrapper}>
          <View style={styles.container}>
            <Text style={styles.header}>Booking Details</Text>
            <View style={styles.hotelCard}>
              <FastImage source={{uri: hotelImg}} style={styles.hotelImg} />
              <View>
                <Text style={styles.hotelName}>{hotelName}</Text>
                <Text style={styles.hotelRegion}>{hotelRegion}</Text>
                <Text style={styles.hotelRegion}>1 Bedroom • 2 Nights</Text>
              </View>
            </View>
            <View style={styles.timeCheckRow}>
              <Text style={styles.timeCheckLeft}>Check-In</Text>
              <Text style={styles.timeCheckRight}>
                {dayjs().format('DD MMM YYYY')}
              </Text>
            </View>
            <View style={styles.timeCheckRow}>
              <Text style={styles.timeCheckLeft}>Check-Out</Text>
              <Text style={styles.timeCheckRight}>
                {dayjs().add(1, 'day').format('DD MMM YYYY')}
              </Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.header}>Personal Data</Text>
            <View>
              {isEmpty(personalData) ? (
                <TouchableOpacity
                  onPress={() => setShowPersonalData(!isShowPersonalData)}>
                  <View style={styles.addPersonalData}>
                    <Icon
                      source={'account-plus'}
                      size={30}
                      color={Colors.primary.base}
                    />
                    <Text style={styles.personalDataBtn}>
                      Add Personal Data
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.personalDataCard}>
                  <View>
                    <Text style={styles.timeCheckLeft}>
                      {personalData?.title} {personalData?.fullName}
                    </Text>
                    <Text style={styles.timeCheckRight}>
                      {personalData?.phoneNumber}
                    </Text>
                    <Text style={styles.timeCheckRight}>
                      {personalData?.emailAddress}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPersonalData(!isShowPersonalData);
                    }}>
                    <Text style={styles.personalDataBtn}>Edit</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.divider} />

            <Text style={styles.header}>Guest Data</Text>
            <View>
              {isEmpty(listGD) ? (
                <TouchableOpacity
                  onPress={() => setShowGuestsData(!isShowGuestsData)}>
                  <View style={styles.addPersonalData}>
                    <Icon
                      source={'account-plus'}
                      size={30}
                      color={Colors.primary.base}
                    />
                    <Text style={styles.personalDataBtn}>Add Guests Data</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View>
                  <FlatList
                    data={listGD}
                    renderItem={({item}) => {
                      return (
                        <View style={styles.guestDataCard}>
                          <Icon source={'account'} size={20} />
                          <Text style={styles.timeCheckLeft}>
                            {item?.title} {item?.full_name}
                          </Text>
                        </View>
                      );
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setShowGuestsData(!isShowGuestsData);
                    }}>
                    <Text style={styles.guestsDataBtn}>Edit Guests Data</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </ScrollView>

        <View style={styles.payNowBtn}>
          <Button
            label="Pay Now"
            action={() => navigateScreen('SuccessScreen')}
          />
        </View>
      </View>

      <BottomSheet
        visible={isShowPersonalData}
        onClose={() => setShowPersonalData(!isShowPersonalData)}>
        <PersonalData
          controlPD={controlPD}
          handleSubmitPD={handleSubmitPD}
          onSubmitPD={onSubmitPD}
        />
      </BottomSheet>

      <BottomSheet
        height={windowHeight / 2}
        visible={isShowGuestsData}
        onClose={() => setShowGuestsData(!isShowGuestsData)}>
        <GuestData
          itemsGD={itemsGD}
          addItemGD={addItemGD}
          deleteItemGD={deleteItemGD}
          updateItemValueGD={updateItemValueGD}
          saveListGD={saveListGD}
        />
      </BottomSheet>
    </>
  );
};

export {PaymentScreen};
