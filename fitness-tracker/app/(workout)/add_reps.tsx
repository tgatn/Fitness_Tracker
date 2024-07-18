import { View, Text, Button, Platform } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import StepCounter from '../components/StepCounter';

const add_reps = () => {

  const exercise = {
    name: String,
    workoutSet: Number
  }

  const exercises = (Platform.OS === "web") ? localStorage.getItem("Workout"): SecureStore.getItem("Workout");


  function test2() {
    console.log(exercises)
  }

  return (
    <View>
      <Button onPress={(e) => test2()} title="test" />
      {/* Current Steps */}
      <StepCounter current_step={3}></StepCounter>
    </View>
  )
}

export default add_reps