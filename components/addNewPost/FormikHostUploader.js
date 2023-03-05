import { View, Text, TextInput, Image, Button } from "react-native";
import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import validUrl from 'valid-url'

const PLACEHOLDER_IMG =
  "https://dishub.dairikab.go.id/wp-content/uploads/sites/33/2022/01/default-img-1000x500.gif";

const uploadFormSchema = yup.object().shape({
  imgUrl: yup.string().url().required("A url is required"),
  caption: yup.string().max(2200, "caption has reached the character limit."),
});

const FormikHostUploader = ({ navigation }) => {
  const [thumbnailurl, setThumbnailurl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{ imgUrl: "", caption: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log('Your Post Has Been Succesfully Uploaded')
        navigation.goBack()
      }}
      validationSchema={uploadFormSchema}
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
          <View className="flex-row justify-between p-4 gap-4 border-b border-gray-700">
            <Image
              source={{ uri: validUrl.isUri(thumbnailurl) ? thumbnailurl : PLACEHOLDER_IMG }}
              className="w-36 h-36"
            />

            <TextInput
              placeholder="Write a caption..."
              placeholderTextColor="gray"
              value={values.caption}
              multiline={true}
              className="text-white text-[20px] flex-1"
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
            />
          </View>
          <TextInput
            onChange={(e) => setThumbnailurl(e.nativeEvent.text)}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            value={values.imgUrl}
            className="text-white text-[18px] p-4"
            onChangeText={handleChange("imgUrl")}
            onBlur={handleBlur("imgUrl")}
          />
          {errors.imgUrl && (
            <Text className="text-red-600 ml-4">{errors.imgUrl}</Text>
          )}
          <Button title="Share" onPress={handleSubmit} disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikHostUploader;
