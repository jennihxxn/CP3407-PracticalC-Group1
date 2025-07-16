<template>
  <div>
    <!-- Header -->
    <header class="navbar">
      <div class="navbar__logo">
        <img src="/images/jcu_logo.png" alt="JCU Fitness Club Logo" />
      </div>
      <div class="navbar__contacts">
        <span class="navbar__phone">
          <img src="/images/phone.png" class="icon-phone" alt="Phone" /> +65 —
        </span>
        <span class="navbar__phone">
          <img src="/images/phone.png" class="icon-phone" alt="Phone" /> +65 —
        </span>
      </div>
      <div class="navbar__social">
        <img src="/images/whatsapp.png" alt="WhatsApp" class="footer__icon" />
        <img src="/images/instagram.png" alt="Instagram" class="footer__icon" />
        <img src="/images/telegram.png" alt="Telegram" class="footer__icon" />
      </div>
      <div class="navbar__menu">
        <span class="navbar__menu-icon">&#9776;</span>
      </div>
    </header>

    <!-- Breadcrumb -->
    <section class="breadcrumb">
      <span class="breadcrumb__home">HOME</span>
      <span class="breadcrumb__slash">/</span>
      <span class="breadcrumb__page">BOOKING</span>
    </section>

    <!-- Booking Form -->
    <main class="booking-main">
      <div class="booking-form__container">
        <div class="booking-form__left">
          <div class="booking-form__label">FACILITY</div>
          <select v-model="selectedFacilityId" class="booking-form__input">
            <option disabled value="">SELECT FACILITY</option>
            <option
              v-for="facility in facilities"
              :key="facility.id"
              :value="facility.id"
            >
              {{ facility.name }}
            </option>
          </select>

          <div class="booking-form__label">DATE</div>
          <input
            type="date"
            class="booking-form__input"
            v-model="selectedDate"
            :min="minDate"
            placeholder="SELECT DATE"
          />

          <div class="booking-form__label">START TIME</div>
          <select v-model="selectedStartTime" class="booking-form__input">
            <option disabled value="">SELECT START TIME</option>
            <option v-for="time in timeOptions" :key="time" :value="time">
              {{ time }}
            </option>
          </select>   

          <div class="booking-form__label">END TIME</div>
          <select v-model="selectedEndTime" class="booking-form__input" :disabled="!selectedStartTime">
            <option disabled value="">SELECT END TIME</option>
            <option
            v-for="time in filteredEndTimes"
            :key="time"
            :value="time"
          >
            {{ time }}
          </option>
        </select>

          <button class="booking-form__save-btn" @click="handleSave">SAVE</button>
        </div>

        <div class="booking-form__right">
          <div class="booking-form__title">Your booking summary</div>
          <input
            type="text"
            class="booking-form__input"
            :value="bookingSummary"
            readonly
          />

          <div class="booking-form__title">Your booking ID</div>
          <input
            type="int"
            class="booking-form__input"
            :value="bookingId"
            readonly
          />
          <div class="booking-form__desc">
            Enter the email you specified during registration and we will send you a letter with instructions.
          </div>
          <button class="booking-form__cancel-btn" @click="handleCancel">CANCEL</button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__logo-col">
          <img src="/images/jcu_logo.png" alt="JCU Fitness Club Logo" class="footer__logo" />
          <p class="footer__desc">
            The information provided on the site for review is not a public offer. All information about cooperation and services can be obtained from the sales department.
          </p>
          <div class="footer__apps">
            <img src="/images/appstore.png" alt="App Store" class="footer__icon-app" />
            <img src="/images/googleplay.png" alt="Google Play" class="footer__icon-app" />
            <img src="/images/visa.png" alt="VISA" class="footer__icon-app" />
            <img src="/images/mastercard.png" alt="MasterCard" class="footer__icon-app" />
          </div>
        </div>
        <div class="footer__col">
          <h4>ABOUT US</h4>
          <ul>
            <li>Vacancies</li>
            <li>News</li>
            <li>Club Rules</li>
            <li>Insurance</li>
            <li>Team</li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>SERVICES</h4>
          <ul>
            <li>Fitness-programs</li>
            <li>Coaching</li>
            <li>Basketball Team</li>
            <li>Voleyball Team</li>
            <li>Dance Team</li>
            <li>Badminton Team</li>
            <li>Additional services</li>
            <li>Team Fitness</li>
            <li>Sports team building</li>
          </ul>
        </div>
        <div class="footer__col footer__col--menu">
          <ul>
            <li><b>JCU OPEN MARAPHONE 2025</b></li>
            <li><b>JCU SUPER TRI #FITNESS_LAH</b></li>
            <li><b>PROJECT #FITNESS_LAH</b></li>
            <li><b>PROJECT #FITNESS_SG_COACH_LEH</b></li>
            <li>SCHEDULE</li>
            <li>CLUB CARDS</li>
            <li>COACHING</li>
            <li>LOYALTY PROGRAM</li>
            <li>MY ACCOUNT</li>
          </ul>
        </div>
        <div class="footer__col footer__col--contact">
          <ul>
            <li>
              <img src="/images/phone.png" class="icon-phone" alt="Phone" />
              +65 — Student Affairs
            </li>
            <li>
              <img src="/images/phone.png" class="icon-phone" alt="Phone" />
              +65 — Sales Department
            </li>
            <li>
              <img src="/images/whatsapp.png" alt="WhatsApp" class="footer__icon" />
              WhatsApp
            </li>
            <li>
              <img src="/images/instagram.png" alt="Instagram" class="footer__icon" />
              Instagram
            </li>
            <li>
              <img src="/images/telegram.png" alt="Telegram" class="footer__icon" />
              Telegram
            </li>
            <li>
              <img src="/images/location.png" alt="Location" class="footer__icon-location" />
              149 Sims Drive, Singapore 387380
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__whatsapp">
          <img src="/images/whatsapp.png" alt="WhatsApp" style="width:20px;height:20px;margin-right:8px;vertical-align:middle;" />
          WhatsApp
        </div>
        <div class="footer__copyright">2025© JCU FCLub.au — All rights reserved</div>
      </div>
    </footer>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getIdToken } from "../components/GetIdToken"; // get idtoken components

