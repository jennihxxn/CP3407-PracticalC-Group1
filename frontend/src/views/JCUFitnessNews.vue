<template>
  <div class="min-h-screen flex flex-col bg-[#121212] text-white">
    <header />

    <!-- Hero / Breadcrumb -->
    <section class="bg-[#efe2b6] text-black">
      <div class="max-w-6xl mx-auto px-6 py-8">
        <div class="text-xs flex items-center gap-2 text-[#0e2233]">
          <span class="inline-block w-2 h-2 bg-[#0e2233]"></span>
          <router-link to="/index" class="hover:underline">HOME</router-link>
          <span>/</span>
        </div>
        <h1 class="text-4xl font-semibold mt-2 tracking-wide">NEWS</h1>
      </div>
    </section>

    <!-- Controls -->
    <section class="max-w-6xl mx-auto px-6 py-6">
      <div class="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat.key"
            :class="['chip px-3 py-1 rounded-full border text-sm', filter === cat.key ? 'bg-white text-black border-white' : 'border-white/30']"
            @click="changeFilter(cat.key)"
            type="button"
          >{{ cat.label }}</button>
        </div>
        <div class="flex items-center gap-3">
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search news…"
            class="px-4 py-2 rounded border border-white/20 bg-transparent w-64"
          />
          <select v-model="sortMode" class="px-3 py-2 rounded border border-white/20 bg-black/40">
            <option value="relevance">Sort: Relevance</option>
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Content -->
    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-6 pb-14">

        <!-- Top for you -->
        <div v-if="showTopRow" id="topRow" class="mb-10">
          <h2 class="text-2xl font-semibold mb-4">Top for you</h2>
          <div id="topGrid" class="grid md:grid-cols-3 gap-6">
            <article
              v-for="item in topItems"
              :key="item.id"
              class="rounded-2xl overflow-hidden border border-white/15 bg-black/30 hover:bg-white/5 transition cursor-pointer"
              @click="openArticle(item.id)"
            >
              <div
                class="h-40 bg-cover bg-center"
                :style="{ backgroundImage: `url('${item.img}')` }"
              ></div>
              <div class="p-4 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] uppercase tracking-wide text-white/60">{{ item.category }}</span>
                  <span v-if="isRead(item.id)" class="text-xs px-2 py-0.5 rounded bg-white/10 border border-white/20">Read</span>
                </div>
                <h3 class="text-lg font-semibold leading-snug">{{ item.title }}</h3>
                <p class="text-sm text-white/70 line-clamp-3">{{ item.body }}</p>
                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-white/50">{{ formatDate(item.date) }}</span>
                  <div class="flex items-center gap-2">
                    <button class="text-xs underline text-white/80 hover:text-white" @click.stop="openArticle(item.id)">Open</button>
                    <button
                      class="text-xs underline"
                      :class="isBookmarked(item.id) ? 'text-yellow-300 hover:text-yellow-300' : 'text-white/60 hover:text-yellow-300'"
                      @click.stop="toggleBookmark(item.id)"
                      type="button"
                    >
                      {{ isBookmarked(item.id) ? 'Bookmarked' : 'Bookmark' }}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- All news -->
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-semibold">All news</h2>
          <button
            id="clearReadBtn"
            class="text-xs underline text-white/70 hover:text-white"
            @click="clearRead"
            type="button"
          >Clear “read” state</button>
        </div>
        <div id="newsGrid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="item in pagedItems"
            :key="item.id"
            class="rounded-2xl overflow-hidden border border-white/15 bg-black/30 hover:bg-white/5 transition cursor-pointer"
            @click="openArticle(item.id)"
          >
            <div
              class="h-40 bg-cover bg-center"
              :style="{ backgroundImage: `url('${item.img}')` }"
            ></div>
            <div class="p-4 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] uppercase tracking-wide text-white/60">{{ item.category }}</span>
                <span v-if="isRead(item.id)" class="text-xs px-2 py-0.5 rounded bg-white/10 border border-white/20">Read</span>
              </div>
              <h3 class="text-lg font-semibold leading-snug">{{ item.title }}</h3>
              <p class="text-sm text-white/70 line-clamp-3">{{ item.body }}</p>
              <div class="flex items-center justify-between pt-2">
                <span class="text-xs text-white/50">{{ formatDate(item.date) }}</span>
                <div class="flex items-center gap-2">
                  <button
                    class="text-xs underline text-white/80 hover:text-white"
                    @click.stop="openArticle(item.id)"
                    type="button"
                  >Open</button>
                  <button
                    class="text-xs underline"
                    :class="isBookmarked(item.id) ? 'text-yellow-300 hover:text-yellow-300' : 'text-white/60 hover:text-yellow-300'"
                    @click.stop="toggleBookmark(item.id)"
                    type="button"
                  >
                    {{ isBookmarked(item.id) ? 'Bookmarked' : 'Bookmark' }}
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="mt-8 flex justify-center">
          <button
            id="loadMoreBtn"
            class="px-5 py-2 rounded border border-white/30 hover:bg-white/10"
            v-if="canLoadMore"
            @click="loadMore"
            type="button"
          >Load more</button>
        </div>
      </div>
    </main>

    <!-- Article Modal -->
    <transition name="fade">
      <div
        v-if="modalOpen"
        id="articleModal"
        class="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
        @click.self="closeArticle"
      >
        <div class="bg-white text-black rounded-2xl w-[min(900px,92vw)] max-h-[90vh] overflow-hidden flex flex-col">
          <div class="flex items-center justify-between px-5 py-4 border-b">
            <h3 id="modalTitle" class="text-lg font-semibold">{{ modalArticle?.title }}</h3>
            <button class="text-gray-600 hover:text-black" @click="closeArticle" type="button">✕</button>
          </div>
          <div class="p-5 overflow-y-auto flex-1">
            <img
              v-if="modalArticle?.img"
              id="modalImg"
              :src="modalArticle.img"
              :alt="modalArticle.title"
              class="w-full max-h-72 object-cover rounded-lg mb-4"
            />
            <p id="modalMeta" class="text-xs text-gray-600 mb-3">{{ formatDate(modalArticle?.date) }} • {{ modalArticle?.category }}</p>
            <div
              id="modalBody"
              class="prose prose-sm max-w-none"
              v-html="modalArticle?.bodyHtml"
            ></div>
          </div>
          <div class="px-5 py-4 border-t flex items-center justify-end gap-2">
            <button
              id="modalBookmark"
              class="px-3 py-2 rounded border border-black/20"
              @click="toggleBookmark(modalArticle.id, true)"
              type="button"
            >
              {{ isBookmarked(modalArticle?.id) ? 'Bookmarked' : 'Bookmark' }}
            </button>
            <button
              class="px-3 py-2 rounded bg-black text-white hover:bg-yellow-400"
              @click="closeArticle"
              type="button"
            >Close</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const LS_USER_KEY = 'profile_demo_user'
