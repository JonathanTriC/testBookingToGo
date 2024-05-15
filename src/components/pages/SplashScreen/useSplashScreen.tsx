import {useNavigate} from '@hooks/useNavigate';
import {useEffect} from 'react';

const useSplashScreen = () => {
  const {resetNavigate} = useNavigate();
  const handleNavigationAfterSplash = () => {
    const timeout = setTimeout(() => {
      resetNavigate('HomeScreen');
    }, 3000);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    handleNavigationAfterSplash();
  }, []);
  return {};
};

export {useSplashScreen};
