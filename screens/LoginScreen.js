import InstagramLogo from '../assets/instagram-logo.png'
import { View, Image } from "react-native";
import LoginForm from '../components/login/LoginForm';

const LoginScreen = ({navigation}) => {
  return (
    <View className="flex-1 bg-white py-20 px-4">
      <View className="items-center justify-center">
        <Image source={InstagramLogo} className="w-24 h-24" />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;
