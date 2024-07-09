import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import {  useFonts, Nunito_400Regular, Nunito_300Light, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { router } from 'expo-router';
// import { Step_Counter } from '../../components/step_counter'

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

  function gotoAddReps(exercises: typeof exercise[]) {
    const e = JSON.stringify(exercises); // converts JSON to string
    router.push({pathname: "/add_reps", params: {e, workoutName}});
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
            <TextInput style={styles.exercise_input} />
            <TextInput style={styles.exercise_input} inputMode="numeric" />
            {/* <Text>HEY THE COUNT IS: {cou</Text> */}
          </View>

        ))}


      </View>

      {/* TODO: Change Button component to Pressable and Text */}
      <Button
        title="Add Exercise"
        onPress={(e) => addEmptyExercise()}
        disabled={exercises.length >= exerciseLimit}
      />

      {/* TODO: Change Button component to Pressable and Text */}
      <Button
        title="Workout"
        onPress={(e) => gotoAddReps(exercises)}
      />

      {/* Current Steps */}
      <View style={styles.steps_container}>
            <View style={styles.individual_step_container}>
              <Text style={styles.step_text}>Add Workout</Text>
              <Text style={styles.inprogress_step}>1</Text>
            </View>
            <View style={styles.individual_step_container}>
              <Text style={styles.step_text}>Add Exercises</Text>
              <Text style={styles.inprogress_step}>2</Text>
            </View>
            <View style={styles.individual_step_container}>
              <Text style={styles.step_text}>Add Reps</Text>
              <Text style={styles.inprogress_step}>3</Text>
            </View>
            <View style={styles.individual_step_container}>
              <Text style={styles.step_text}>Review</Text>
              <Text style={styles.inprogress_step}>4</Text>
            </View>
          </View>
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
    // height: "50%"
  },
  exercise_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20
  },
  exercise_input: {
    borderBottomWidth: 2,
    textAlign: 'center',
    width: "40%"
  },
  steps_container: {
    marginTop: 250,
    width: "100%",
    // flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: "flex-end"
    marginBottom: 25
  },

  individual_step_container: {
    justifyContent: "center",
    alignItems: "center"
  },

  step_text: {
    fontSize: 16,
    fontFamily: "Nunito_300Light"
  },

  inprogress_step: {
    backgroundColor: "#FFC634",
    borderRadius: 300,
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 13
    // height: Dimensions.get('window').width * 0.02,
    // width: Dimensions.get('window').width * 0.02
    // flex: 1
    // borderCurve: 50
  }
})