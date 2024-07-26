import { View, Text, StyleSheet, Button, TextInput, ScrollView, Pressable, Image, Platform, SafeAreaView } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { useFonts, Nunito_400Regular, Nunito_300Light, Nunito_700Bold } from '@expo-google-fonts/nunito';
import StepCounter from '../components/StepCounter';
import * as SecureStore from 'expo-secure-store';
import Ionicons from '@expo/vector-icons/Ionicons';
import workout from '../(tabs)/workout';
import { Workout } from '@/constants/Workout';
import { Exercise } from '@/constants/Exercise';
import { WorkoutSet } from '@/constants/WorkoutSet';

export default function add_exercise() {

  // Fonts
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_300Light,
    Nunito_700Bold
  });

  // Gets workout as a JSON string
  const workoutString = (Platform.OS === "web") ? localStorage.getItem("Workout") : SecureStore.getItem("Workout");
  // Converts workout string as a workout object 
  const workoutObj = JSON.parse(String(workoutString));

  // Exercise object
  const exercise = {
    name: "",
    workoutSet: [],
    workoutSetAmount: 0
  }

  // Usestate to hold a list of exercise
  const [exercises, setExercises] = React.useState<typeof exercise[]>(workoutObj.exercise);

  // Max number of exercises the user can add
  const exerciseLimit = 10;

  /**
   * Adds a empty exercise for the user to input a exercise name and set number
   */
  function addEmptyExercise() {
    const exercise = {
      name: "",
      workoutSet: [],
      workoutSetAmount: 0
    }
    if (exercises.length <= exerciseLimit) {
      setExercises([...exercises, exercise]);
    }
    else {
      // TODO Add Toast for when user reaches 10 exercises
    }

    console.log(exercises);
  }

  /**
   * Updates exercise list based on user input
   * @param value either the name of the exercise or number of set
   * @param count index in exercise array
   * @param isName true when the name of the exercise is being changed
   */
  function updateExerciseList(value: any, count: number, isName: boolean) {
    const newExercise = exercises[count];
    (isName ? newExercise.name = value : newExercise.workoutSetAmount = value)
    const newExerciseList = exercises.map((e, c) => {
      if (c === count) {
        return newExercise;
      } else {
        return e;
      }
    });

    setExercises(newExerciseList);
    console.log(exercises);
  }

  /**
   * Navigates user to the third step of adding workout: adding reps
   * @param list_of_exercises A list of exercises and their associated amount of sets
   */
  async function gotoAddReps(list_of_exercises: typeof exercise[]) {

    const emptySet: WorkoutSet = {
      restTime: 0,
      warmUp: false,
      repetition: 0,
      weight: 0
    }

    // Append empty workout sets
    // list_of_exercises.map(exercise => {
    //   let ex = new_exercise;
    //   ex.name = exercise.name;
    //   // for(let i = 0; i < exercise.workoutSetAmount; i++) {
    //   //   ex.workoutSet.push(emptySet);
    //   // }
    //   console.log("THIS IS THE EXERCISE WE ARE ADDING:", ex);
    //   workoutObj.exercise.push(ex);
    // });


    // Clear workoutObj exercises if not empty
    workoutObj.exercise = [];

    list_of_exercises.map(e => {
      const new_exercise: Exercise = {
        name: "",
        workoutSet: []
      }
      new_exercise.name = e.name;
      for (let i = 0; i < e.workoutSetAmount; ++i) {
        new_exercise.workoutSet.push(emptySet);
      }

      workoutObj.exercise.push(new_exercise);
    })
    // workoutObj.exercise = list_of_exercises;

    const workoutObjStr = JSON.stringify(workoutObj); // converts JSON to string



    // (Platform.OS === "web") ? localStorage.removeItem("Workout") : await SecureStore.deleteItemAsync("Workout");
    // console.log("THE ITEM SHOULD HAVE BEEN REMOVED!!!!");
    ///localStorage.removeItem("Workout");
    (Platform.OS === "web") ? localStorage.setItem("Workout", workoutObjStr) : SecureStore.setItem("Workout", workoutObjStr);
    // console.log("test")
    // console.log(workoutObj)

    router.push({ pathname: "/(workout)/add_reps" });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 48, textAlign: 'center', fontFamily: "Nunito_700Bold" }}>Workout: {workoutObj.name}</Text>
        <View style={styles.label_container}>
          <Text style={styles.label}>Exercise</Text>
          <Text style={styles.label}># of Sets</Text>
        </View>

        {exercises.length === 0 && <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 20 }}>Add an exercise</Text>}

        <View style={styles.exercise_list_container}>
          {exercises.map((exercise, count) => (

            <View key={count} style={styles.exercise_container}>
              <TextInput
                style={styles.exercise_input}
                onChangeText={(e) => updateExerciseList(e, count, true)}
                value={String(exercise.name)}
              />
              <TextInput
                style={styles.exercise_input}
                onChangeText={(e) => updateExerciseList(e, count, false)}
                inputMode="numeric"
                value={String(exercise.workoutSetAmount)}
              />

              <Pressable
                onPress={() => { setExercises(exercises.filter((e) => e !== exercise)) }}
              >
                <Ionicons
                  name="trash-outline"
                  color="red"
                  size={28}
                />
              </Pressable>

            </View>

          ))}


        </View>

        <View style={styles.button_container}>

          <Pressable
            disabled={exercises.length >= exerciseLimit}
            onPress={(e) => addEmptyExercise()}
            style={exercises.length >= exerciseLimit ? styles.add_exercise_button_disabled : styles.add_exercise_button_enabled}
          >
            <Text style={exercises.length >= exerciseLimit ? styles.add_exercise_text_disabled : styles.add_exercise_text_enabled}>
              Add Exercise
            </Text>
          </Pressable>

          <Pressable
            onPress={(e) => gotoAddReps(exercises)}
            style={styles.add_exercise_button_enabled}>
            <Text style={styles.add_exercise_text_enabled}>
              Workout
            </Text>
          </Pressable>

        </View>


      </ScrollView>
      {/* Current Steps */}
      <StepCounter current_step={2}></StepCounter>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  label_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  label: {
    fontSize: 32,
    // fontWeight: 'bold'
    fontFamily: "Nunito_700Bold"
  },
  exercise_list_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  exercise_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20
  },
  exercise_input: {
    borderBottomWidth: 2,
    textAlign: 'center',
    width: "40%",
    fontFamily: "Nunito_400Regular"
  },

  button_container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
  },

  add_exercise_button_enabled: {
    // fontSize: 48
    marginTop: 40,
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

  add_exercise_button_disabled: {
    // padding: 25,
    marginTop: 40,
    backgroundColor: '#dfdfdf',
    // borderWidth: 2,
    // borderColor: "#909090",
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

  add_exercise_text_disabled: {
    textAlign: 'center',
    color: "#c0c0c0",
    fontSize: 24,
    fontFamily: "Nunito_400Regular"
  },
})