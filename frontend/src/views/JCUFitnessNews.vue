<template>
  <div>
    <Header />

    <main>
      <!-- News Section Title -->
      <div class="news-title-row">
        <div>
          <span class="news-dot"></span>
          <span class="news-caption">WHAT'S NEW?</span>
          <div class="news-main-title">CHECK OUT OUR NEWS</div>
        </div>
        <div class="news-all-row">
          <span>ALL NEWS</span>
          <img src="/images/rightcircle.svg" class="icon-arrow" alt="arrow" />
        </div>
      </div>

      <!-- News Cards -->
      <div class="news-grid">
        <div
          class="news-card"
          v-for="(item, i) in newsItems"
          :key="i"
          @click="selectedNewsItem = item"
        >
          <img :src="item.image" class="news-card-img" />
          <div class="news-card-right">
            <div class="news-card-label">{{ item.label }}</div>
            <div class="news-card-title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal Popup -->
    <div
      v-if="selectedNewsItem"
      class="news-modal-backdrop"
      @click.self="closeModal"
    >
      <div class="news-modal">
        <img :src="selectedNewsItem.image" class="news-modal-img" />
        <div class="news-modal-content">
          <h2>{{ selectedNewsItem.label }}</h2>
          <h1>{{ selectedNewsItem.title }}</h1>
          <p>{{ selectedNewsItem.body }}</p>
        </div>
        <button class="modal-close" @click="closeModal">×</button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

export default {
  name: "JCUFitnessNews",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      selectedNewsItem: null,
      newsItems: [
        {
          image: "/images/v35_1795.png",
          label: "TRAINING SEASON",
          title: "DISCOVER COACH JIHYUN’S TOP 3 TIPS FOR BUILDING MUSCLE AND STAYING MOTIVATED.",
          body: "Coach Jihyun’s top tips: (1) Focus on compound lifts, (2) Maintain a consistent schedule, (3) Get enough sleep."
        },
        {
          image: "/images/v35_1870.png",
          label: "UPCOMING EVENTS",
          title: "JOIN OUR 4-WEEK INTENSIVE OUTDOOR BOOTCAMP STARTING AUGUST 5. LIMITED SLOTS AVAILABLE!",
          body: "This bootcamp includes HIIT, strength training, and endurance sessions every weekend. Meet like-minded people!"
        },
        {
          image: "/images/v35_1881.png",
          label: "WARM-UP SESSION",
          title: "ARE YOU STRETCHING THE WRONG WAY? LEARN HOW TO WARM UP LIKE A PRO",
          body: "Many stretch incorrectly before workouts. Learn the difference between dynamic and static stretching!"
        },
        {
          image: "/images/v53_268.png",
          label: "FREE TRIAL PT EVENTS",
          title: "SIGN UP THIS MONTH AND RECEIVE 1 FREE PT SESSION WORTH $80!",
          body: "We’re giving away 1 FREE personal training session to all new members this August. Limited slots available!"
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.selectedNewsItem = null;
    }
  }
};
</script>

<style scoped>
body {
  background: #fcf2d7;
  font-family: 'Inter', sans-serif;
  color: #222;
}

/* News Section */
.news-title-row {
  max-width: 1450px;
  margin: 52px auto 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 52px;
}
.news-dot {
  width: 13px;
  height: 13px;
  background: #17506e;
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
  position: relative;
  top: -2px;
}
.news-caption {
  color: #17506e;
  font-size: 15px;
  font-weight: 600;
  margin-left: 7px;
  letter-spacing: 1px;
}
.news-main-title {
  font-size: 25px;
  font-weight: 500;
  margin-top: 9px;
}
.news-all-row {
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 6px;
}
.icon-arrow {
  width: 26px;
  height: 26px;
}

/* Card Grid */
.news-grid {
  max-width: 1450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 40px 0 30px;
}
.news-card {
  display: flex;
  align-items: flex-start;
  gap: 36px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
.news-card:hover {
  opacity: 0.94;
  transition: 0.3s ease;
}
.news-card-img {
  width: 330px;
  height: 170px;
  object-fit: cover;
  border-radius: 9px;
  box-shadow: 0 2px 8px rgba(40, 40, 40, 0.11);
}
.news-card-right {
  flex: 1;
}
.news-card-label {
  background: #fff;
  color: #232323;
  font-weight: 400;
  font-size: 16.5px;
  border-radius: 35px;
  padding: 10px 28px;
  margin-bottom: 15px;
  box-shadow: 0 1px 7px rgba(30, 30, 30, 0.08);
}
.news-card-title {
  background: #17506e;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  border-radius: 7px;
  padding: 20px 28px;
  line-height: 1.23;
  max-width: 900px;
  display: flex;
  align-items: center;
}

/* Modal */
.news-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.news-modal {
  background: white;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  position: relative;
  padding: 24px;
}
.news-modal-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}
.news-modal-content h1 {
  font-size: 24px;
  margin-bottom: 12px;
}
.news-modal-content h2 {
  font-size: 16px;
  color: #17506e;
  margin-bottom: 8px;
}
.news-modal-content p {
  font-size: 16px;
  line-height: 1.6;
}
.modal-close {
  position: absolute;
  top: 16px;
  right: 18px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 1000px) {
  .news-title-row,
  .news-grid {
    padding: 0 13px;
  }
  .news-card-img {
    width: 120px;
    height: 80px;
  }
  .news-card-title {
    font-size: 14px;
  }
}
</style>
