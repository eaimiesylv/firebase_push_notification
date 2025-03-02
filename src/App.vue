<script setup>
import { ref } from 'vue';
import { requestPermissionAndGetToken } from './firebase'; // ✅ Correct import

// State to store FCM token
const fcmToken = ref('');

// Function triggered when the button is clicked
const handleGenerateToken = async () => {
  const token = await requestPermissionAndGetToken();
  if (token) {
    fcmToken.value = token;
    console.log('FCM Token:', token);
  }else{
    console.log('Failed to generate FCM token');}
};
</script>

<template>
  <header>
    <h1>FCM Token Generator</h1>
    <button @click="handleGenerateToken">Generate FCM Token</button>
    <p v-if="fcmToken">Generated Token: {{ fcmToken }}</p>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  margin-top: 40px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
}

p {
  margin-top: 20px;
  word-break: break-all;
  color: #333;
}
</style>
