import {Button, Spacer} from '@components/atoms';
import Colors from '@constants/colors';
import {globalStyles} from '@constants/globalStyles';
import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {GuestDataItem} from '../../usePaymentScreen';
import {styles} from './styles';

type GuestDataParams = {
  itemsGD: GuestDataItem[];
  updateItemValueGD: (
    id: string,
    field: keyof GuestDataItem,
    value: string,
  ) => void;
  deleteItemGD: (id: string) => void;
  addItemGD: () => void;
  saveListGD: () => void;
};

const GuestData = ({
  itemsGD,
  updateItemValueGD,
  deleteItemGD,
  addItemGD,
  saveListGD,
}: GuestDataParams) => {
  const renderItem = ({item}: {item: GuestDataItem}) => (
    <View style={styles.item}>
      <View style={styles.formContainer}>
        <RNPickerSelect
          placeholder={{
            label: 'Title',
            value: null,
          }}
          value={item?.title}
          onValueChange={text => updateItemValueGD(item.id, 'title', text)}
          items={[
            {label: 'Mr.', value: 'Mr.'},
            {label: 'Ms.', value: 'Ms.'},
          ]}
        />
      </View>
      <View style={[styles.formContainer, globalStyles.flex1]}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={Colors.darkGray}
          onChangeText={text => updateItemValueGD(item.id, 'full_name', text)}
          value={item.full_name}
        />
      </View>
      <IconButton
        icon={'delete'}
        iconColor={Colors.red}
        onPress={() => deleteItemGD(item?.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Guests Data</Text>

      <FlatList
        data={itemsGD}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity onPress={addItemGD}>
        <Text style={styles.addGuest}>Add Guests</Text>
      </TouchableOpacity>

      <Spacer height={8} />
      <Button label="Save" action={saveListGD} />
    </View>
  );
};

export {GuestData};
