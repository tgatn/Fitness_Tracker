import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const add_reps = () => {
  const params = useLocalSearchParams();

  const workoutName = params['workoutName'];

  const exercise = {
    name: String,
    workoutSet: Number
  }

  const e = params['e'];

  

  
  console.log(params)

  return (
    <View>
      <Text>{workoutName}</Text>
      <Text>{e}</Text>
      
      
      
    </View>
  )
}

export default add_reps