<template>
  <div class="min-h-screen flex flex-col bg-[#121212] text-white">
    <section class="bg-[#efe2b6] text-black">
      <div class="max-w-6xl mx-auto px-6 py-8">
        <div class="text-xs flex items-center gap-2 text-[#0e2233]">
          <span class="inline-block w-2 h-2 bg-[#0e2233]"></span>
          <a href="index.html" class="hover:underline">Home</a>
          <span>/</span>
        </div>
        <h1 class="text-4xl font-semibold mt-2 tracking-wide">CLUB CARDS</h1>
      </div>
    </section>

    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="grid lg:grid-cols-3 gap-8">
          <article class="rounded-2xl overflow-hidden border border-white/20 bg-[url('https://images.unsplash.com/photo-1601700994345-6993fb5c6a38?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
            <div class="backdrop-brightness-75 p-8 min-h-[320px] flex flex-col justify-between">
              <div>
                <h2 class="text-xl font-semibold">ONE TRIMESTER (3 MONTH)</h2>
                <ul class="mt-4 text-sm text-white/80 space-y-1">
                  <li>Price: <span class="font-medium">$50</span></li>
                  <li>Duration: <span class="font-medium">1 trimester</span></li>
                  <li>Working Days — 7:00 – 22:00</li>
                  <li>Public Holidays / Break — 8:00 – 22:00</li>
                </ul>
              </div>
              <button class="mt-6 w-full border border-white/60 px-4 py-3 rounded hover:bg-white hover:text-black transition"
                      @click="choosePlan(1, 50)">
                CHOOSE CARD
              </button>
            </div>
          </article>

          <article class="rounded-2xl overflow-hidden border border-white/20 bg-[url('https://images.unsplash.com/photo-1610878180933-123d8f2b7c45?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
            <div class="backdrop-brightness-75 p-8 min-h-[320px] flex flex-col justify-between">
              <div>
                <h2 class="text-xl font-semibold">PERMANENT</h2>
                <ul class="mt-4 text-sm text-white/80 space-y-1">
                  <li>Price: <span class="font-medium">$175</span></li>
                  <li>Duration: <span class="font-medium">6 trimesters</span></li>
                  <li>Working Days — 7:00 – 22:00</li>
                  <li>Public Holidays / Break — 8:00 – 22:00</li>
                </ul>
              </div>
              <button class="mt-6 w-full border border-white/60 px-4 py-3 rounded hover:bg-white hover:text-black transition"
                      @click="choosePlan(6, 175)">
                CHOOSE CARD
              </button>
            </div>
          </article>

          <article class="rounded-2xl overflow-hidden border border-white/20 bg-[url('https://images.unsplash.com/photo-1520975682031-0f2d1f3a1f50?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
            <div class="backdrop-brightness-75 p-8 min-h-[320px] flex flex-col justify-between">
              <div>
                <h2 class="text-xl font-semibold">THREE TRIMESTERS (6 MONTH)</h2>
                <ul class="mt-4 text-sm text-white/80 space-y-1">
                  <li>Price: <span class="font-medium">$100</span></li>
                  <li>Duration: <span class="font-medium">3 trimesters</span></li>
                  <li>Working Days — 7:00 – 22:00</li>
                  <li>Public Holidays / Break — 8:00 – 22:00</li>
                </ul>
              </div>
              <button class="mt-6 w-full border border-white/60 px-4 py-3 rounded hover:bg-white hover:text-black transition"
                      @click="choosePlan(3, 100)">
                CHOOSE CARD
              </button>
            </div>
          </article>
        </div>

        <div class="mt-12 flex justify-center">
          <button class="w-full max-w-xl border border-white/40 px-6 py-5 rounded text-2xl tracking-wide hover:bg-white hover:text-black transition"
                  @click="choosePlan(1, 50)">
            JOIN CLUB
          </button>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  methods: {
    loadUser() {
      const LS_USER_KEY = 'profile_demo_user';
      const raw = localStorage.getItem(LS_USER_KEY);
      if (raw) return JSON.parse(raw);
      // seed a default user so selecting a plan works even if user hasn't logged in yet
      const def = {
        jcuId: '123',
        password: 'abc123',
        firstName: 'Guest',
        lastName: 'User',
        email: 'guest@example.com',
        avatar: 'images/blank-profile-picture.jpeg',
        membership: null,
        loginCount: 0,
        lastLoginAt: null,
        lastLogoutAt: null
      };
      localStorage.setItem(LS_USER_KEY, JSON.stringify(def));
      return def;
    },
    saveUser(u) {
      const LS_USER_KEY = 'profile_demo_user';
      localStorage.setItem(LS_USER_KEY, JSON.stringify(u));
    },
    choosePlan(trimestersTotal, priceUSD) {
      const DEFAULT_TRIMESTER_DAYS = 91;
      const user = this.loadUser();
      user.membership = {
        trimestersTotal,
        trimesterDays: DEFAULT_TRIMESTER_DAYS,
        startISO: new Date().toISOString(),
        priceUSD
      };
      this.saveUser(user);
      // Redirect to profile so the right panel/stats update
      window.location.href = 'profile.html';
    }
  }
}
</script>

