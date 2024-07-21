import { View, Text, Platform, Button } from 'react-native'
import React from 'react'
import * as SecureStore from 'expo-secure-store';


const exercisesStr = (Platform.OS === "web") ? localStorage.getItem("Workout") : SecureStore.getItem("Workout");

const exercisesObj = JSON.parse(String(exercisesStr));


const review_workout = () => {
  return (
    <View>
      <Text>review_workout</Text>
      
      <Button title="Print Obj" onPress={() => console.log(exercisesStr)}/>
    </View>
  )
}

export default review_workout