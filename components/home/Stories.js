import { View, Text, ScrollView, Image } from "react-native";
import {USERS} from '../../data/users'
import React from "react";
console.log(USERS);


const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} className=" items-center justify-between ml-3 my-3">
            <Image
              source={{ uri: story.image }}
              className="w-16 h-16 rounded-full  border-2 border-[#db07ad]"
            />
            <Text className="text-white my-1 text-[10px]">
              {story.username > 11n
                ? `${story.username.slice(0, 11)}...`
                : story.username}
            </Text>
          </View>
        ))}
      </ScrollView>
 
    </View>
  );
};

export default Stories;
