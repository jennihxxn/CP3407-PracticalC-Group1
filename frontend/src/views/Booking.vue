<template>
  <div class="min-h-screen flex flex-col bg-[#121212] text-white">
    <section class="bg-[#efe2b6] text-black">
      <div class="max-w-6xl mx-auto px-6 py-8">
        <div class="text-xs flex items-center gap-2 text-[#0e2233]">
          <span class="inline-block w-2 h-2 bg-[#0e2233]"></span>
          <a href="#" class="hover:underline">HOME</a>
          <span>/</span>
        </div>
        <h1 class="text-4xl font-semibold mt-2 tracking-wide">BOOKING</h1>
      </div>
    </section>

    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div class="mb-6">
            <label class="block text-sm text-white/80 mb-2">FACILITY</label>
            <button @click="isFacilityModalOpen = true" class="w-full text-left px-4 py-3 rounded border border-white/30 bg-black/30 hover:bg-white/10 transition">
              <span :class="{'text-white': selectedFacility, 'text-white/70': !selectedFacility}">{{ facilityLabel }}</span>
            </button>
            <p v-if="errors.facility" class="text-xs text-red-400 mt-2">Please choose a facility first.</p>
          </div>

          <div class="mb-6">
            <label class="block text-sm text-white/80 mb-2">DATE</label>
            <div class="rounded border border-white/20">
              <div class="flex items-center justify-between p-3">
                <button @click="prevMonth" :disabled="!canGoPrevMonth" class="px-2 py-1 text-white/70 hover:text-white disabled:opacity-30" title="Previous month">&larr;</button>
                <div class="font-medium">{{ calendarTitle }}</div>
                <button @click="nextMonth" :disabled="!canGoNextMonth" class="px-2 py-1 text-white/70 hover:text-white disabled:opacity-30" title="Next month">&rarr;</button>
              </div>
              <div class="grid grid-cols-7 gap-1 p-3 pb-4">
                <div v-for="day in ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']" :key="day" class="text-xs text-white/50 text-center pb-1">{{ day }}</div>
                <div v-for="i in calendarStartOffset" :key="`offset-${i}`" class="h-10"></div>
                <button v-for="day in calendarDays" :key="day.iso" @click="pickDate(day.iso)" :disabled="day.disabled"
                        :class="['h-10 flex items-center justify-center rounded-full text-sm transition', day.style]">
                  <span>{{ day.day }}</span>
                </button>
              </div>
            </div>
            <p v-if="errors.date" class="text-xs text-red-400 mt-2">Please pick a date.</p>
          </div>

          <div class="mb-8">
            <label class="block text-sm text-white/80 mb-2">TIME</label>
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
              <button v-for="time in timeSlots" :key="time.value" @click="pickTime(time.value)" :disabled="time.isBooked"
                      :class="['px-3 py-2 rounded border text-sm text-center transition', 
                               time.isBooked ? 'border-red-500 text-red-400 cursor-not-allowed opacity-60' :
                               time.isSelected ? 'bg-blue-600 text-yellow-300 border-blue-400' :
                               'border-white/30 text-white hover:bg-blue-600 hover:text-yellow-300']">
                {{ time.value }}
              </button>
            </div>
            <p v-if="errors.time" class="text-xs text-red-400 mt-2">Please pick a time.</p>
          </div>

          <div class="flex items-center gap-4">
            <button @click="handleSave" class="px-6 py-3 bg-[#b05636] hover:bg-[#cc6b49] rounded text-white tracking-wide">SAVE</button>
            <button @click="openCancelConfirm('form')" class="px-6 py-3 bg-transparent border border-white/30 hover:bg-white/10 rounded text-white tracking-wide">CANCEL</button>
          </div>
        </div>

        <div class="lg:border-l border-white/10 lg:pl-10">
          <h2 class="text-3xl text-white mb-6">Your booking</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-xs text-white/60 mb-1">FACILITY</label>
              <input type="text" class="w-full px-4 py-3 rounded border border-white/20 bg-transparent" readonly :value="preview.facility" />
            </div>
            <div>
              <label class="block text-xs text-white/60 mb-1">DATE</label>
              <input type="text" class="w-full px-4 py-3 rounded border border-white/20 bg-transparent" readonly :value="preview.date" />
            </div>
            <div>
              <label class="block text-xs text-white/60 mb-1">TIME</label>
              <input type="text" class="w-full px-4 py-3 rounded border border-white/20 bg-transparent" readonly :value="preview.time" />
            </div>
            <p class="text-xs text-white/60">Manage your current selection above or view all your bookings below.</p>
          </div>

          <div class="mt-8">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-semibold">My bookings</h3>
              <div class="flex items-center gap-2 text-sm">
                 <button v-for="i in totalBookingPages" :key="i" @click="currentBookingsPage = i" 
                         :class="['px-2.5 py-1 rounded text-xs', i === currentBookingsPage ? 'bg-white text-black' : 'border border-white/30 hover:bg-white/10']">
                   {{ i }}
                 </button>
              </div>
            </div>

            <ul v-if="paginatedBookings.length" class="divide-y divide-white/10 border border-white/10 rounded-xl overflow-hidden">
              <li v-for="booking in paginatedBookings" :key="booking.id" 
                  class="p-3 hover:bg-white/5 transition"
                  :class="{'bg-white/10': selectedBookingId === booking.id}">
                <div class="flex items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm font-medium">{{ booking.facilityName }} booking</p>
                    <p class="text-xs text-white/60 truncate">{{ booking.facilityName }} • {{ formatDate(booking.date) }} • {{ booking.startTime }}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <button @click="selectBooking(booking.id)" class="px-2 py-1 text-xs border border-white/30 rounded hover:bg-white/10">
                      Select
                    </button>
                    <button @click="openCancelConfirm('list', booking.id)" class="px-2 py-1 text-xs bg-[#b05636] hover:bg-[#cc6b49] text-white rounded">
                      Cancel
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            <p v-else class="text-sm text-white/60 mt-3">
              You don’t have any bookings yet.
            </p>
          </div>
        </div>
      </div>
    </main>

    <div v-if="isFacilityModalOpen" @click.self="isFacilityModalOpen = false" class="fixed inset-0 flex items-center justify-center bg-black/60">
      <div class="relative w-[90vw] max-w-5xl bg-white text-black rounded-2xl p-6">
        <button @click="isFacilityModalOpen = false" class="absolute top-3 right-3 text-gray-500 hover:text-black">✕</button>
        <h3 class="text-xl font-semibold mb-4">Choose Facility</h3>
        <div class="relative">
          <button @click="prevFacilityPage" :disabled="facilityPage === 0" class="absolute -left-6 top-1/2 -translate-y-1/2 text-3xl leading-none hover:scale-125 transition disabled:opacity-30">&larr;</button>
          <button @click="nextFacilityPage" :disabled="facilityPage >= Math.floor((allFacilities.length - 1) / FACILITY_PAGE_SIZE)" class="absolute -right-6 top-1/2 -translate-y-1/2 text-3xl leading-none hover:scale-125 transition disabled:opacity-30">&rarr;</button>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <article v-for="facility in paginatedFacilities" :key="facility.id" class="rounded-xl overflow-hidden border border-black/10 shadow hover:shadow-lg transition">
              <div class="h-36 bg-cover bg-center" :style="{ backgroundImage: `url('${facility.img}')` }"></div>
              <div class="p-4">
                <h4 class="font-semibold">{{ facility.name }}</h4>
                <p class="text-sm text-gray-600">{{ facility.desc }}</p>
                <p class="text-xs text-gray-500 mt-1">Duration: {{ facility.duration }}</p>
                <button @click="selectFacility(facility.id)" class="mt-3 w-full px-3 py-2 rounded bg-black text-white hover:bg-yellow-500">Choose</button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isConfirmModalOpen" @click.self="isConfirmModalOpen = false" class="fixed inset-0 flex items-center justify-center bg-black/60">
      <div class="bg-white text-black rounded-2xl p-6 w-[420px] max-w-[95vw]">
        <h4 class="text-lg font-semibold mb-2">Are you sure?</h4>
        <p class="text-sm text-gray-600 mb-5">Do you want to cancel this booking?</p>
        <div class="flex justify-end gap-2">
          <button @click="isConfirmModalOpen = false" class="px-4 py-2 rounded bg-gray-200">No</button>
          <button @click="confirmCancel" class="px-4 py-2 rounded bg-black text-white hover:bg-yellow-400">Yes, cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getIdToken } from "../components/GetIdToken";

