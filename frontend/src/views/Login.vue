<template>
  <div class="auth-form">
    <h2>Login</h2>
    <input
      v-model="email"
      placeholder="Email"
      type="email"
      class="auth-input"
    />
    <input
      v-model="password"
      placeholder="Password"
      type="password"
      class="auth-input"
    />
    <button @click="handleLogin" class="auth-button">
      Login
    </button>
    <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
    <p class="toggle-mode" @click="goRegister">
      Don't have an account? Register
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const errorMsg = ref('');
const router = useRouter();

const handleLogin = async () => {
  errorMsg.value = '';

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    // verify the idtoken
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
      alert(`Login successful. Welcome, ${data.email}`);
      // login success than jump to home page (use booking replace first ) 
      router.push('/booking');
    } else {
      errorMsg.value = data.error || 'Server returned an error';
    }
  } catch (error) {
    errorMsg.value = error.message || 'Login failed';
    console.error('Login failed:', error);
  }
};

const goRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.auth-form {
  max-width: 320px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.auth-input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
}
.auth-button {
  width: 100%;
  padding: 10px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.error-msg {
  color: red;
  margin-top: 10px;
}
.toggle-mode {
  margin-top: 10px;
  cursor: pointer;
  color: #3b82f6;
  user-select: none;
}
</style>