const LS_NEWS_STATE = 'news_state_v1' // { read: {id:true}, bookmarks:[id] }

function loadUser() {
  const raw = localStorage.getItem(LS_USER_KEY)
  if (raw) return JSON.parse(raw)
  const def = { firstName:'Guest', lastName:'User', email:'guest@example.com', bookings:[], membership:null }
  localStorage.setItem(LS_USER_KEY, JSON.stringify(def))
  return def
}
function loadNewsState() {
  const raw = localStorage.getItem(LS_NEWS_STATE)
  return raw ? JSON.parse(raw) : { read:{}, bookmarks:[] }
}
function saveNewsState(s) {
  localStorage.setItem(LS_NEWS_STATE, JSON.stringify(s))
}

const user = loadUser()
const newsState = ref(loadNewsState())

// Demo news data (same as your array but converted here)
function offsetDays(n){
  const d = new Date()
  d.setDate(d.getDate()+n)
  return d.toISOString()
}
const NEWS = [
  {
    id: 'n1',
    title: 'New Yoga Sunrise Sessions',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    date: offsetDays(-2),
    category: 'training',
    tags: ['yoga','class','wellness'],
    body: 'We’re adding early-morning yoga sessions with focus on breath and flexibility. Perfect before lectures!',
  },
  {
    id: 'n2',
    title: 'Pool Maintenance — Short Closure',
    img: 'images/Pool Maintenance — Short Closure.jpg',
    date: offsetDays(-1),
    category: 'announcements',
    tags: ['pool','facility','maintenance'],
    body: 'The swimming pool will be closed on Saturday 9:00–13:00 for filter replacement. Thanks for understanding.',
  },
  {
    id: 'n3',
    title: 'Strength Training 101 (Free Workshop)',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
    date: offsetDays(-5),
    category: 'training',
    tags: ['gym','strength','workshop'],
    body: 'Learn fundamentals of compound lifts, proper form, and safe progression. Seats are limited.',
  },
  {
    id: 'n4',
    title: 'Membership Perks Expanded',
    img: 'images/Membership Perks Expanded.jpg',
    date: offsetDays(-10),
    category: 'club',
    tags: ['membership','perks','discounts'],
    body: 'Active members now get guest passes twice a month plus 10% off at the café.',
  },
  {
    id: 'n5',
    title: 'Dance Room Refurbished',
    img: 'images/Boxing Room Refurbished.jpg',
    date: offsetDays(-3),
    category: 'facilities',
    tags: ['boxing','facility','upgrade'],
    body: 'New heavy bags, flooring, and ventilation. Book a session and try the new setup.',
  },
  {
    id: 'n6',
    title: 'Sauna Etiquette & Safety',
    img: 'images/shower.jpg',
    date: offsetDays(-8),
    category: 'announcements',
    tags: ['sauna','rules','wellness'],
    body: 'Please shower before entering, limit sessions to 10–15 min, and hydrate. Be kind to others.',
  },
  {
    id: 'n7',
    title: 'Basketball 3v3 Night',
    img: 'images/Basketball 3v3 Night.jpg',
    date: offsetDays(0),
    category: 'training',
    tags: ['court','basketball','event'],
    body: 'Casual 3v3 tournament this Friday evening. Sign-up at the counter. All levels welcome!',
  },
  {
    id: 'n8',
    title: 'Spin Studio: New Bikes Arrived',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop',
    date: offsetDays(-4),
    category: 'facilities',
    tags: ['spin','cycling','facility'],
    body: 'The studio just received 10 brand-new bikes with better metrics and smoother resistance.',
  },
]

