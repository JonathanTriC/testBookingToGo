import {Button} from '@components/atoms';
import Colors from '@constants/colors';
import {globalStyles} from '@constants/globalStyles';
import React from 'react';
import {Control, Controller, UseFormHandleSubmit} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {styles} from './styles';

type PersonalDataParams = {
  controlPD: Control<
    {
      title: string;
      full_name: string;
      phone_number: string;
      email_address: string;
    },
    any
  >;
  handleSubmitPD: UseFormHandleSubmit<
    {
      title: string;
      full_name: string;
      phone_number: string;
      email_address: string;
    },
    undefined
  >;
  onSubmitPD: (data: any) => Promise<void>;
};
const PersonalData = ({
  controlPD,
  handleSubmitPD,
  onSubmitPD,
}: PersonalDataParams) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personal Data</Text>
      <View style={globalStyles.flexRow}>
        <Controller
          control={controlPD}
          name={'title'}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <View>
              <View style={styles.formContainer}>
                <RNPickerSelect
                  placeholder={{
                    label: 'Title',
                    value: null,
                  }}
                  value={value}
                  onValueChange={onChange}
                  items={[
                    {label: 'Mr.', value: 'Mr.'},
                    {label: 'Ms.', value: 'Ms.'},
                  ]}
                />
              </View>
              {error ? (
                <Text style={styles.formError}>{error?.message}</Text>
              ) : null}
            </View>
          )}
        />
        <View style={globalStyles.flex1}>
          <Controller
            control={controlPD}
            name={'full_name'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <View>
                <View style={styles.formContainer}>
                  <TextInput
                    placeholder="Full Name"
                    placeholderTextColor={Colors.darkGray}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                </View>
                {error ? (
                  <Text style={styles.formError}>{error?.message}</Text>
                ) : null}
              </View>
            )}
          />
        </View>
      </View>

      <Controller
        control={controlPD}
        name={'phone_number'}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <View>
            <View style={styles.formContainer}>
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor={Colors.darkGray}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType="number-pad"
              />
            </View>
            {error ? (
              <Text style={styles.formError}>{error?.message}</Text>
            ) : null}
          </View>
        )}
      />

      <Controller
        control={controlPD}
        name={'email_address'}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <View>
            <View style={styles.formContainer}>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor={Colors.darkGray}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            </View>
            {error ? (
              <Text style={styles.formError}>{error?.message}</Text>
            ) : null}
          </View>
        )}
      />

      <Button label="Save" action={handleSubmitPD(onSubmitPD)} />
    </View>
  );
};

export {PersonalData};
