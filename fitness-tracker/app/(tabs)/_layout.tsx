import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import Ionicons from 'react-native-vector-icons/Ionicons';


const TabsLayout = () => {
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
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName = "home-outline";
                            return <Ionicons name={iconName} size={size} color={color} />;
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
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName = "add-circle-outline";
                            return <Ionicons name={iconName} size={size} color={color} />;
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
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName = "person-outline";
                            return <Ionicons name={iconName} size={size} color={color} />;
                        }
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({
    tab_background: {
        backgroundColor: "#707ebd"
    }
})