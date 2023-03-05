import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Pressable } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
import { useState } from "react";
import {firebase} from "../../firebase";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = yup.object().shape({
    email: yup.string().email().required("An email is required"),
    password: yup
      .string()
      .min(6, "Your password should be at lease 6 characters")
      .required("An email is required"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Firebase Login Successful", email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View className="py-8 w-full px-2">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => onLogin(values.email, values.password)}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View className="mt-5 gap-3">
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone Number, UserName or Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAdress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                className={`border ${
                  values.email.length < 1 || Validator.validate(values.email)
                    ? "border-gray-300"
                    : "border-red-600"
                } rounded-md p-4 text-left`}
              />
            </View>

            <View>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                autoFocus={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                className={`border ${
                  1 > values.password.length || values.password.length >= 7
                    ? "border-gray-300"
                    : "border-red-600"
                } rounded-md p-4 mt-2 text-left`}
              />
            </View>
            <View className="items-end mt-2">
              <Text className="text-[#6bb0e5]">Forgot Your Password?</Text>
            </View>
            <View className="my-6">
              <Pressable
                titleSize={20}
                onPress={handleSubmit}
                className={`mt-6 ${
                  isValid ? "bg-[#0096f6]" : "bg-[#9acaf7]"
                }   justify-center items-center rounded-md p-3`}
              >
                <Text className="text-white text-[18px]">Log In</Text>
              </Pressable>
              <View className="flex-row mt-4 items-center justify-center">
                <Text>Don't you have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.push("SignupScreen")}
                >
                  <Text className="text-[#6bb0e5] text-base">Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
