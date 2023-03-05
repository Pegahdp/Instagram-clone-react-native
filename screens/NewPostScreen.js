
import { SafeAreaView } from "react-native-safe-area-context";
import AddNewPost from "../components/addNewPost/AddNewPost";

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPostScreen;
