<template>
  <div style="max-width: 320px; margin: 100px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
    <h2>{{ isRegister ? 'Register' : 'Login' }}</h2>
    <input
      v-model="email"
      placeholder="Email"
      type="email"
      style="width: 100%; padding: 8px; margin: 8px 0;"
    />
    <input
      v-model="password"
      placeholder="Password"
      type="password"
      style="width: 100%; padding: 8px; margin: 8px 0;"
    />
    <button
      @click="handleSubmit"
      style="width: 100%; padding: 10px; background: #3b82f6; color: white; border: none; border-radius: 4px;"
    >
      {{ isRegister ? 'Register' : 'Login' }}
    </button>
    <p v-if="errorMsg" style="color: red; margin-top: 10px;">{{ errorMsg }}</p>
    <p
      style="margin-top: 10px; cursor: pointer; color: #3b82f6;"
      @click="toggleMode"
    >
      {{ isRegister ? 'Already have an account? Login' : "Don't have an account? Register" }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from "../firebase"; 
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const email = ref('');
const password = ref('');
const errorMsg = ref('');
const isRegister = ref(false);

const toggleMode = () => {
  errorMsg.value = '';
  isRegister.value = !isRegister.value;
};

const handleSubmit = async () => {
  errorMsg.value = '';

  try {
    let userCredential;
    if (isRegister.value) {
      // Register new user
      userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    } else {
      // Login existing user
      userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    }

    const user = userCredential.user;
    const idToken = await user.getIdToken();

    console.log('ID Token:', idToken);

    // Send ID Token to backend for verification
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + idToken,
      },
      body: JSON.stringify({ idToken }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`${isRegister.value ? 'Registration' : 'Login'} successful. Welcome, ${data.email}`);
    } else {
      errorMsg.value = data.error || 'Server returned an error';
    }
  } catch (error) {
    errorMsg.value = error.message || 'Operation failed';
    console.error(`${isRegister.value ? 'Registration' : 'Login'} failed:`, error);
  }
};
</script>

