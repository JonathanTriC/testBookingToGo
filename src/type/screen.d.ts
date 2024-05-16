interface SplashScreenParams {}
interface HomeScreenParams {}
interface DetailScreenParams {
  dataHotel?: IDetailHotel;
}

type ParamList = {
  SplashScreen: SplashScreenParams;
  HomeScreen: HomeScreenParams;
  DetailScreen: DetailScreenParams;
};
