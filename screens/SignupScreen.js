import { View, Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/signup/SignupForm'
import InstagramLogo from '../assets/instagram-logo.png'


const SignupScreen = ({navigation}) => {
  return (



    <View className="flex-1 bg-white py-20 px-4">
      <View className="items-center justify-center">
        <Image source={InstagramLogo} className="w-24 h-24" />
      </View>
      <SignupForm navigation={navigation}  />
    </View>
   
 
   
  )
}

export default SignupScreen