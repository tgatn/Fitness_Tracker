import { Link } from "expo-router";
import { Text, View, Platform } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the landing page</Text>
      <Link href="/home" style={{ color: 'blue' }}> Go to Home</Link>
      <Text>Device being used: {Platform.OS}</Text>
    </View>
  );
}
