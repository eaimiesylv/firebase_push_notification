import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import './firebase'; // Import Firebase configuration
import { requestPermissionAndGetToken } from './firebase';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((err) => console.error("Service Worker registration failed:", err));
    });
  }
  
  // Request notification permissions on app load
  requestPermissionAndGetToken();

createApp(App).mount('#app')
