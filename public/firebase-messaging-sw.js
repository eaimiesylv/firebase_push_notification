// Import Firebase scripts for modular SDK
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "***********",
  authDomain:  "***********",
  projectId:  "***********",
  storageBucket:  "***********",
  messagingSenderId:  "***********",
  appId:  "***********",
  measurementId:  "***********",
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
