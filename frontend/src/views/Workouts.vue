<template>
  <div class="min-h-screen flex flex-col bg-[#121212] text-white">
    <Header />

    <!-- Hero -->
    <section class="bg-[#efe2b6] text-black">
      <div class="max-w-6xl mx-auto px-6 py-8">
        <div class="text-xs flex items-center gap-2 text-[#0e2233]">
          <span class="inline-block w-2 h-2 bg-[#0e2233]"></span>
          <RouterLink to="/" class="hover:underline">HOME</RouterLink>
          <span>/</span>
        </div>
        <h1 class="text-4xl font-semibold mt-2 tracking-wide">WORK OUTS</h1>
      </div>
    </section>

    <!-- Category jump -->
    <nav class="max-w-6xl mx-auto px-6 py-6">
      <div class="flex flex-wrap gap-2">
        <a
          v-for="c in CATEGORIES"
          :key="c.id"
          :href="'#' + c.id"
          class="px-3 py-1 rounded-full border border-white/30 text-sm hover:bg-white hover:text-black transition"
        >
          {{ c.title }}
        </a>
      </div>
    </nav>

    <!-- Rows -->
    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-6 pb-16 space-y-10">
        <section v-for="c in CATEGORIES" :id="c.id" :key="c.id">
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-2xl font-semibold">{{ c.title }}</h2>
            <div class="flex gap-2">
              <button
                class="px-3 py-1 rounded border border-white/20 hover:bg-white/10"
                @click="scrollStrip(c.id, -1)"
              >
                &larr;
              </button>
              <button
                class="px-3 py-1 rounded border border-white/20 hover:bg-white/10"
                @click="scrollStrip(c.id, 1)"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div class="group relative">
            <!-- gradient masks -->
            <div class="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#121212] to-transparent opacity-80"></div>
            <div class="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#121212] to-transparent opacity-80"></div>

            <div
              :id="'strip-' + c.id"
              class="scrollstrip flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2"
            >
              <article
                v-for="it in c.items"
                :key="it.id"
                class="min-w-[280px] max-w-[320px] bg-black border border-gray-500 text-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition snap-start"
              >
                <div
                  class="h-40 bg-cover bg-center"
                  :style="{ backgroundImage: `url('${it.img}')` }"
                ></div>
                <div class="p-4">
                  <span
                    class="inline-block text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200"
                  >
                    {{ it.badge }}
                  </span>
                  <h3 class="mt-2 text-lg font-semibold">{{ it.name }}</h3>
                  <p class="text-sm text-gray-600 mt-1">{{ it.desc }}</p>
                  <div class="mt-4 flex items-center gap-2">
                    <button
                      class="flex-1 text-[13px] px-3 py-2 rounded border border-sky-500 text-sky-700 hover:bg-sky-50"
                    >
                      Learn More
                    </button>
                    <button
                      class="flex-1 text-[13px] px-3 py-2 rounded bg-sky-800 text-white hover:bg-sky-700"
                      @click="bookNow(it.facilityId)"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const CATEGORIES = [
  {
    id: "promotions",
    title: "Members' Promotions",
    items: [
      {
        id: "coach",
        name: "Coaching",
        badge: "Members' Promotions",
        desc: "Personalized sessions to hit your goals.",
        img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=1600&auto=format&fit=crop",
        facilityId: "pt",
      },
      {
        id: "fitprog",
        name: "Fitness programs",
        badge: "Members' Promotions",
        desc: "24/7 access plans & progressive routines.",
        img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
        facilityId: "gym",
      },
      {
        id: "wellx",
        name: "Wellness pack",
        badge: "Members' Promotions",
        desc: "Massage + sauna combo for recovery.",
        img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1600&auto=format&fit=crop",
        facilityId: "sauna",
      },
      {
        id: "spinpro",
        name: "Spin intro",
        badge: "Members' Promotions",
        desc: "Free first spin class this week.",
        img: "https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1600&auto=format&fit=crop",
        facilityId: "spin",
      },
    ],
  },
  {
    id: "teams",
    title: "Members' Benefit — Teams",
    items: [
      {
        id: "basket",
        name: "Basketball team",
        badge: "Members' Benefit",
        desc: "Join weekly team drills & scrimmage.",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
        facilityId: "court",
      },
      {
        id: "dance",
        name: "Dance team",
        badge: "Members' Benefit",
        desc: "Express yourself and build rhythm.",
        img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop",
        facilityId: "yoga",
      },
      {
        id: "teamfit",
        name: "Team fitness",
        badge: "Members' Benefit",
        desc: "Group-based workouts for camaraderie.",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
        facilityId: "gym",
      },
      {
        id: "stb",
        name: "Sports Team Building",
        badge: "Members' Benefit",
        desc: "Fun challenge circuits for squads.",
        img: "https://images.unsplash.com/photo-1546484959-f9a53db89c89?q=80&w=1600&auto=format&fit=crop",
        facilityId: "pt",
      },
      {
        id: "badmin",
        name: "Badminton",
        badge: "Members' Benefit",
        desc: "Fast-paced matches & drills.",
        img: "https://images.unsplash.com/photo-1511245834210-c85e8a162699?q=80&w=1600&auto=format&fit=crop",
        facilityId: "court",
      },
      {
        id: "volley",
        name: "Volley ball team",
        badge: "Members' Benefit",
        desc: "Serve, spike, block together.",
        img: "https://images.unsplash.com/photo-1517341725616-017eb3be1bfb?q=80&w=1600&auto=format&fit=crop",
        facilityId: "court",
      },
    ],
  },
  {
    id: "classes",
    title: "Classes & Studios",
    items: [
      {
        id: "yoga",
        name: "Yoga Flow",
        badge: "Class",
        desc: "Breathwork & flexibility morning flow.",
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop",
        facilityId: "yoga",
      },
      {
        id: "pilates",
        name: "Pilates Core",
        badge: "Class",
        desc: "Control & core stability.",
        img: "https://images.unsplash.com/photo-1599050751795-5f38f8b9dc21?q=80&w=1600&auto=format&fit=crop",
        facilityId: "pilates",
      },
      {
        id: "spin",
        name: "Spin Studio",
        badge: "Class",
        desc: "Intervals & cadence party.",
        img: "https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1600&auto=format&fit=crop",
        facilityId: "spin",
      },
      {
        id: "boxing",
        name: "Boxing Basics",
        badge: "Class",
        desc: "Pads & footwork fundamentals.",
        img: "https://images.unsplash.com/photo-1544915632-0e4d9e4d08d1?q=80&w=1600&auto=format&fit=crop",
        facilityId: "boxing",
      },
    ],
  },
  {
    id: "wellness",
    title: "Wellness & Extras",
    items: [
      {
        id: "sauna",
        name: "Sauna",
        badge: "Wellness",
        desc: "Relax & recover (30 min).",
        img: "https://images.unsplash.com/photo-1603901720437-6f8b74a06a2e?q=80&w=1600&auto=format&fit=crop",
        facilityId: "sauna",
      },
      {
        id: "pool",
        name: "Swimming Pool",
        badge: "Wellness",
        desc: "Lap lanes for endurance.",
        img: "https://images.unsplash.com/photo-1517833969405-d4a24c2c8280?q=80&w=1600&auto=format&fit=crop",
        facilityId: "pool",
      },
      {
        id: "massage",
        name: "Additional Services",
        badge: "Wellness",
        desc: "Massage, nutrition advice, recovery.",
        img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop",
        facilityId: "sauna",
      },
    ],
  },
];

function scrollStrip(id, dir) {
  const el = document.getElementById("strip-" + id);
  if (el) {
    el.scrollBy({ left: dir * 600, behavior: "smooth" });
  }
}

function bookNow(facilityId) {
  localStorage.setItem("pref_facility", facilityId);
  router.push("/booking");
}

onMounted(() => {
  const style = document.createElement("style");
  style.textContent = `
    .scrollstrip { scrollbar-width: thin; scrollbar-color: #888 transparent; }
    .scrollstrip::-webkit-scrollbar { height: 10px; }
    .scrollstrip::-webkit-scrollbar-thumb { background: #666; border-radius: 9999px; }
    .scrollstrip::-webkit-scrollbar-track { background: transparent; }
  `;
  document.head.appendChild(style);
});
</script>
