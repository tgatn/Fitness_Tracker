import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'



const add_exercise = () => {

  const params = useLocalSearchParams();

  const workoutName = params['name'];

  return (
    <View>
      <Text>Workout: {workoutName} </Text>
      <Text>add_exercise</Text>
    </View>
  )
}

export default add_exercise