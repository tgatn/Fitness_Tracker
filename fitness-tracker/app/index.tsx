import { Link } from "expo-router";
import { Text, View, Platform, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Client, Account, ID } from 'react-native-appwrite';
import React, { useState } from 'react';

let client;
let account;

client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66428f1f00157e6777fa')
  .setPlatform('localhost');

account = new Account(client);

export default function Index() {

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  async function register(email, password, name) {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
    setLoggedInUser(await account.get());
  }
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>This is the landing page</Text>
        <Link href="/home" style={{ color: 'blue' }}> Go to Home</Link>
        <Text>Device being used: {Platform.OS}</Text>
      </View>

      <View style={styles.root}>
        <Text>
          {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => login(email, password)}
          >
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => register(email, password, name)}
          >
            <Text>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await account.deleteSession('current');
              setLoggedInUser(null);
            }}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  // ... define some tyles
  root: {
    marginTop: 40,
    marginBottom: 40
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
});
