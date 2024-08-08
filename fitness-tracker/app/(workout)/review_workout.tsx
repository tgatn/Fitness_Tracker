import { View, Text, Platform, Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts, Nunito_400Regular, Nunito_300Light, Nunito_700Bold } from '@expo-google-fonts/nunito';
import * as SecureStore from 'expo-secure-store';
import workout from '../(tabs)/workout';
import StepCounter from '../components/StepCounter';
import { Workout } from '@/constants/Workout';
import { Exercise } from '@/constants/Exercise';
import { WorkoutSet } from '@/constants/WorkoutSet';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { Query, Account, Client, Databases, ID, Models } from "react-native-appwrite";

const review_workout = () => {
  const workoutString = (Platform.OS === "web") ? localStorage.getItem("Workout") : SecureStore.getItem("Workout");

  const workoutObj: Workout = JSON.parse(String(workoutString));

  const [exercises, setExercises] = React.useState<Exercise[]>(workoutObj.exercise);
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_300Light,
    Nunito_700Bold
  });

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('66428f1f00157e6777fa'); // Your project ID
  const databases = new Databases(client);
  const account = new Account(client);

  async function sendtoDB2() {

    try {
      await databases.createDocument(
        '66428ffb001998f7402f', // databaseId
        '66aaf641000f9a099fa2', // collectionId
        ID.unique(), // documentId
        workoutObj // data
      )
      router.push({ pathname: "/home" });

    } catch (error) {
      console.log(error);
      // TODO: Create either a page or message that tells the user that the workout could not be created. Allow them
      // to recreate the workout.
    }

  }

  // const [hideExercise, setHideExercise] = React.useState(Array(exercisesObj.exercise.length).fill(false));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>

          <View>
            <Text>Great Job!{"\n"}You finished the {workoutObj.name} workout.</Text>
          </View>
          {exercises.map((exr, exrIdx) => (
            <View key={exrIdx} style={styles.exercise_container}>
              <Text>{exr.name}</Text>
              {exr.workoutSet.map((exerciseSet: WorkoutSet, exerciseSetIdx: number) => (
                <View key={exerciseSetIdx}>
                  <View>
                    <Text>Set {exerciseSetIdx + 1}</Text>
                    {exerciseSet.warmUp && <Text>Warm Up Set</Text>}
                    <Text>Reptition: {exerciseSet.repetition}</Text>
                    <Text>Weight: {exerciseSet.weight}</Text>
                    <Text>RestTime: {exerciseSet.restTime}</Text>
                  </View>
                </View>
              ))}
            </View>

            // <View>

            // </View>

          ))}
        </ScrollView>
        <Button title="POST TO DB2" onPress={() => sendtoDB2()} />
        {/* Current Steps */}
        <StepCounter current_step={4}></StepCounter>
      </View>
    </SafeAreaView>
  )
}

export default review_workout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  exercise_container: {
    // backgroundColor: "#707ebd",
    paddingBottom: 25

  },
  exercise_header_container: {
    borderWidth: 2,
    backgroundColor: "#707ebd",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  exercise_text: {
    paddingLeft: 10,
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
})