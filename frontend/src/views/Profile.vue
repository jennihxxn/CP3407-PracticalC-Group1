<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-900">

    <header class="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div class="text-xl font-bold">Logo</div>
      <nav class="space-x-4">
        <a href="index.html" class="hover:underline">Home</a>
        <router-link to="/profile" class="hover:underline">Profile</router-link>
        <a href="contact.html" class="hover:underline">Contact</a>
        <a href="booking.html" class="hover:underline">Booking</a>
        <a href="workout.html" class="hover:underline">Workouts</a>
        <a href="news.html" class="hover:underline">News</a>
      </nav>
    </header>

    <div class="parent p-10 flex-1">
      <div id="authContainer" class="div1 bg-white rounded-2xl flex items-center justify-center">
        <div v-if="!currentUser" class="text-center">
          <h2 class="text-2xl font-bold mb-6">Not Member Yet?</h2>
          <router-link to="/cards" class="bg-black text-white border border-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition">Choose Card</router-link>
          <p class="text-sm text-gray-500 mt-6">
            Have an account?
            <router-link to="/login" class="text-blue-500 hover:text-yellow-400 transition underline">Log In</router-link>
          </p>
        </div>
        <div v-else class="bg-white p-6 rounded-2xl shadow-md w-full">
          <div class="flex items-center gap-4 mb-4">
            <img :src="currentUser.avatar" alt="Profile" class="w-16 h-16 rounded-full object-cover border" />
            <div class="flex flex-col">
              <div class="flex items-center gap-3">
                <h2 class="text-lg font-semibold">
                  <span>{{ currentUser.firstName }}</span>
                  <span>{{ currentUser.lastName }}</span>
                </h2>
                <button @click="openEditModal" class="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm18-11.49a1.003 1.003 0 0 0 0-1.42l-1.59-1.59a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.09-1.09z"/>
                  </svg>
                  <span>Edit</span>
                </button>
              </div>
              <p class="text-sm text-gray-500">{{ currentUser.email }}</p>
            </div>
          </div>
          <hr class="my-4" />
          <div class="space-y-4 text-sm font-medium text-gray-800">
            <div class="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <div class="flex items-center gap-3">
                <img src="/images/icons/user.svg" class="w-5 h-5" alt="Profile" />
                <span>My Profile</span>
              </div>
              <img src="/images/icons/arrow.svg" class="w-4 h-4" alt="Arrow" />
            </div>
            <div class="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <div class="flex items-center gap-3">
                <img src="/images/icons/gear.svg" class="w-5 h-5" alt="Settings" />
                <span>Booking</span>
              </div>
              <img src="/images/icons/arrow.svg" class="w-4 h-4" alt="Arrow" />
            </div>
            <div class="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <div class="flex items-center gap-3">
                <img src="/images/icons/card.svg" class="w-5 h-5" alt="Notification" />
                <span>Cards</span>
              </div>
              <span class="text-sm text-gray-500">Pay</span>
            </div>
            <div class="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer" @click="logout">
              <div class="flex items-center gap-3">
                <img src="/images/icons/logout.svg" class="w-5 h-5" alt="Logout" />
                <span>Log Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="statsCard" class="div2 bg-gray-200 rounded-2xl p-5 flex items-center justify-center text-xl font-semibold">
        <span v-if="!currentUser">Please log in to see your stats.</span>
        <div v-else>
          <p>Membership: {{ membershipInfo }}</p>
          <p>Login Count: {{ currentUser.loginCount }}</p>
        </div>
      </div>

      <div class="div3 bg-white rounded-2xl p-6 flex flex-col items-center justify-center">
        <h1 class="profile-title">Your Booking History</h1>
        <div v-if="loading" class="loading">Loading your bookings...</div>
        <div v-else>
          <div v-if="bookings.length === 0" class="no-bookings">
            You have no bookings yet.
          </div>
          <table class="booking-table" v-else>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Facility</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="booking in bookings" :key="booking.bookingId">
                <td>{{ booking.bookingId }}</td>
                <td>{{ getFacilityName(booking.FacilityID) }}</td>
                <td>{{ formatDate(booking.Date) }}</td>
                <td>{{ booking.StartTime }}</td>
                <td>{{ booking.EndTime }}</td>
                <td>{{ booking.Status || "Confirmed" }}</td>
                <td>
                  <button @click="openBookingEditModal(booking)">Edit</button>
                  <button @click="deleteBooking(booking.bookingId)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <footer class="bg-black text-white py-6 px-4 text-center">
      <p>&copy; 2025 YourSiteName. All rights reserved.</p>
    </footer>

    <div v-if="showEditModal" class="fixed inset-0 bg-black/50 flex justify-center items-center" @click.self="closeEditModal">
      <div class="bg-white rounded-xl p-6 w-[32rem]">
        <h2 class="text-xl font-semibold mb-4">Edit Profile</h2>
        <div class="flex items-center gap-4 mb-4">
          <img :src="editForm.avatarPreview" class="w-16 h-16 rounded-full object-cover border" alt="Avatar preview">
          <div class="flex-1">
            <label class="block text-sm text-gray-700 mb-1">Upload new photo</label>
            <input type="file" accept="image/*" class="text-sm" @change="onAvatarFileChange">
            <p v-show="editErrors.avatar" class="text-xs text-red-600 mt-1">Invalid image file.</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm text-gray-700 mb-1">First name</label>
            <input v-model="editForm.firstName" type="text" class="w-full px-3 py-2 border rounded" />
            <p v-show="editErrors.firstName" class="text-xs text-red-600 mt-1">First name cannot be empty.</p>
          </div>
          <div>
            <label class="block text-sm text-gray-700 mb-1">Last name</label>
            <input v-model="editForm.lastName" type="text" class="w-full px-3 py-2 border rounded" />
            <p v-show="editErrors.lastName" class="text-xs text-red-600 mt-1">Last name cannot be empty.</p>
          </div>
          <div class="col-span-2">
            <label class="block text-sm text-gray-700 mb-1">Email</label>
            <input v-model="editForm.email" type="email" class="w-full px-3 py-2 border rounded" />
            <p v-show="editErrors.email" class="text-xs text-red-600 mt-1">Invalid email. Please enter a valid email address.</p>
          </div>
        </div>
        <div class="mt-5 border-t pt-4">
          <p class="text-sm font-medium mb-2">Change password (optional)</p>
          <div class="grid grid-cols-2 gap-3">
            <div class="col-span-2">
              <label class="block text-sm text-gray-700 mb-1">Current password</label>
              <input v-model="editForm.currentPassword" type="password" class="w-full px-3 py-2 border rounded" />
              <p v-show="editErrors.currentPassword" class="text-xs text-red-600 mt-1">Current password is incorrect.</p>
            </div>
            <div>
              <label class="block text-sm text-gray-700 mb-1">New password</label>
              <input v-model="editForm.newPassword" type="password" class="w-full px-3 py-2 border rounded" />
              <p v-show="editErrors.newPassword" class="text-xs text-red-600 mt-1">Password must be at least 6 characters.</p>
            </div>
            <div>
              <label class="block text-sm text-gray-700 mb-1">Confirm new password</label>
              <input v-model="editForm.confirmNewPassword" type="password" class="w-full px-3 py-2 border rounded" />
              <p v-show="editErrors.confirmNewPassword" class="text-xs text-red-600 mt-1">Passwords do not match.</p>
            </div>
          </div>
          <p v-show="editErrors.passwordBlock" class="text-xs text-red-600 mt-2">To change password, fill all three fields correctly.</p>
        </div>
        <div class="flex justify-end gap-2 mt-6">
          <button @click="closeEditModal" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button @click="saveProfileChanges" class="px-4 py-2 bg-black text-white rounded hover:bg-yellow-400">Save</button>
        </div>
      </div>
    </div>
    
    <div v-if="editModalVisible" class="modal-overlay fixed inset-0 bg-black/50 flex justify-center items-center">
      <div class="modal-content bg-white p-6 rounded-xl w-96">
        <h3 class="text-xl font-semibold mb-4">Edit Booking #{{ editBooking.bookingId }}</h3>
        
        <label class="block mb-2">
          Facility:
          <select v-model="editBooking.FacilityID" class="w-full px-3 py-2 border rounded mt-1">
            <option v-for="f in facilities" :key="f.id" :value="f.id">{{ f.name }}</option>
          </select>
        </label>
        
        <label class="block mb-2">
          Date:
          <input type="date" v-model="editBooking.Date" class="w-full px-3 py-2 border rounded mt-1" />
        </label>
        
        <label class="block mb-2">
          Start Time:
          <input type="time" v-model="editBooking.StartTime" class="w-full px-3 py-2 border rounded mt-1" />
        </label>
        
        <label class="block mb-4">
          End Time:
          <input type="time" v-model="editBooking.EndTime" class="w-full px-3 py-2 border rounded mt-1" />
        </label>

        <div class="modal-buttons flex justify-end gap-2">
          <button @click="submitEdit" class="px-4 py-2 bg-black text-white rounded hover:bg-yellow-400">Save</button>
          <button @click="closeBookingEditModal" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getIdToken } from "../components/GetIdToken";

