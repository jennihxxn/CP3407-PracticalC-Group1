<template>
  <div class="auth-form">
    <h2 v-if="!waitingVerification">Register</h2>

    <div v-if="!waitingVerification">
      <input v-model="firstName" placeholder="First Name" type="text" class="auth-input" />
      <input v-model="lastName" placeholder="Last Name" type="text" class="auth-input" />
      <input v-model="studentID" placeholder="Student ID" type="text" class="auth-input" />
      <input v-model="phone" placeholder="Phone" type="tel" class="auth-input" />
      <input v-model="email" placeholder="Email" type="email" class="auth-input" />
      <input v-model="password" placeholder="Password" type="password" class="auth-input" />

      <button @click="handleRegister" class="auth-button primary">
        Register
      </button>

      <p class="toggle-mode" @click="goLogin">Already have an account? Login</p>
    </div>

    <div v-else>
      <h3>Verify Your Email</h3>
      <p>A verification email has been sent to <b>{{ email }}</b>.</p>
      <p>Please check your inbox and verify your email.</p>
      <p class="countdown">{{ countdown }} seconds remaining...</p>

      <button @click="checkEmailVerified" class="auth-button primary">I have verified</button>
      <button @click="resendVerificationEmail" class="auth-button secondary">Resend Email</button>

      <p class="toggle-mode" @click="goLogin">Back to Login</p>
    </div>

    <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, reload } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const studentID = ref('');
const phone = ref('');
const errorMsg = ref('');
const waitingVerification = ref(false);
const countdown = ref(300);

let intervalId = null;
let currentUser = null;

const handleRegister = async () => {
  errorMsg.value = '';

  if (!email.value || !password.value || !firstName.value || !lastName.value || !studentID.value || !phone.value) {
    errorMsg.value = 'Please fill in all fields';
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    currentUser = userCredential.user;

    await sendEmailVerification(currentUser);
    waitingVerification.value = true;
    startCountdown();
  } catch (err) {
    errorMsg.value = err.message;
  }
};

const startCountdown = () => {
  countdown.value = 300;
  intervalId = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(intervalId);
      errorMsg.value = 'Email verification timeout. Please try again.';
      waitingVerification.value = false;
    }
  }, 1000);
};

const checkEmailVerified = async () => {
  try {
    await reload(currentUser);
    if (currentUser.emailVerified) {
      clearInterval(intervalId);
      alert('Email verified! Proceeding...');

      const idToken = await currentUser.getIdToken();

      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + idToken,
        },
        body: JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          studentID: studentID.value,
          phone: phone.value,
          email: email.value,
          uid: currentUser.uid,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');

      alert('Registration complete. Please log in.');
      router.push('/login');
    } else {
      errorMsg.value = 'Email is not verified yet.';
    }
  } catch (err) {
    errorMsg.value = err.message;
  }
};

const resendVerificationEmail = async () => {
  try {
    await sendEmailVerification(currentUser);
    errorMsg.value = 'Verification email resent.';
  } catch (err) {
    errorMsg.value = err.message;
  }
};

const goLogin = () => {
  clearInterval(intervalId);
  router.push('/login');
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  border: 1.8px solid #ccc;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.05);
  font-family: 'Segoe UI', sans-serif;
}

.auth-input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: border 0.3s;
}
.auth-input:focus {
  border-color: #3b82f6;
  outline: none;
}

.auth-button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  margin-top: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.25s ease;
}
.auth-button.primary {
  background: #3b82f6;
  color: white;
  border: none;
}
.auth-button.primary:hover {
  background: #2563eb;
}
.auth-button.secondary {
  background: #f3f3f3;
  color: #333;
  border: 1px solid #ccc;
}
.auth-button.secondary:hover {
  background: #e2e2e2;
}

.toggle-mode {
  text-align: center;
  margin-top: 20px;
  color: #3b82f6;
  cursor: pointer;
  font-size: 14px;
}
.toggle-mode:hover {
  text-decoration: underline;
}

.countdown {
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
  color: #555;
}

.error-msg {
  color: red;
  font-size: 14px;
  margin-top: 12px;
  text-align: center;
}
</style>
