import { View, Text, Button, Platform, FlatList } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import StepCounter from '../components/StepCounter';
import { Workout } from '@/constants/Workout';
import { Exercise } from '@/constants/Exercise';
import { WorkoutSet } from '@/constants/WorkoutSet';

const add_reps = () => {



  const exercisesStr = (Platform.OS === "web") ? localStorage.getItem("Workout") : SecureStore.getItem("Workout");

  const exercisesObj = JSON.parse(String(exercisesStr));



  function test2() {
    console.log(exercisesObj)
    console.log(exercisesObj.exercise)

  }



  return (
    <View>
      <Button onPress={(e) => test2()} title="test" />

      <Text>Workout Name: {exercisesObj.name}</Text>

      {exercisesObj.exercise.map((exr: Exercise) => (
        <View style={{padding: 10}}>
          <Text>Exercise name: {exr.name}</Text>



          {exr.workoutSet.map((exerciseSet, count) => (
            <View style={{padding: 10}}>
              <Text>RestTime: {exerciseSet.restTime}</Text>
              <Text>Repetition: {exerciseSet.repetition}</Text>
              <Text>WarmUp: {exerciseSet.warmUp}</Text>
              <Text>Weight: {exerciseSet.weight}</Text>
            </View>
          ))}
        </View>
      ))}



      {/* Current Steps */}
      <StepCounter current_step={3}></StepCounter>
    </View>
  )
}

export default add_reps