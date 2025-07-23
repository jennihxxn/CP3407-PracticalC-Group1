<template>
  <div>
    <Header />

    <div class="profile-main">
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
                <button @click="openEditModal(booking)">Edit</button>
                <button @click="deleteBooking(booking.bookingId)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Edit windows -->
      <div v-if="editModalVisible" class="modal-overlay">
        <div class="modal-content">
          <h3>Edit Booking #{{ editBooking.bookingId }}</h3>

          <label>
            Facility:
            <select v-model="editBooking.FacilityID">
              <option v-for="f in facilities" :key="f.id" :value="f.id">{{ f.name }}</option>
            </select>
          </label>

          <label>
            Date:
            <input type="date" v-model="editBooking.Date" />
          </label>

          <label>
            Start Time:
            <input type="time" v-model="editBooking.StartTime" />
          </label>

          <label>
            End Time:
            <input type="time" v-model="editBooking.EndTime" />
          </label>

          <div class="modal-buttons">
            <button @click="submitEdit">Save</button>
            <button @click="closeEditModal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>


<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getIdToken } from "../components/GetIdToken";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";


export default {
  name: "PrivateProfile",
  components: {
    Header,
    Footer
  },
  data() {
    return {
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

      // edit booking
      editModalVisible: false,
      editBooking: null,
    };
  },
  methods: {
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

    // open edit window and copy the selected record to editBooking
    openEditModal(booking) {
      this.editBooking = { ...booking }; 
      this.editModalVisible = true;
    },

    closeEditModal() {
      this.editModalVisible = false;
      this.editBooking = null;
    },

    // upload change
    async submitEdit() {
      try {
        const token = await getIdToken();
        const { bookingId, FacilityID, Date, StartTime, EndTime } = this.editBooking;

        const res = await fetch(`http://localhost:3000/api/booking/${bookingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ FacilityID, Date, StartTime, EndTime }),
        });

        if (!res.ok) throw new Error("Failed to update booking");

        alert("Booking updated successfully.");
        this.closeEditModal();
        await this.fetchBookings();
      } catch (err) {
        console.error(err);
        alert("Failed to update booking.");
      }
    },

    // deelte booking
    async deleteBooking(bookingId) {
      if (!confirm("Are you sure you want to delete this booking?")) return;

      try {
        const token = await getIdToken();

        const res = await fetch(`http://localhost:3000/api/booking/${bookingId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to delete booking");

        alert("Booking deleted successfully.");
        await this.fetchBookings();
      } catch (err) {
        console.error(err);
        alert("Failed to delete booking.");
      }
    },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await getIdToken();
          const res = await fetch("http://localhost:3000/api/user/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
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
        alert("Please login to view your bookings.");
        this.loading = false;
      }
    });
  },
};
</script>

<style scoped>
.profile-main {
  background: #fef7e0; 
  min-height: 600px;
  max-width: 960px;
  margin: 40px auto 80px auto;
  padding: 40px 60px;
  box-shadow: 0 6px 32px rgba(150, 111, 42, 0.15);
  border-radius: 12px;
  font-family: "Inter", Arial, sans-serif;
  color: #191919;
}

.profile-title {
  font-size: 2.8em;
  font-weight: 800;
  margin-bottom: 36px;
  letter-spacing: 0.05em;
  text-align: center;
  line-height: 1.3;
  color: #160c00ff;
}

.loading,
.no-bookings {
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
  background-color: #fffef8; /* background */
  border-radius: 8px;
  overflow: hidden;
}

.booking-table th,
.booking-table td {
  border: 1.5px solid #d1c5a1;
  padding: 14px 20px;
  text-align: center;
  font-weight: 500;
  color: #333;
}

.booking-table th {
  background-color: #d1753bff; /* table header*/
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
