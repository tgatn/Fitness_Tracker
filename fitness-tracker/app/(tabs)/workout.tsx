import { View, Text, TextInput, StyleSheet, Button, Pressable, Dimensions, ScrollView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {  useFonts, Nunito_400Regular, Nunito_300Light, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { router } from 'expo-router';
import StepCounter from '../components/StepCounter';
import { Workout } from '@/constants/Workout';
import { Exercise } from '@/constants/Exercise';
import { WorkoutSet } from '@/constants/WorkoutSet';
import * as SecureStore from 'expo-secure-store';


const workout = () => {

  const [workoutName, setWorkoutName] = React.useState('');

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_300Light,
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  function gotoAddExercise(name: string) {
    const emptyWorkout: Workout = {
      name: "",
      exercise: []
    };
    emptyWorkout.name = name;
    (Platform.OS === "web") ? localStorage.setItem("Workout", JSON.stringify(emptyWorkout)) : SecureStore.setItem("Workout", JSON.stringify(emptyWorkout));
    router.push({pathname: "/(workout)/add_exercise"});
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}> 
        <View style={styles.container}>
          <View style={styles.main_content}>

            <TextInput
              style={styles.workout_input}
              value={workoutName}
              onChangeText={setWorkoutName}
              placeholder='Enter Workout'
            />

            <Pressable disabled={workoutName === ''} style={workoutName != '' ? styles.workout_button_enabled : styles.workout_button_disabled} onPress={() => gotoAddExercise(workoutName)}>
              <Text style={workoutName != '' ? styles.workout_button_text_enabled : styles.workout_button_text_disabled}>Add Workout</Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
      {/* Current Steps */}
      <StepCounter current_step={1}></StepCounter>
    </SafeAreaView>

  )
}

export default workout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "10%",
    // justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: "#ff9302"
  },

  main_content: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    // justifyContent: "space-evenly"
  },

  workout_input: {
    fontSize: 40,
    borderBottomWidth: 2,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
    fontFamily: "Nunito_400Regular",
    textAlign: "center",
    width: "100%",
    maxWidth: 1000
    // backgroundColor: "#707ebd"
  },

  workout_button_enabled: {
    // fontSize: 48
    marginTop: 85,
    // padding: 25,
    backgroundColor: '#166fe3',
    // borderWidth: 2,
    // borderColor: "#97a9ff",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "85%",
    height: 60,
    elevation: 2,
    justifyContent: "center",
    borderRadius: 10
  },

  workout_button_disabled: {
    // padding: 25,
    marginTop: 85,
    backgroundColor: '#dfdfdf',
    // borderWidth: 2,
    // borderColor: "#909090",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "85%",
    height: 60,
    elevation: 2,
    justifyContent: "center",
    borderRadius: 10
  },

  workout_button_text_enabled: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: "Nunito_400Regular"
  },

  workout_button_text_disabled: {
    textAlign: 'center',
    color: "#c0c0c0",
    fontSize: 24,
    fontFamily: "Nunito_400Regular"
  },
})