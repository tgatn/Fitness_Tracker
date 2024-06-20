import { View, Text, TextInput, StyleSheet, Button, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const workout = ({ navigation }) => {

  const [workoutName, setWorkoutName] = React.useState('');

  return (
    <SafeAreaView>
      <ScrollView>
        <Button title="Test" onPress={() => navigation.navigate('Home')} />
        {/* <Text>Enter Workout</Text> */}
        <TextInput
          style={styles.workout_input}
          value={workoutName}
          onChangeText={setWorkoutName}
          placeholder='Enter Workout'
        />

        {/* <Pressable
          title="Add Workout"
          color='#281b28'
          style={styles.workout_button}
          disabled={workoutName === ''}
        //style={styles.workout_button}
        /> */}

        <Pressable disabled={workoutName === ''} style={workoutName != '' ? styles.workout_button_enabled : styles.workout_button_disabled} onPress={() => gotoAddExercise(workoutName)}>
          <Text style={workoutName != '' ? styles.workout_button_text_enabled : styles.workout_button_text_disabled}>Add Workout</Text>
        </Pressable>

        {/* Current Steps */}
        <Text style={styles.step_text}>Add Workout</Text>
        <Text style={styles.inprogress_step}>1</Text>

      </ScrollView>
    </SafeAreaView>

  )
}

const gotoAddExercise = (name: string) => {
  return (
    console.log(name)
  )
}

export default workout

const styles = StyleSheet.create({
  workout_input: {
    fontSize: 48,
    borderBottomWidth: 2,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
    // backgroundColor: "#707ebd"
  },

  workout_button_enabled: {
    // fontSize: 48
    marginTop: 10,
    padding: 25,
    backgroundColor: '#707ebd',
    borderWidth: 2,
    borderColor: "#97a9ff",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: 500
  },

  workout_button_disabled: {
    padding: 25,
    marginTop: 10,
    backgroundColor: '#dfdfdf',
    borderWidth: 2,
    borderColor: "#909090",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: 500
  },

  workout_button_text_enabled: {
    textAlign: 'center',
    fontSize: 20
  },

  workout_button_text_disabled: {
    textAlign: 'center',
    color: "#c0c0c0",
    fontSize: 20
  },

  step_text: {
    fontSize: 20
  },

  inprogress_step: {
    backgroundColor: "#FFC634",
    borderRadius: 100,
    fontSize: 24,
    textAlign: "center",
    height: Dimensions.get('window').width * 0.02,
    width: Dimensions.get('window').width * 0.02
    // flex: 1
    // borderCurve: 50
  }
})