export default {
  name: "Booking",
  data() {
    return {
      selectedFacilityId: "",
      selectedDate: "",
      selectedStartTime: "",
      selectedEndTime: "",
      studentId: null,
      facilities: [
        { id: 1, name: "Basketball Court" },
        { id: 2, name: "Fitness Room" },
        { id: 3, name: "Dance Studio" },
        { id: 4, name: "Badminton Court" },
        { id: 5, name: "Swimming Pool" },
      ],
      timeOptions: [
        "06:00", "07:00", "08:00", "09:00", "10:00",
        "11:00", "12:00", "13:00", "14:00", "15:00",
        "16:00", "17:00", "18:00", "19:00", "20:00",
        "21:00", "22:00"
      ],
      bookingSummary: "",
      bookingId: "",
    };
  },
  computed: {
    minDate() {
      return new Date().toISOString().split("T")[0];
    },
    filteredEndTimes() {
      const startIndex = this.timeOptions.indexOf(this.selectedStartTime);
      return startIndex >= 0 ? this.timeOptions.slice(startIndex + 1) : [];
    },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // get current user's Firebase ID Token
          const token = await getIdToken();
          // use to get studentId
          const res = await fetch("http://localhost:3000/api/user/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!res.ok) throw new Error("Failed to fetch studentId");
          const data = await res.json();
          this.studentId = data.StudentID;
          console.log("StudentID loaded:", this.studentId);
        } catch (err) {
          console.error("Error fetching studentId:", err);
          alert("Cannot get your student ID, booking disabled.");
        }
      } else {
        this.studentId = null;
        console.log("User not logged in");
      }
    });
  },
  methods: {
    async handleSave() {
      if (
        !this.selectedFacilityId ||
        !this.selectedDate ||
        !this.selectedStartTime ||
        !this.selectedEndTime
      ) {
        alert("Please complete all booking information.");
        return;
      }

      const selectedFacility = this.facilities.find(
        (f) => f.id === this.selectedFacilityId
      );

      try {
        // get a new token send to backend for verify
        const token = await getIdToken();

        const response = await fetch("http://localhost:3000/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            FacilityID: this.selectedFacilityId,
            Date: this.selectedDate,
            StartTime: this.selectedStartTime,
            EndTime: this.selectedEndTime,
          }),
        });

        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        const data = await response.json();
        this.bookingId = data.bookingId; // save the bookingID responsed by backend
          console.log("Booking created, ID:", this.bookingId);
          alert("Booking successfully submitted.");
        } catch (err) {
          console.error("Booking failed:", err);
          alert("Booking failed to submit.");
          this.bookingId = null; // empty booking Id, avoid confliction or error recording
        }

      this.bookingSummary = `${selectedFacility.name},${this.selectedDate},${this.selectedStartTime}-${this.selectedEndTime}`;

    },
    
    async handleCancel() {
      if (!this.bookingSummary) {
        alert("No booking to cancel.");
        return;
      }

      try {
        const token = await getIdToken();
        const response = await fetch(
          `http://localhost:3000/api/booking/${this.bookingId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Server error");
        }

        const result = await response.json();
        console.log("Booking cancelled:", result.message);
          alert("Booking cancelled successfully.");
        } catch (err) {
        console.error("Cancellation failed:", err);
          alert("Failed to cancel booking.");
        } finally {
          this.selectedFacilityId = "";
          this.selectedDate = "";
          this.selectedStartTime = "";
          this.selectedEndTime = "";
          this.bookingSummary = "";
          this.bookingId = null;
        }
      }
    },
};
</script>





<style scoped>
html,
body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background: #fff7dc !important;
  color: #191919;
  min-width: 1200px;
  font-size: 22px;
  line-height: 1.7;
}
body {
  background: #fff7dc !important;
}
.navbar {
  width: 100%;
  background: #fff7dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 70px 22px 70px;
  border-bottom: 4px solid #191919;
}
.navbar__logo img {
  height: 72px;
}
.navbar__contacts {
  display: flex;
  align-items: center;
  gap: 48px;
}
.navbar__phone {
  font-size: 28px;
  font-weight: 600;
  color: #191919;
  display: flex;
  align-items: center;
  line-height: 2.3;
}
.icon-phone {
  width: 38px;
  height: 38px;
  vertical-align: middle;
  margin-right: 16px;
}
.navbar__social {
  display: flex;
  align-items: center;
  gap: 32px;
}
.footer__icon {
  width: 42px;
  height: 42px;
  vertical-align: middle;
  margin-right: 16px;
}
.footer__icon-location {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 16px;
}
.footer__icon-app {
  width: 36px;
  height: 36px;
  vertical-align: middle;
  margin-right: 13px;
}
.navbar__menu {
  font-size: 36px;
  color: #191919;
  margin-left: 18px;
}
.breadcrumb {
  background: #fff7dc;
  padding: 30px 0 22px 94px;
  font-size: 0;
  display: flex;
  align-items: flex-end;
  border-bottom: 3.5px solid #191919;
  margin-bottom: 36px;
}
.breadcrumb__home {
  color: #222;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.13em;
  margin-right: 28px;
  font-family: "Inter", Arial, sans-serif;
  line-height: 2.3;
}
.breadcrumb__slash {
  font-size: 40px;
  color: #bababa;
  margin-right: 28px;
  line-height: 2.3;
}
.breadcrumb__page {
  font-size: 58px;
  font-family: "Inter", Arial, sans-serif;
  font-weight: 800;
  color: #222;
  letter-spacing: 0.04em;
  margin-left: 10px;
  margin-bottom: 0.03em;
  line-height: 2.3;
}
/* Booking form layout */
.booking-main {
  background: #fff7dc;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.booking-form__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  background: #fff7dc;
  width: 100vw;
  max-width: none;
  min-width: 0;
  gap: 0;
  padding: 70px 0 82px 0;
  border-bottom: none;
  border-top: none;
}
.booking-form__left,
.booking-form__right {
  width: 50vw;
  min-width: 0;
  max-width: none;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 60px 70px 60px;
  box-shadow: 0 4px 32px 0 rgba(213, 181, 115, 0.18);
  border-radius: 0;
}
.booking-form__right {
  border-left: none;
}
.booking-form__label {
  font-size: 1.23em;
  color: #8d8d8d;
  margin-bottom: 18px;
  margin-top: 34px;
  letter-spacing: 0.09em;
  font-family: "Inter", Arial, sans-serif;
  line-height: 2.0;
}
.booking-form__label:first-child {
  margin-top: 0;
}
.booking-form__input {
  width: 100%;
  height: 58px;
  background: #fffef5;
  border: 2.2px solid #bcbcbc;
  font-size: 1.23em;
  padding: 0 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  font-family: inherit;
  color: #191919;
  box-sizing: border-box;
  line-height: 2.0;
  transition: border-color 0.3s ease;
}
.booking-form__input:focus {
  border-color: #96492e;
  outline: none;
  box-shadow: 0 0 8px rgba(150, 73, 46, 0.3);
}
.booking-form__save-btn,
.booking-form__cancel-btn {
  padding: 17px 46px;
  background: linear-gradient(135deg, #96492e, #b96b4a);
  border: none;
  color: #fff;
  font-size: 1.5em;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 25px;
  font-family: inherit;
  letter-spacing: 0.03em;
  transition: background 0.3s;
  font-weight: 700;
  line-height: 2.1;
}
.booking-form__save-btn:hover,
.booking-form__cancel-btn:hover {
  background: #65321b;
}
.booking-form__title {
  font-size: 2.2em;
  color: #191919;
  font-weight: 800;
  margin-bottom: 30px;
  margin-top: 22px;
  letter-spacing: 0.03em;
  font-family: "Inter", Arial, sans-serif;
  line-height: 2.0;
}
.booking-form__desc {
  font-size: 1.12em;
  color: #555;
  margin: 18px 0 38px 0;
  letter-spacing: 0.01em;
  font-family: "Inter", Arial, sans-serif;
  line-height: 2.1;
}
/* Footer */
.footer {
  background: #fff7dc;
  color: #191919;
  padding: 60px 0 0 0;
  border-top: 4px solid #191919;
  font-size: 22px;
  margin-top: 60px;
  line-height: 2.1;
}
.footer__top {
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 72px;
}
.footer__logo-col {
  width: 340px;
  margin-right: 32px;
}
.footer__logo {
  height: 62px;
  margin-bottom: 18px;
}
.footer__desc {
  font-size: 1.18em;
  color: #191919;
  margin-bottom: 28px;
  margin-top: 7px;
  line-height: 2.1;
}
.footer__apps {
  margin-top: 16px;
}
.footer__col {
  min-width: 200px;
}
.footer__col h4 {
  font-size: 1.15em;
  font-weight: 700;
  margin-bottom: 18px;
  letter-spacing: 0.08em;
}
.footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer__col ul li {
  margin-bottom: 24px;
  font-size: 1.15em;
  font-weight: 500;
  color: #191919;
  line-height: 2.1;
}
.footer__col--menu ul li b {
  font-weight: 900;
}
.footer__col--contact ul li {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 1.4em;
  margin-bottom: 26px;
  font-family: "Inter", Arial, sans-serif;
  line-height: 2.1;
}
/* Footer bottom */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1.6px solid #aaa;
  padding: 22px 72px 18px 72px;
  margin-top: 38px;
  background: transparent;
}
.footer__whatsapp {
  display: flex;
  align-items: center;
  background: #25d366;
  color: #fff;
  font-size: 1.27em;
  border-radius: 30px;
  padding: 11px 38px 11px 20px;
  gap: 10px;
  font-weight: 700;
  line-height: 1.9;
}
.footer__whatsapp img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.footer__copyright {
  font-size: 1.07em;
  color: #191919;
}
</style>
