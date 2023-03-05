import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import Stories from "../components/home/Stories";
import { useEffect } from "react";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.collectionGroup("posts").onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <SafeAreaView className="bg-black">
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
