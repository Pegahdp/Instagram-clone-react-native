import { View, Text, Image, TouchableOpacity } from "react-native";
import {firebase} from '../../firebase'

const Header = ({ navigation }) => {

const handleSignout = async() =>{

  try {
    await firebase.auth().signOut().then(() => console.log('Signed out Successfully'))

  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <View className="flex-row justify-between items-center mx-5">
      <TouchableOpacity onPress={handleSignout}>
        <Image
          source={require("../../assets/Logo.png")}
          className="object-cover"
        />
      </TouchableOpacity>
      <View className="flex-row gap-2">
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            source={require("../../assets/plus.png")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/heart.png")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="bg-[#ff3250] absolute z-10 w-4 h-4 rounded-full items-center justify-center bottom-3 left-3 ">
            <Text className=" text-white font-semibold text-[10px]">12</Text>
          </View>
          <Image
            source={require("../../assets/igtv.png")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
