import { Stack, router } from "expo-router";
import { Pressable, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function WorkoutLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="add_exercise"
                    options={
                        {
                            title: "Add Exercise(s) to Workout",
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: "#707ebd",
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            headerLeft: () => <Pressable onPress={router.back}><Ionicons name="arrow-back" style={{color: "white", fontSize: 25, paddingLeft: 10}} /></Pressable>
                        }}
                />
                <Stack.Screen
                    name="add_reps"
                    options={
                        {
                            title: "Add Stats to Each Exercise",
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: "#707ebd",
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            headerLeft: () => <Pressable onPress={router.back}><Ionicons name="arrow-back" style={{color: "white", fontSize: 25, paddingLeft: 10}} /></Pressable>
                        }}
                />
                <Stack.Screen
                    name="review_workout"
                    options={
                        {
                            title: "Review Workout",
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: "#707ebd",
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            headerLeft: () => <Pressable onPress={router.back}><Ionicons name="arrow-back" style={{color: "white", fontSize: 25, paddingLeft: 10}} /></Pressable>
                        }}
                />

            </Stack>
        </>
    )
}