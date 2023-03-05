import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import FormikHostUploader from "./FormikHostUploader";
const AddNewPost = ({navigation}) => {
  return (
    <View className="my-7">
     <Header navigation={navigation} />
     <FormikHostUploader navigation={navigation} />
    </View>
  );
};


const Header = ({navigation}) => {
    return (
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack("HomeScreen")}>
        <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg text-center font-bold ">New Post</Text>
        <Text></Text>
      </View>
    );
  };
export default AddNewPost;
