import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPostScreen from "./screens/NewPostScreen"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from './screens/LoginScreen'
import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
  };
export const SignedInStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreenome" component={HomeScreen } />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen } />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const SignedOutStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
        <Stack.Screen name="LoginScreen" component={LoginScreen } />
        <Stack.Screen name="SignupScreen" component={SignupScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

