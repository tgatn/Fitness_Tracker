import { View, Text, StyleSheet, Button, TextInput, ScrollView, Pressable, Image } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useFonts, Nunito_400Regular, Nunito_300Light, Nunito_700Bold } from '@expo-google-fonts/nunito';
import StepCounter from '../components/StepCounter';
import * as SecureStore from 'expo-secure-store';
import Ionicons from '@expo/vector-icons/Ionicons';

const add_exercise = () => {

  const params = useLocalSearchParams();

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_300Light,
    Nunito_700Bold
  });

  const workoutName = params['name'];

  const exercise = {
    name: "",
    workoutSet: 0,
  }

  const [exercises, setExercises] = React.useState<typeof exercise[]>([]);

  const exerciseLimit = 10;

  const test = [1, 2, 3];

  function addEmptyExercise() {
    const exercise = {
      name: "",
      workoutSet: 0,
    }
    if (exercises.length <= exerciseLimit) {
      setExercises([...exercises, exercise]);
    }
    else {

    }

    console.log(exercises);
  }

  function updateExerciseList(value: any, count: number, isName: boolean) {
    const newExercise = exercises[count];
    (isName ? newExercise.name = value : newExercise.workoutSet = value)
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

  function gotoAddReps(exercises: typeof exercise[]) {
    console.log(exercises);
    const e = JSON.stringify(exercises); // converts JSON to string
    // router.push({ pathname: "/add_reps", params: { e, workoutName } });
    SecureStore.setItem("Workout", e);
    router.push({ pathname: "/add_reps" });
  }

  return (
    <ScrollView>
      <Text>Workout: {workoutName}</Text>
      <View style={styles.label_container}>
        <Text style={styles.label}>Exercise</Text>
        <Text style={styles.label}># of Sets</Text>
      </View>

      {exercises.length === 0 && <Text >Add an exercise</Text>}

      <View style={styles.exercise_list_container}>
        {exercises.map((exercise, count) => (

          <View key={count} style={styles.exercise_container}>
            <TextInput
              style={styles.exercise_input}
              // placeholder='Enter exercise name'
              onChangeText={(e) => updateExerciseList(e, count, true)}
              value={String(exercise.name)}
            />
            <TextInput
              style={styles.exercise_input}
              // placeholder='Enter set amount'
              onChangeText={(e) => updateExerciseList(e, count, false)}
              inputMode="numeric"
              value={String(exercise.workoutSet)}
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

      {/* Current Steps */}
      <StepCounter current_step={2}></StepCounter>
    </ScrollView>
  )
}

export default add_exercise

const styles = StyleSheet.create({
  label_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  label: {
    fontSize: 32,
    fontWeight: 'bold'
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
    width: "40%"
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