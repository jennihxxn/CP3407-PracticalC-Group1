<template>
  <div class="min-h-screen flex flex-col bg-[#121212] text-white">
    <Header />
    <!-- Hero / Breadcrumb -->
    <section class="bg-[#efe2b6] text-black">
      <div class="max-w-6xl mx-auto px-6 py-8">
        <div class="text-xs flex items-center gap-2 text-[#0e2233]">
          <span class="inline-block w-2 h-2 bg-[#0e2233]"></span>
          <RouterLink to="/" class="hover:underline">HOME</RouterLink>
          <span>/</span>
        </div>
        <h1 class="text-4xl font-semibold mt-2 tracking-wide">CONTACT</h1>
      </div>
    </section>

    <!-- Content -->
    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Left: Info -->
        <aside class="space-y-6 lg:col-span-1">
          <div class="bg-black/30 border border-white/10 rounded-2xl p-5">
            <h2 class="text-xl font-semibold mb-3">Get in touch</h2>
            <ul class="space-y-3 text-white/80 text-sm">
              <li><span class="text-white/60">Address:</span> 149 Sims Dr, Singapore 387380</li>
              <li><span class="text-white/60">Phone:</span> +65 6709 3888</li>
              <li><span class="text-white/60">Email:</span> pd-Singapore@jcu.edu.au</li>
            </ul>
          </div>

          <div class="bg-black/30 border border-white/10 rounded-2xl p-5">
            <h3 class="text-lg font-semibold mb-3">Opening hours</h3>
            <div class="grid grid-cols-2 gap-y-2 text-sm text-white/80">
              <span class="text-white/60">Mon–Fri</span><span>07:00 – 22:00</span>
              <span class="text-white/60">Sat</span><span>08:00 – 22:00</span>
              <span class="text-white/60">Sun</span><span>08:00 – 22:00</span>
              <span class="text-white/60">Public Holidays</span><span>08:00 – 22:00</span>
            </div>
          </div>

          <div class="bg-black/30 border border-white/10 rounded-2xl p-3">
            <div class="aspect-[16/10] w-full rounded-xl bg-[url('images/JCU.jpg')] bg-center bg-no-repeat bg-contain"></div>
          </div>

          <div class="bg-black/30 border border-white/10 rounded-2xl p-5">
            <h3 class="text-lg font-semibold mb-3">Follow us</h3>
            <div class="flex gap-3 text-sm">
              <a href="#" class="underline text-white/80 hover:text-white">Instagram</a>
              <a href="#" class="underline text-white/80 hover:text-white">Facebook</a>
              <a href="#" class="underline text-white/80 hover:text-white">TikTok</a>
            </div>
          </div>
        </aside>

        <!-- Right: Form -->
        <section class="lg:col-span-2">
          <div class="bg-black/30 border border-white/10 rounded-2xl p-6">
            <h2 class="text-xl font-semibold mb-6">Send us a message</h2>

            <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-white/80 mb-1">First name</label>
                  <input v-model="firstName" type="text" class="w-full px-4 py-2 rounded border border-white/20 bg-transparent" />
                  <p v-if="errors.firstName" class="text-xs text-red-400 mt-1">First name cannot be empty.</p>
                </div>
                <div>
                  <label class="block text-sm text-white/80 mb-1">Last name</label>
                  <input v-model="lastName" type="text" class="w-full px-4 py-2 rounded border border-white/20 bg-transparent" />
                  <p v-if="errors.lastName" class="text-xs text-red-400 mt-1">Last name cannot be empty.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-white/80 mb-1">Email</label>
                  <input v-model="email" type="email" class="w-full px-4 py-2 rounded border border-white/20 bg-transparent" />
                  <p v-if="errors.email" class="text-xs text-red-400 mt-1">Invalid email. Please enter a valid email address.</p>
                </div>
                <div>
                  <label class="block text-sm text-white/80 mb-1">Subject</label>
                  <input v-model="subject" type="text" class="w-full px-4 py-2 rounded border border-white/20 bg-transparent" />
                  <p v-if="errors.subject" class="text-xs text-red-400 mt-1">Subject cannot be empty.</p>
                </div>
              </div>

              <div>
                <label class="block text-sm text-white/80 mb-1">Message</label>
                <textarea v-model="message" rows="6" class="w-full px-4 py-2 rounded border border-white/20 bg-transparent"></textarea>
                <p v-if="errors.message" class="text-xs text-red-400 mt-1">Message must be at least 6 characters.</p>
              </div>

              <input v-model="website" type="text" class="hidden" autocomplete="off" tabindex="-1" />

              <div class="flex items-center gap-3 pt-2">
                <button type="submit" class="px-6 py-3 bg-black text-white rounded hover:bg-yellow-400">Send</button>
                <button type="button" @click="resetForm" class="px-6 py-3 border border-white/30 rounded hover:bg-white/10">Reset</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>

    <!-- Success Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black/60" @click.self="closeModal">
      <div class="bg-white text-black rounded-2xl p-6 w-[420px] max-w-[95vw]">
        <h4 class="text-lg font-semibold mb-2">Message sent</h4>
        <p class="text-sm text-gray-600">Thanks! We’ll get back to you soon.</p>
        <div class="flex justify-end mt-5">
          <button class="px-4 py-2 rounded bg-black text-white hover:bg-yellow-400" @click="closeModal">OK</button>
        </div>
      </div>
    </div>
  </div>
  <footer />
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      website: "", // honeypot
      errors: {},
      showModal: false,
      LS_USER_KEY: "profile_demo_user",
      LS_CONTACT_MESSAGES: "contact_messages_v1",
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem(this.LS_USER_KEY) || "null");
    if (user) {
      this.firstName = user.firstName || "";
      this.lastName = user.lastName || "";
      this.email = user.email || "";
    }
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!this.firstName.trim()) this.errors.firstName = true;
      if (!this.lastName.trim()) this.errors.lastName = true;
      if (!emailRe.test(this.email.trim())) this.errors.email = true;
      if (!this.subject.trim()) this.errors.subject = true;
      if (this.message.trim().length < 6) this.errors.message = true;

      if (this.website.trim()) return; // honeypot check

      if (Object.keys(this.errors).length) return;

      const entry = {
        id: "m_" + Date.now(),
        firstName: this.firstName.trim(),
        lastName: this.lastName.trim(),
        email: this.email.trim(),
        subject: this.subject.trim(),
        message: this.message.trim(),
        createdAt: new Date().toISOString(),
      };

      const all = JSON.parse(localStorage.getItem(this.LS_CONTACT_MESSAGES) || "[]");
      all.push(entry);
      localStorage.setItem(this.LS_CONTACT_MESSAGES, JSON.stringify(all));

      this.resetForm();
      this.showModal = true;
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.subject = "";
      this.message = "";
      this.website = "";
      this.errors = {};
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
</style>
