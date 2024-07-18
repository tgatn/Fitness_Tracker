import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs, Redirect, Slot } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function TabsLayout() {

    return (
        <>
            <Tabs

                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: "#707ebd"
                    },
                    tabBarActiveTintColor: "#FFFFFF",
                    tabBarInactiveTintColor: "#000000",
                    tabBarShowLabel: true,
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: "#707ebd"
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Ionicons name="home-outline" size={size} color={color} />;
                        }
                    }}
                />
                <Tabs.Screen
                    name="workout"
                    options={{
                        title: 'Workout',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: "#707ebd"
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Ionicons name="add-circle-outline" size={size} color={color} />;
                        }
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: "#707ebd",
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Ionicons name="person-outline" size={size} color={color} />;
                        }
                    }}
                />
            </Tabs>


        </>


    )
}

const styles = StyleSheet.create({
    tab_background: {
        backgroundColor: "#707ebd"
    }
})