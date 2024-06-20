import { Link } from "expo-router";
import { Text, View } from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import workout from "./(tabs)/workout";
import add_exercise from "./(workout)/add_exercise";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>This is the Home page</Text>
    //   <Link href="/workout" style={{ color: 'blue' }}> Go to Workout</Link>
    //   <Link href="/profile" style={{ color: 'blue' }}> Go to profile</Link>
    // </View>
    // Hey Tung, so everything seems to not be working lol. Also it's close to 11. Do you want to stop for today????????
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Workout"
          component={workout}
        />
        <Stack.Screen name="Workout2" component={add_exercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
