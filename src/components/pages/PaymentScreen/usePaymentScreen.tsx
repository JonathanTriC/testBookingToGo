import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import validator from 'validator';
import {z} from 'zod';

const personalDataSchema = z.object({
  title: z.string().min(1, ''),
  full_name: z.string().min(1),
  phone_number: z.string().refine(validator.isMobilePhone),
  email_address: z.string().email(),
});

export type GuestDataItem = {
  id: string;
  title: string;
  full_name: string;
};

const usePaymentScreen = () => {
  const {navigation, navigateScreen, getRouteParams} = useNavigate();
  const {hotelImg, hotelName, hotelRegion} =
    getRouteParams<PaymentScreenParams>();
  const [isShowPersonalData, setShowPersonalData] = useState<boolean>(false);
  const {control: controlPD, handleSubmit: handleSubmitPD} = useForm({
    defaultValues: {
      title: '',
      full_name: '',
      phone_number: '',
      email_address: '',
    },
    resolver: zodResolver(personalDataSchema),
  });

  const [personalData, setPersonalData] = useState<{
    title?: string;
    fullName?: string;
    phoneNumber?: string;
    emailAddress?: string;
  }>();

  const onSubmitPD = async (data: any) => {
    setPersonalData({
      title: data?.title,
      fullName: data?.full_name,
      phoneNumber: data?.phone_number,
      emailAddress: data?.email_address,
    });

    setShowPersonalData(!isShowPersonalData);
  };

  const [isShowGuestsData, setShowGuestsData] = useState<boolean>(false);
  const [itemsGD, setItemsGD] = useState<GuestDataItem[]>([]);
  const [listGD, setListGD] = useState<GuestDataItem[]>([]);

  const addItemGD = () => {
    setItemsGD([
      ...itemsGD,
      {id: Math.random().toString(), title: '', full_name: ''},
    ]);
  };

  const deleteItemGD = (id: string) => {
    setItemsGD(itemsGD.filter(item => item.id !== id));
  };

  const updateItemValueGD = (
    id: string,
    field: keyof GuestDataItem,
    value: string,
  ) => {
    setItemsGD(
      itemsGD.map(item => (item.id === id ? {...item, [field]: value} : item)),
    );
  };

  const saveListGD = () => {
    setListGD(itemsGD);

    setShowGuestsData(!isShowGuestsData);
  };

  return {
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
  };
};

export default usePaymentScreen;
