import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';

interface stepCounterProps {
  /** The text to display inside the button */
  current_step: number;
}

export default function StepCounter({ current_step }: stepCounterProps) {
  // function current_steps(number: stepCounterProps) {

  // }

  return (
    <View style={styles.steps_container}>
      <View style={styles.individual_step_container}>
        <Text style={styles.step_text}>Add Workout</Text>
        <Text style={current_step == 1 ? styles.inprogress_step : styles.completed_step}>1</Text>
      </View>
      <View style={styles.individual_step_container}>
        <Text style={styles.step_text}>Add Exercises</Text>
        <Text style={current_step == 2 ? styles.inprogress_step : (current_step < 2 ? styles.uncompleted_step : styles.completed_step)}>2</Text>
      </View>
      <View style={styles.individual_step_container}>
        <Text style={styles.step_text}>Add Reps</Text>
        <Text style={current_step == 3 ? styles.inprogress_step : (current_step < 3 ? styles.uncompleted_step : styles.completed_step)}>3</Text>
      </View>
      <View style={styles.individual_step_container}>
        <Text style={styles.step_text}>Review</Text>
        <Text style={current_step == 4 ? styles.inprogress_step : (current_step < 4 ? styles.uncompleted_step : styles.completed_step)}>4</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  steps_container: {
    width: "100%",
    // flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: "flex-end"
    position: 'relative',
    marginTop: "80%"
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
  },

  completed_step: {
    backgroundColor: "#7cc42c",
    borderRadius: 300,
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 13
  },

  uncompleted_step: {
    backgroundColor: "#d9d9d9",
    borderRadius: 300,
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 13
  }
})