// Personalization signals
const hasMembership = !!user.membership
let lastFacilityTag = null
if (Array.isArray(user.bookings) && user.bookings.length) {
  const last = user.bookings[user.bookings.length-1]
  lastFacilityTag = mapFacilityToTag(last.facilityId || '')
}
function mapFacilityToTag(fid){
  const map = { gym:'gym', pool:'pool', yoga:'yoga', boxing:'boxing', sauna:'sauna', court:'court', spin:'spin', pt:'training', pilates:'pilates' }
  return map[fid] || null
}

// Scoring function
function scoreNews(item){
  let score = 0
  const ageDays = (Date.now() - new Date(item.date).getTime()) / (1000*60*60*24)
  score += Math.max(0, 30 - ageDays)
  if (hasMembership && item.tags.includes('membership')) score += 10
  if (lastFacilityTag && item.tags.includes(lastFacilityTag)) score += 12
  if (item.category === 'facilities' && lastFacilityTag) score += 4
  if (newsState.value.read[item.id]) score -= 8
  return score
}

// Reactive state
const filter = ref('all')
const searchQuery = ref('')
const sortMode = ref('relevance')
const page = ref(0)
const PAGE_SIZE = 6

// Categories list for buttons
const categories = [
  { key: 'all', label: 'All' },
  { key: 'club', label: 'Club' },
  { key: 'training', label: 'Training' },
  { key: 'facilities', label: 'Facilities' },
  { key: 'announcements', label: 'Announcements' },
]

// Computed filtered and scored items
const filteredItems = computed(() => {
  let items = NEWS.map(n => ({ ...n, score: scoreNews(n) }))

  if (filter.value !== 'all') items = items.filter(n => n.category === filter.value)

  const q = searchQuery.value.toLowerCase().trim()
  if (q) {
    items = items.filter(n =>
      n.title.toLowerCase().includes(q) ||
      n.body.toLowerCase().includes(q) ||
      n.tags.join(' ').toLowerCase().includes(q)
    )
  }

  if (sortMode.value === 'newest') {
    items.sort((a,b) => new Date(b.date) - new Date(a.date))
  } else if (sortMode.value === 'oldest') {
    items.sort((a,b) => new Date(a.date) - new Date(b.date))
  } else {
    items.sort((a,b) => b.score - a.score || new Date(b.date) - new Date(a.date))
  }

  return items
})

const pagedItems = computed(() => {
  return filteredItems.value.slice(0, (page.value+1)*PAGE_SIZE)
})

const canLoadMore = computed(() => {
  return filteredItems.value.length > pagedItems.value.length
})

// "Top for you" logic (only visible on all + relevance + empty search)
const showTopRow = computed(() => {
  return filter.value === 'all' && searchQuery.value.trim() === '' && sortMode.value === 'relevance'
})
const topItems = computed(() => {
  if (!showTopRow.value) return []
  return filteredItems.value.slice(0, 3)
})

// Helpers
function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString()
}
function isRead(id) {
  return !!newsState.value.read[id]
}
function isBookmarked(id) {
  return newsState.value.bookmarks.includes(id)
}

// Methods
function changeFilter(newFilter) {
  filter.value = newFilter
  page.value = 0
}
function loadMore() {
  page.value++
}
function clearRead() {
  newsState.value.read = {}
  saveNewsState(newsState.value)
}

function openArticle(id) {
  modalArticle.value = NEWS.find(n => n.id === id)
  if (!modalArticle.value) return
  // Mark read
  newsState.value.read[id] = true
  saveNewsState(newsState.value)
  modalOpen.value = true
}
function closeArticle() {
  modalOpen.value = false
}
function toggleBookmark(id, fromModal = false) {
  const idx = newsState.value.bookmarks.indexOf(id)
  if (idx >= 0) newsState.value.bookmarks.splice(idx, 1)
  else newsState.value.bookmarks.push(id)
  saveNewsState(newsState.value)
  if (fromModal && modalArticle.value?.id === id) {
    // Update modal button label reactive by computed
  }
}

// Modal state
const modalOpen = ref(false)
const modalArticle = ref(null)

// Watchers to reset page on filter/search/sort change
watch([filter, searchQuery, sortMode], () => {
  page.value = 0
})
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* fade transition for modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
