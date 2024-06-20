import { Link } from "expo-router";
import { Text, View } from "react-native";

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
      <Link href="/workout" style={{ color: 'blue' }}> Go to Workout</Link>
      <Link href="/profile" style={{ color: 'blue' }}> Go to profile</Link>
    </View>
  );
}
