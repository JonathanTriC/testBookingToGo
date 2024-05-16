import {useNavigate} from '@hooks/useNavigate';
import {useState} from 'react';

const useDetailScreen = () => {
  const {navigation, navigateScreen, getRouteParams} = useNavigate();
  const {dataHotel} = getRouteParams<DetailScreenParams>();
  const [index, setIndex] = useState(0);
  const detail = dataHotel?.chosen_hotel_detail;

  return {
    navigation,
    navigateScreen,
    dataHotel,
    detail,
    index,
    setIndex,
  };
};

export default useDetailScreen;