// --------------------- 本地存储助手函数 ---------------------
const LS_USER_KEY = 'profile_demo_user';
function loadUser() {
  const raw = localStorage.getItem(LS_USER_KEY);
  if (raw) return JSON.parse(raw);
  const def = {
    jcuId: '123',
    password: 'abc123',
    firstName: 'Yermukhamet',
    lastName: 'Akbet',
    email: 'yermukhamet.akbet@my.jcu.edu.au',
    avatar: '/images/blank-profile-picture.jpeg',
    membership: null,
    loginCount: 0,
    lastLoginAt: null,
    lastLogoutAt: null
  };
  localStorage.setItem(LS_USER_KEY, JSON.stringify(def));
  return def;
}
function saveUser(u) {
  localStorage.setItem(LS_USER_KEY, JSON.stringify(u));
}

export default {
  name: "ProfilePage",
  data() {
    return {
      // 登录和编辑资料逻辑 (来自 profile.html)
      currentUser: null,
      showEditModal: false,
      editForm: {
        firstName: '', lastName: '', email: '', avatarPreview: '',
        currentPassword: '', newPassword: '', confirmNewPassword: ''
      },
      editErrors: {
        firstName: false, lastName: false, email: false, avatar: false,
        currentPassword: false, newPassword: false, confirmNewPassword: false,
        passwordBlock: false
      },
      pendingAvatarFile: null,

      // 预订历史逻辑 (来自 ProfileO.vue)
      studentId: null,
      bookings: [],
      loading: true,
      facilities: [
        { id: 1, name: "Basketball Court" },
        { id: 2, name: "Fitness Room" },
        { id: 3, name: "Dance Studio" },
        { id: 4, name: "Badminton Court" },
        { id: 5, name: "Swimming Pool" },
      ],
      editModalVisible: false,
      editBooking: null,
    };
  },
  computed: {
    membershipInfo() {
      if (this.currentUser?.membership) {
        const { trimestersTotal, priceUSD } = this.currentUser.membership;
        return `${trimestersTotal} trimesters ($${priceUSD})`;
      }
      return 'No active membership';
    }
  },
  methods: {
    // ------------------- 预订历史相关方法 -------------------
    getFacilityName(id) {
      const f = this.facilities.find((fac) => fac.id === id);
      return f ? f.name : "Unknown";
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    async fetchBookings() {
      if (!this.studentId) {
        this.bookings = [];
        this.loading = false;
        return;
      }
      try {
        const token = await getIdToken();
        const res = await fetch('http://localhost:3000/api/booking/me', {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch bookings");
        const data = await res.json();
        this.bookings = data.bookings || [];
      } catch (err) {
        console.error(err);
        alert("Failed to load your bookings.");
      } finally {
        this.loading = false;
      }
    },
    openBookingEditModal(booking) {
      this.editBooking = { ...booking };
      this.editModalVisible = true;
    },
    closeBookingEditModal() {
      this.editModalVisible = false;
      this.editBooking = null;
    },
    async submitEdit() {
      try {
        const token = await getIdToken();
        const { bookingId, FacilityID, Date, StartTime, EndTime } = this.editBooking;
        const res = await fetch(`http://localhost:3000/api/booking/${bookingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ FacilityID, Date, StartTime, EndTime }),
        });
        if (!res.ok) throw new Error("Failed to update booking");
        alert("Booking updated successfully.");
        this.closeBookingEditModal();
        await this.fetchBookings();
      } catch (err) {
        console.error(err);
        alert("Failed to update booking.");
      }
    },
    async deleteBooking(bookingId) {
      if (!confirm("Are you sure you want to delete this booking?")) return;
      try {
        const token = await getIdToken();
        const res = await fetch(`http://localhost:3000/api/booking/${bookingId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to delete booking");
        alert("Booking deleted successfully.");
        await this.fetchBookings();
      } catch (err) {
        console.error(err);
        alert("Failed to delete booking.");
      }
    },

    // ------------------- 个人资料相关方法 -------------------
    async logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        // 清除本地用户数据
        localStorage.removeItem(LS_USER_KEY);
        this.currentUser = null;
        alert("Successfully logged out.");
      } catch (err) {
        console.error("Logout failed:", err);
        alert("Logout failed. Please try again.");
      }
    },
    openEditModal() {
      if (!this.currentUser) return;
      this.editForm = {
        firstName: this.currentUser.firstName, lastName: this.currentUser.lastName,
        email: this.currentUser.email, avatarPreview: this.currentUser.avatar,
        currentPassword: '', newPassword: '', confirmNewPassword: ''
      };
      this.editErrors = {
        firstName: false, lastName: false, email: false, avatar: false,
        currentPassword: false, newPassword: false, confirmNewPassword: false,
        passwordBlock: false
      };
      this.pendingAvatarFile = null;
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    onAvatarFileChange(e) {
      this.editErrors.avatar = false;
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) { this.editErrors.avatar = true; return; }
      this.pendingAvatarFile = file;
      const reader = new FileReader();
      reader.onload = (evt) => { this.editForm.avatarPreview = evt.target.result; };
      reader.readAsDataURL(file);
    },
    saveProfileChanges() {
      this.editErrors = { ...this.editErrors, firstName: false, lastName: false, email: false };
      let valid = true;
      if (!this.editForm.firstName.trim()) { this.editErrors.firstName = true; valid = false; }
      if (!this.editForm.lastName.trim()) { this.editErrors.lastName = true; valid = false; }
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailRe.test(this.editForm.email.trim())) { this.editErrors.email = true; valid = false; }
      
      if (!valid) return;
      
      const user = { ...this.currentUser };
      user.firstName = this.editForm.firstName.trim();
      user.lastName = this.editForm.lastName.trim();
      user.email = this.editForm.email.trim();
      if (this.pendingAvatarFile) user.avatar = this.editForm.avatarPreview;
      
      // 注意：此处的密码逻辑仅针对本地localStorage，在真实环境中应调用Firebase更新密码
      const anyPassFilled = [this.editForm.currentPassword, this.editForm.newPassword, this.editForm.confirmNewPassword]
        .some(v => v.trim().length > 0);
      if (anyPassFilled) {
        if (this.editForm.currentPassword !== this.currentUser.password) { this.editErrors.currentPassword = true; valid = false; }
        if (this.editForm.newPassword.length < 6) { this.editErrors.newPassword = true; valid = false; }
        if (this.editForm.newPassword !== this.editForm.confirmNewPassword) { this.editErrors.confirmNewPassword = true; valid = false; }
        if (valid) user.password = this.editForm.newPassword;
        else this.editErrors.passwordBlock = true;
      }
      if (!valid) return;

      saveUser(user);
      this.currentUser = user;
      this.closeEditModal();
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = loadUser();
        try {
          const token = await getIdToken();
          const res = await fetch("http://localhost:3000/api/user/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) throw new Error("Failed to fetch studentId");
          const data = await res.json();
          this.studentId = data.StudentID;
          await this.fetchBookings();
        } catch (err) {
          console.error("Error loading profile:", err);
          alert("Cannot load your profile data.");
          this.loading = false;
        }
      } else {
        this.currentUser = null;
        this.loading = false;
      }
    });
  },
};
</script>

