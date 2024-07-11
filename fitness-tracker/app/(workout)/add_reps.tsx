import { View, Text, Button } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const add_reps = () => {
  // const params = useLocalSearchParams();

  //const workoutName = params['workoutName'];

  const exercise = {
    name: String,
    workoutSet: Number
  }

  //const e = params['e'];

  // const e2 = JSON.parse(e + "")

  const test = SecureStore.getItem("Workout");

  const w2 = JSON.parse(String(test));

  function test2() {
    console.log(w2)
  }

  return (
    <View>
      <Button onPress={(e) => test2()} title="test" />
    </View>
  )
}

export default add_reps