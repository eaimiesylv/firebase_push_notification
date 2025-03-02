 import { initializeApp } from 'firebase/app';
 //import { getMessaging,getToken } from 'firebase/messaging';
 import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG9u1hP0XL_HHfdqZxAH7kS_71xod9kRA",
  authDomain: "gochacha-696f8.firebaseapp.com",
  projectId: "gochacha-696f8",
  storageBucket: "gochacha-696f8.firebasestorage.app",
  messagingSenderId: "221868653514",
  appId: "1:221868653514:web:0ea669d8e2a60c6058ad33",
  measurementId: "G-HDG57KN0KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//console.log(app.name)

const messaging =  getMessaging(app);
function requestPermissionAndGetToken() {
  return getToken(messaging, { vapidKey: 'BELEyfixMvm_NKi3mtd3-9RbeOsnFcvbcnRu6VKY4QGUBBUfS0lE18A6SuUcjQ-jl-i38inL4f1yBlblJEsvMic' }).then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
      // Send the token to your server
      return currentToken;
    } else {
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
}
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Customize how you want to handle the notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
      body: payload.notification.body,
      icon: '/firebase-logo.png'
  };

  if (Notification.permission === 'granted') {
      new Notification(notificationTitle, notificationOptions);
  }
});
  export { messaging, requestPermissionAndGetToken };