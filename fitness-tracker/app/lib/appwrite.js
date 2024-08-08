// import React, { useState } from 'react';

// export const appwriteconfig = {
//     endpoint: "https://cloud.appwrite.io/v1",
//     projectID: "66428f1f00157e6777fa",
//     platformID: "localhost",
//     databaseID: "",
//     collectionID: "",
// }

// let client;
// let account;

// client = new Client();
// client
//   .setEndpoint(appwriteConfig.endpoint)
//   .setProject(appwriteConfig.projectID)
//   .setPlatform(appwriteConfig.platformID);

// const [loggedInUser, setLoggedInUser] = useState(null);
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [name, setName] = useState('');

// export async function login(email, password) {
//   await account.createEmailPasswordSession(email, password);
//   setLoggedInUser(await account.get());
// }

// export async function register(email, password, name) {
//   await account.create(ID.unique(), email, password, name);
//   await login(email, password);
//   setLoggedInUser(await account.get());
// }