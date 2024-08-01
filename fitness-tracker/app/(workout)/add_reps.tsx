import { View, Text, Button, Platform, StyleSheet, ScrollView, SafeAreaView, TextInput, Switch, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { useFonts, Nunito_400Regular, Nunito_300Light, Nunito_700Bold } from '@expo-google-fonts/nunito';
import * as SecureStore from 'expo-secure-store';
import StepCounter from '../components/StepCounter';
import { Workout } from '@/constants/Workout';
import { Exercise } from '@/constants/Exercise';
import { WorkoutSet } from '@/constants/WorkoutSet';
import { Ionicons } from '@expo/vector-icons';
import workout from '../(tabs)/workout';

const add_reps = () => {



  const workoutStr = (Platform.OS === "web") ? localStorage.getItem("Workout") : SecureStore.getItem("Workout");

  const workoutObj = JSON.parse(String(workoutStr));

  const [exercises, setExercises] = React.useState<typeof Exercise[]>(workoutObj.exercise);

  const [hideExercise, setHideExercise] = React.useState(Array(workoutObj.exercise.length).fill(false));

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_300Light,
    Nunito_700Bold
  });

  function changeHideStatus(idx: number) {

    const newHideStatus = hideExercise.map((e, c) => {
      if (idx === c) {
        if (hideExercise[idx]) {
          return false;
        } else {
          return true;
        }
      } else {
        return e;
      }
    })

    setHideExercise(newHideStatus);
  }

  function updateExerciseSet(exrIdx: number, exerciseSetIdx: number, workoutSetAttribute: String, val: any) {
    const newExercise = exercises[exrIdx];
    if (workoutSetAttribute === "RestTime") {
      newExercise.workoutSet[exerciseSetIdx].restTime = val;
    } else if (workoutSetAttribute === "Repetition") {
      newExercise.workoutSet[exerciseSetIdx].repetition = val;
    } else if (workoutSetAttribute === "WarmUp") {
      newExercise.workoutSet[exerciseSetIdx].warmUp = val;
    } else if (workoutSetAttribute === "Weight") {
      newExercise.workoutSet[exerciseSetIdx].weight = val;
    }

    const newExerciseList = exercises.map((exr, idx) => {
      if (idx === exrIdx) {
        return newExercise;
      } else {
        return exr;
      }
    });

    setExercises(newExerciseList);
  }

  function gotoReview(list_of_exercises: Exercise[]) {
    // Clear workoutObj exercises if not empty
    workoutObj.exercise = [];

    list_of_exercises.map(e => {
      workoutObj.exercise.push(e);
    })

    const workoutObjStr = JSON.stringify(workoutObj); // converts JSON to string

    console.log(workoutObj);

    (Platform.OS === "web") ? localStorage.setItem("Workout", workoutObjStr) : SecureStore.setItem("Workout", workoutObjStr);
    router.push({ pathname: "/(workout)/review_workout" });

  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {/* Loop through the exercises */}
          {exercises.map((exr, exrIdx) => (
            <View key={exrIdx} style={styles.exercise_container}>

              {/* Header of each exercise including the name of exercise and expand/minimize icon */}
              <View style={styles.exercise_header_container}>
                <Text style={styles.exercise_text}>{exr.name}</Text>

                <Pressable onPress={() => changeHideStatus(exrIdx)}>
                  {hideExercise[exrIdx] ?

                    <Ionicons
                      name="arrow-down"
                      style={{ paddingTop: 8, paddingRight: 10, color: "white" }}
                      size={28}
                    /> :

                    <Ionicons
                      name="arrow-up"
                      style={{ paddingTop: 8, paddingRight: 10, color: "white" }}
                      size={28}
                    />}
                </Pressable>
              </View>



              {/* Loop through each set in an exercise */}
              {!hideExercise[exrIdx] && exr.workoutSet.map((exerciseSet: WorkoutSet, exerciseSetIdx: number) => (
                <View key={exerciseSetIdx} style={styles.exerciseSet_container}>

                  <View style={{ paddingLeft: 10, paddingRight: 10, alignItems: "center", justifyContent: "center", borderWidth: 2 }}>
                    <Text style={{ fontSize: 24, fontFamily: "Nunito_400Regular" }}>Set {exerciseSetIdx + 1}</Text>
                    <View style={styles.exerciseSet_attribute_container}>
                      <Text style={styles.workoutSet_attribute_text}>WarmUp: </Text>
                      <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={exerciseSet.warmUp ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={(e) => updateExerciseSet(exrIdx, exerciseSetIdx, "WarmUp", e)}
                        value={exerciseSet.warmUp}
                      />
                    </View>
                  </View>
                  <View style={{paddingLeft: 10, borderWidth: 2, flex: 1}}>


                    <View style={styles.exerciseSet_attribute_container}>
                      <Text style={styles.workoutSet_attribute_text}>Repetition: </Text>
                      <TextInput
                        onChangeText={(e) => updateExerciseSet(exrIdx, exerciseSetIdx, "Repetition", e)}
                        value={String(exerciseSet.repetition)}
                        style={styles.workoutSet_attribute_input}
                      />
                    </View>

                    <View style={styles.exerciseSet_attribute_container}>
                      <Text style={styles.workoutSet_attribute_text}>Weight: </Text>
                      <TextInput
                        onChangeText={(e) => updateExerciseSet(exrIdx, exerciseSetIdx, "Weight", e)}
                        value={String(exerciseSet.weight)}
                        style={styles.workoutSet_attribute_input}
                      />
                    </View>

                    <View style={styles.exerciseSet_attribute_container}>
                      <Text style={styles.workoutSet_attribute_text}>RestTime: </Text>
                      <TextInput
                        onChangeText={(e) => updateExerciseSet(exrIdx, exerciseSetIdx, "RestTime", e)}
                        value={String(exerciseSet.restTime)}
                        style={styles.workoutSet_attribute_input}
                      />
                    </View>
                  </View>

                </View>
              ))}
            </View>

          ))}
        </ScrollView>

        <View style={{ alignItems: "center" }}>
          <Pressable style={styles.add_exercise_button_enabled} onPress={(e) => gotoReview(exercises)}>
            <Text style={styles.add_exercise_text_enabled}>Review</Text>
          </Pressable>
        </View>

        {/* Current Steps */}
        <StepCounter current_step={3}></StepCounter>
      </View >
    </SafeAreaView >
  )
}

export default add_reps

const styles = StyleSheet.create({
  // Contains entire screen
  container: {
    flex: 1,
    padding: 10,
  },

  // Each Exercise
  exercise_container: {
    // backgroundColor: "#707ebd",
    marginBottom: 25

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
    fontFamily: "Nunito_400Regular"
  },

  // Workout Set for each container
  exerciseSet_container: {
    flexDirection: 'row',
    // backgroundColor: "ffffff"
  },
  exerciseSet_attribute_container: {
    flexDirection: 'row',
  },
  workoutSet_attribute_text: {
    fontFamily: "Nunito_400Regular",
  },
  workoutSet_attribute_input: {
    borderBottomWidth: 2
  },


  // Temp styles
  add_exercise_button_enabled: {
    // fontSize: 48
    // padding: 25,
    backgroundColor: '#166fe3',
    // borderWidth: 2,
    // borderColor: "#97a9ff",
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "85%",
    height: 60,
    elevation: 2,
    justifyContent: "center",
    borderRadius: 10
  },

  add_exercise_text_enabled: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: "Nunito_400Regular"
  },



})
