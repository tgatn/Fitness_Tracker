import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Button } from 'react-native';
import StepCounter from '../components/StepCounter';

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Full Body</Text>
      <ScrollView style={styles.scrollContainer}>
        {['Push Up', 'Squat', 'Pull Up'].map((exercise, index) => (
          <View key={index} style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise}</Text>
            {[1, 2, 3].map((set, setIndex) => (
              <View key={setIndex} style={styles.setContainer}>
                <Text>Reps:</Text>
                <TextInput style={styles.input} keyboardType="numeric" />
                <Text>Weight:</Text>
                <TextInput style={styles.input} keyboardType="numeric" />
                <Text style={styles.rest}>Rest:</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <Button title="Finish Workout" onPress={() => { }} />
      <StepCounter current_step={3}></StepCounter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  exerciseContainer: {
    marginBottom: 20,
    backgroundColor: '#e0e7ff',
    padding: 10,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  setContainer: {
    marginBottom: 10,
    backgroundColor: '#f5f5f5',

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    width: 60,
  },
  rest: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default profile;
