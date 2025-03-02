 import { initializeApp } from 'firebase/app';
 //import { getMessaging,getToken } from 'firebase/messaging';
 import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "***********",
  authDomain:  "***********",
  projectId:  "***********",
  storageBucket:  "***********",
  messagingSenderId:  "***********",
  appId:  "***********",
  measurementId:  "***********",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//console.log(app.name)

const messaging =  getMessaging(app);
function requestPermissionAndGetToken() {
  return getToken(messaging, { vapidKey: ' "***********"' }).then((currentToken) => {
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