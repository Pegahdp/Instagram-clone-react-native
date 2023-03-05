import { View, Text, Image, TouchableOpacity } from "react-native";
import { Share, Like, Comment, Save } from "../../assets/index";

const Post = ({ post }) => {
  return (
    <View className="mb-8 ">
      <PostHeader post={post} />
      <PostImage post={post} />
      <View className="px-2">
        <PostFooter />
        <Likes post={post} />
        <Captions post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      className="flex-row justify-between items-center m-3
    "
    >
      <View className="flex-row justify-center items-center gap-2 ">
        <Image
          source={{ uri: post.profile_picture }}
          className="w-10 h-10 rounded-full   border "
        />
        <Text className="text-white text-[12px]">{post.user}</Text>
      </View>
      <Text className="text-white">...</Text>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View className="w-full h-[450px]">
      <Image source={{ uri: post.imageUrl }} className="h-full object-cover" />
    </View>
  );
};

const PostFooter = () => {
  return (
    <View className="flex-row w-full justify-between mt-3 mb-2 ">
      <View className="flex-row gap-3">
        <TouchableOpacity>
          <Image source={Like} className="w-7 h-6 object-cover" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Share} className="w-6 h-6 object-cover" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Comment} className="w-6 h-6 object-cover ml-1" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Image source={Save} className="w-6 h-6 object-cover" />
      </TouchableOpacity>
    </View>
  );
};

const Likes = ({ post }) => {
  return (
    <Text className="text-white text-[14px] font-semibold my-1">
      {post.likes.toLocaleString("en")} likes
    </Text>
  );
};

const Captions = ({ post }) => {
  return (
    <View className="mt-1">
      <Text className="text-white text-[13px] ">
        <Text className="font-semibold">{post.user} </Text>
        <Text>{post.caption}</Text>
      </Text>
    </View>
  );
};

const CommentSection = ({ post }) => {
  return (
    <View className="my-1">
      {!!post.comments.length && (
        <Text className="text-gray-300 ">
          {`View ${post.comments.length > 1 ? "all" : ""}`}{" "}
          {post.comments.length} {""}
          {post.comments.length > 1 ? "comments" : "comment"}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => {
  return (
    <View className="">
      {post.comments.map((comment, index) => (
        <View key={index} className="flex-row gap-1 my-[1px]">
          <Text className="text-white font-300 text-[13px]">{comment.user}</Text>
          <Text className="text-gray-300 text-[13px]">{comment.comment}</Text>
        </View>
      ))}
    </View>
  );
};

export default Post;
