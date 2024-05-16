interface SplashScreenParams {}
interface HomeScreenParams {}
interface SuccessScreenParams {}
interface DetailScreenParams {
  dataHotel?: IDetailHotel;
}

interface PaymentScreenParams {
  hotelImg?: string;
  hotelName?: string;
  hotelRegion?: string;
}

type ParamList = {
  SplashScreen: SplashScreenParams;
  HomeScreen: HomeScreenParams;
  DetailScreen: DetailScreenParams;
  PaymentScreen: PaymentScreenParams;
  SuccessScreen: SuccessScreenParams;
};
