import {apiGet} from '@api/wrapping';
import {URL_PATH} from '@constants/url';
import {useNavigate} from '@hooks/useNavigate';
import {useQuery} from '@tanstack/react-query';

const useHomeScreen = () => {
  const {navigation, navigateScreen} = useNavigate();
  const {data: detailHotelData, isLoading} = useQuery<IDetailHotel>({
    queryKey: ['detailCast'],
    queryFn: async () => {
      const res = await apiGet({
        url: URL_PATH.classesHotel('bVonXoSUHK'),
      });
      return res?.chosen_hotel?.data?.get_chosen_hotel;
    },
  });

  return {
    navigation,
    navigateScreen,
    isLoading,
    detailHotelData,
  };
};

export default useHomeScreen;
