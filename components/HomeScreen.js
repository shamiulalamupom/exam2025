import { Text, View, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to the Home Screen</Text>
      <Image
        source={{ uri: "https://placehold.co/600x400" }}
        style={{ width: 150, height: 150, marginTop: 20 }}
      />
    </View>
  );
};

export default HomeScreen;
