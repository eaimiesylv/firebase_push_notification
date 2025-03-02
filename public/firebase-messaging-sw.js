// Import Firebase scripts for modular SDK
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyDG9u1hP0XL_HHfdqZxAH7kS_71xod9kRA",
  authDomain: "gochacha-696f8.firebaseapp.com",
  projectId: "gochacha-696f8",
  storageBucket: "gochacha-696f8.firebasestorage.app",
  messagingSenderId: "221868653514",
  appId: "1:221868653514:web:0ea669d8e2a60c6058ad33",
  measurementId: "G-HDG57KN0KQ"
});

// Retrieve messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Update to your app icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
