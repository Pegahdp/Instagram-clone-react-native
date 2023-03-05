import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { firebase, db } from "../../firebase";
import { Pressable } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
import { useState } from "react";

const SignupForm = ({ navigation }) => {
  const LoginFormSchema = yup.object().shape({
    email: yup.string().email().required("An email is required"),
    username: yup
      .string()
      .min(2, "A username is should be at lease 2 characters")
      .required("An username is required"),
    password: yup
      .string()
      .min(6, "Your password should be at lease 6 characters")
      .required("An email is required"),
  });

  const onSignup = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      //console.log("Firebase User Has Created Successfully", email, password);
      db.collection("user").doc(authUser.user.email).set({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View className="py-8 w-full px-2">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) =>
          onSignup(values.email, values.password, values.username)
        }
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
            <View className="mt-5 gap-3 ">
              <TextInput
                placeholderTextColor="#444"
                placeholder="Email"
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
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="text"
                autoFocus={true}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                className={`border ${
                  1 > values.username.length || values.username.length >= 2
                    ? "border-gray-300"
                    : "border-red-600"
                } rounded-md p-4 mt-2 text-left`}
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
                <Text className="text-white text-[18px]">Sign Up</Text>
              </Pressable>
              <View className="flex-row mt-4 items-center justify-center">
                <Text>Already have an account? </Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#6bb0e5] text-base"
                    onPress={() => navigation.push("LoginScreen")}
                  >
                    Log In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;
