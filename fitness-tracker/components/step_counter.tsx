import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native'

function Step_Counter() {
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
}

export default Step_Counter;

const styles = StyleSheet.create({
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