export default {
  name: 'Booking',
  data() {
    return {
      // Form state
      selectedFacility: null,
      selectedDate: null,
      selectedTime: null,
      
      // User & Bookings Data
      studentId: null,
      userBookings: [], // From backend
      facilityBookings: {}, // All bookings for all facilities for checking availability
      isUserAuthenticated: false, // Tracks the user's authentication status
      
      // UI State
      isFacilityModalOpen: false,
      isConfirmModalOpen: false,
      cancelContext: { type: '', id: null }, // {type: 'form' | 'list', id: bookingId}
      errors: { facility: false, date: false, time: false },
      
      // Calendar State
      calMonth: new Date(),
      windowStart: new Date(),
      windowEnd: new Date(),

      // Pager State
      facilityPage: 0,
      currentBookingsPage: 1,
      selectedBookingId: null,
      
      // Constants
      FACILITY_PAGE_SIZE: 6,
      BOOKINGS_PER_PAGE: 3,
      allFacilities: [
        { id:'gym', name:'Main Gym', img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop', desc:'Full gym access', duration:'60 min' },
        { id:'pool', name:'Swimming Pool', img:'https://images.unsplash.com/photo-1517833969405-d2a24c2c8280?q=80&w=1600&auto=format&fit=crop', desc:'Lap swimming', duration:'45 min' },
        { id:'yoga', name:'Yoga Studio', img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop', desc:'Instructor-led', duration:'60 min' },
        { id:'boxing', name:'Boxing Room', img:'https://images.unsplash.com/photo-1544915632-0e4d9e4d08d1?q=80&w=1600&auto=format&fit=crop', desc:'Spar & drills', duration:'45 min' },
        { id:'sauna', name:'Sauna', img:'https://images.unsplash.com/photo-1603901720437-6f8b74a06a2e?q=80&w=1600&auto=format&fit=crop', desc:'Relax & recover', duration:'30 min' },
        { id:'court', name:'Basketball Court', img:'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop', desc:'Half court', duration:'60 min' },
        { id:'spin', name:'Spin Studio', img:'https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1600&auto=format&fit=crop', desc:'Cycling class', duration:'45 min' },
        { id:'pt', name:'Personal Training', img:'https://images.unsplash.com/photo-1546484959-f9a53db89c89?q=80&w=1600&auto=format&fit=crop', desc:'1-on-1 session', duration:'60 min' },
        { id:'pilates', name:'Pilates Studio', img:'https://images.unsplash.com/photo-1599050751795-5f38f8b9dc21?q=80&w=1600&auto=format&fit=crop', desc:'Core strength', duration:'60 min' },
      ],
      allTimeSlots: [
        '07:00','08:00','09:00','10:00','11:00','12:00',
        '13:00','14:00','15:00','16:00','17:00','18:00',
        '19:00','20:00','21:00'
      ],
    };
  },

  computed: {
    // Labels and Previews
    facilityLabel() {
      const facility = this.allFacilities.find(f => f.id === this.selectedFacility);
      return facility ? facility.name : 'Select facility';
    },
    preview() {
      const facility = this.allFacilities.find(f => f.id === this.selectedFacility);
      return {
        facility: facility ? facility.name : '—',
        date: this.selectedDate ? this.formatDate(this.selectedDate) : '—',
        time: this.selectedTime || '—',
      };
    },

    // Calendar Computations
    calendarTitle() {
      return this.calMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
    },
    calendarStartOffset() {
      return (new Date(this.calMonth.getFullYear(), this.calMonth.getMonth(), 1).getDay() + 6) % 7;
    },
    calendarDays() {
      const days = [];
      const daysInMonth = new Date(this.calMonth.getFullYear(), this.calMonth.getMonth() + 1, 0).getDate();
      const bookedOnDate = this.selectedFacility ? (this.facilityBookings[this.selectedFacility] || {}) : {};

      for (let d = 1; d <= daysInMonth; d++) {
        const cellDate = new Date(this.calMonth.getFullYear(), this.calMonth.getMonth(), d);
        const iso = cellDate.toISOString().slice(0, 10);

        const inWindow = cellDate >= this.windowStart && cellDate <= this.windowEnd;
        const isPast = cellDate < this.windowStart;
        const isSelected = this.selectedDate === iso;

        const fullyBooked = bookedOnDate[iso] && bookedOnDate[iso].length >= this.allTimeSlots.length;

        let style = '';
        if (!inWindow) style = 'opacity-30 cursor-not-allowed';
        else if (isPast) style = 'text-white/30 cursor-not-allowed';
        else if (fullyBooked) style = 'bg-red-600 text-white cursor-not-allowed';
        else if (isSelected) style = 'bg-blue-600 text-yellow-300 ring-2 ring-blue-300';
        else style = 'hover:bg-blue-600 hover:text-yellow-300 cursor-pointer';

        days.push({
          day: d,
          iso: iso,
          disabled: !inWindow || isPast || fullyBooked,
          style: style,
        });
      }
      return days;
    },
    canGoPrevMonth() {
      const prev = new Date(this.calMonth.getFullYear(), this.calMonth.getMonth() - 1, 1);
      return this.monthIntersectsWindow(prev);
    },
    canGoNextMonth() {
      const next = new Date(this.calMonth.getFullYear(), this.calMonth.getMonth() + 1, 1);
      return this.monthIntersectsWindow(next);
    },

    // Time Slots
    timeSlots() {
      if (!this.selectedFacility || !this.selectedDate) return [];
      const bookedTimes = this.facilityBookings[this.selectedFacility]?.[this.selectedDate] || [];
      return this.allTimeSlots.map(t => ({
        value: t,
        isBooked: bookedTimes.includes(t),
        isSelected: this.selectedTime === t,
      }));
    },

    // Pagination
    paginatedFacilities() {
      const start = this.facilityPage * this.FACILITY_PAGE_SIZE;
      return this.allFacilities.slice(start, start + this.FACILITY_PAGE_SIZE);
    },
    totalBookingPages() {
      if (!this.userBookings.length) return 0;
      return Math.ceil(this.userBookings.length / this.BOOKINGS_PER_PAGE);
    },
    paginatedBookings() {
      const sorted = this.userBookings.slice().sort((a,b) => new Date(b.date) - new Date(a.date)); // newest first
      const start = (this.currentBookingsPage - 1) * this.BOOKINGS_PER_PAGE;
      return sorted.slice(start, start + this.BOOKINGS_PER_PAGE);
    }
  },

  methods: {
    // Initialization
    async initialize() {
      // Setup date window
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      this.windowStart = today;
      this.windowEnd = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
      this.calMonth = new Date(today.getFullYear(), today.getMonth(), 1);

      // Auth and data fetching using Firebase onAuthStateChanged
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.isUserAuthenticated = true;
          try {
            const token = await getIdToken();
            
            // Fetch student ID
            const userRes = await fetch("http://localhost:3000/api/user/me", { headers: { 'Authorization': `Bearer ${token}` }});
            if (!userRes.ok) throw new Error('Failed to fetch user data');
            const userData = await userRes.json();
            this.studentId = userData.StudentID;
            
            console.log("StudentID loaded:", this.studentId);
            
            // Fetch bookings for the authenticated user
            await this.fetchUserBookings(token);
            
            // Fetch all bookings to determine availability
            await this.fetchFacilityBookings();

          } catch (err) {
            console.error("Initialization failed:", err);
            alert("Could not load necessary data. Booking might be disabled.");
          }
        } else {
          this.isUserAuthenticated = false;
          this.studentId = null;
          this.userBookings = [];
          this.facilityBookings = {};
          console.log("User is not logged in.");
        }
      });
    },

    // API Calls
    async fetchFacilityBookings() {
      console.log("Fetching all facility bookings...");
      try {
        const res = await fetch('http://localhost:3000/api/bookings/all');
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        // This is a simplified example. You would need to structure the data to populate facilityBookings
        // For example:
        // this.facilityBookings = data.bookings.reduce((acc, booking) => {
        //   acc[booking.FacilityID] = acc[booking.FacilityID] || {};
        //   acc[booking.FacilityID][booking.Date] = acc[booking.FacilityID][booking.Date] || [];
        //   acc[booking.FacilityID][booking.Date].push(booking.StartTime);
        //   return acc;
        // }, {});
      } catch (err) {
        console.error("Failed to fetch all bookings:", err);
      }
    },
    async fetchUserBookings(token) {
      if (!token || !this.studentId) return;
      console.log("Fetching user bookings...");
      try {
        const res = await fetch(`http://localhost:3000/api/bookings/user/${this.studentId}`, { headers: { 'Authorization': `Bearer ${token}` }});
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        this.userBookings = await res.json();
      } catch (err) {
        console.error("Failed to fetch user bookings:", err);
      }
    },
    
    // Form Actions
    selectFacility(id) {
      this.selectedFacility = id;
      this.selectedDate = null;
      this.selectedTime = null;
      this.errors.facility = false;
      this.isFacilityModalOpen = false;
    },
    pickDate(iso) {
      this.selectedDate = iso;
      this.selectedTime = null;
      this.errors.date = false;
    },
    pickTime(time) {
      this.selectedTime = time;
      this.errors.time = false;
    },
    async handleSave() {
      if (!this.isUserAuthenticated) {
        alert("Please log in to make a booking.");
        return;
      }
      
      this.errors.facility = !this.selectedFacility;
      this.errors.date = !this.selectedDate;
      this.errors.time = !this.selectedTime;
      if (Object.values(this.errors).some(e => e)) {
        return;
      }
      
      try {
        const token = await getIdToken();
        const response = await fetch("http://localhost:3000/api/booking", {
          method: "POST",
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({
            FacilityID: this.selectedFacility,
            Date: this.selectedDate,
            StartTime: this.selectedTime,
            EndTime: this.calculateEndTime(this.selectedTime), 
          }),
        });

        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        const data = await response.json();
        
        alert("Booking successfully submitted.");
        
        const facility = this.allFacilities.find(f => f.id === this.selectedFacility);
        this.userBookings.push({
          id: data.bookingId, // from backend
          facilityId: this.selectedFacility,
          facilityName: facility.name,
          date: this.selectedDate,
          startTime: this.selectedTime,
        });

        if (!this.facilityBookings[this.selectedFacility]) {
          this.$set(this.facilityBookings, this.selectedFacility, {});
        }
        if (!this.facilityBookings[this.selectedFacility][this.selectedDate]) {
          this.$set(this.facilityBookings[this.selectedFacility], this.selectedDate, []);
        }
        this.facilityBookings[this.selectedFacility][this.selectedDate].push(this.selectedTime);

        this.resetForm();

      } catch (err) {
        console.error("Booking failed:", err);
        alert("Booking failed to submit.");
      }
    },

    // Cancellation
    openCancelConfirm(type, id = null) {
      if (!this.isUserAuthenticated) {
        alert("Please log in to cancel a booking.");
        return;
      }
      if (type === 'list' && !id) return;
      if (type === 'form' && !this.selectedFacility && !this.selectedDate && !this.selectedTime) return;

      this.cancelContext = { type, id };
      this.isConfirmModalOpen = true;
    },
    confirmCancel() {
      if (this.cancelContext.type === 'form') {
        this.resetForm();
      } else if (this.cancelContext.type === 'list') {
        this.handleCancelBooking(this.cancelContext.id);
      }
      this.isConfirmModalOpen = false;
    },
    async handleCancelBooking(bookingId) {
      if (!bookingId) return;

      try {
        const token = await getIdToken();
        const response = await fetch(`http://localhost:3000/api/booking/${bookingId}`, {
          method: "DELETE",
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Server error");
        }

        alert("Booking cancelled successfully.");
        
        const index = this.userBookings.findIndex(b => b.id === bookingId);
        if (index > -1) {
            const booking = this.userBookings[index];
            const facilityDateBookings = this.facilityBookings[booking.facilityId]?.[booking.date];
            if (facilityDateBookings) {
              const timeIndex = facilityDateBookings.indexOf(booking.startTime);
              if (timeIndex > -1) facilityDateBookings.splice(timeIndex, 1);
            }
            this.userBookings.splice(index, 1);
        }
        if (this.selectedBookingId === bookingId) {
          this.selectedBookingId = null;
        }

      } catch (err) {
        console.error("Cancellation failed:", err);
        alert("Failed to cancel booking.");
      }
    },
    
    // UI Helpers
    resetForm() {
      this.selectedFacility = null;
      this.selectedDate = null;
      this.selectedTime = null;
    },
    selectBooking(id) {
        this.selectedBookingId = this.selectedBookingId === id ? null : id;
    },
    formatDate(isoString) {
      if (!isoString) return '—';
      return new Date(isoString).toLocaleDateString();
    },
    calculateEndTime(startTime) {
        const [h, m] = startTime.split(':').map(Number);
        return `${String(h + 1).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    },

    // Calendar Navigation
    monthIntersectsWindow(monthStart) {
      const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);
      return !(monthEnd < this.windowStart || monthStart > this.windowEnd);
    },
    prevMonth() {
      if (!this.canGoPrevMonth) return;
      this.calMonth = new Date(this.calMonth.getFullYear(), this.calMonth.getMonth() - 1, 1);
    },
    nextMonth() {
      if (!this.canGoNextMonth) return;
      this.calMonth = new Date(this.calMonth.getFullYear(), this.calMonth.getMonth() + 1, 1);
    },

    // Facility Modal Pagination
    prevFacilityPage() {
      this.facilityPage = Math.max(0, this.facilityPage - 1);
    },
    nextFacilityPage() {
      const maxPage = Math.floor((this.allFacilities.length - 1) / this.FACILITY_PAGE_SIZE);
      this.facilityPage = Math.min(maxPage, this.facilityPage + 1);
    },
  },

  mounted() {
    this.initialize();
  }
};
</script>