<style scoped>
/* 23112.html 的布局样式 */
.parent {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 46px;
}
.div1 {
  grid-column: span 3 / span 3;
  grid-row: span 4 / span 4;
}
.div2 {
  grid-column: span 3 / span 3;
  grid-row: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 5;
}
.div3 {
  grid-column: span 6 / span 6;
  grid-row: span 4 / span 4;
  grid-column-start: 4;
  grid-row-start: 2;
}

/* ProfileO.vue 的表格样式 */
.profile-title {
  font-size: 2.8em;
  font-weight: 800;
  margin-bottom: 36px;
  letter-spacing: 0.05em;
  text-align: center;
  line-height: 1.3;
  color: #160c00ff;
}
.loading, .no-bookings {
  font-size: 1.5em;
  color: #8d8d8d;
  text-align: center;
  margin-top: 80px;
}
.booking-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2em;
  line-height: 1.6;
  margin-top: 20px;
  background-color: #fffef8;
  border-radius: 8px;
  overflow: hidden;
}
.booking-table th, .booking-table td {
  border: 1.5px solid #d1c5a1;
  padding: 14px 20px;
  text-align: center;
  font-weight: 500;
  color: #333;
}
.booking-table th {
  background-color: #d1753bff;
  color: #ffffff;
  font-weight: 700;
}
.booking-table tbody tr:nth-child(even) {
  background-color: #fffaf0;
}
.booking-table tbody tr:hover {
  background-color: #f2e3c9;
  transition: background-color 0.3s ease;
  cursor: default;
}
</style>