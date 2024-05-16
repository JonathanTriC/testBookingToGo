import {useNavigate} from '@hooks/useNavigate';
import {useState} from 'react';

const useDetailScreen = () => {
  const {navigation, navigateScreen, getRouteParams} = useNavigate();
  const {dataHotel} = getRouteParams<DetailScreenParams>();
  const [index, setIndex] = useState(0);
  const [showMoreFacilities, setShowMoreFacilities] = useState<boolean>(false);

  return {
    navigation,
    navigateScreen,
    dataHotel,
    index,
    setIndex,
    showMoreFacilities,
    setShowMoreFacilities,
  };
};

export default useDetailScreen;
