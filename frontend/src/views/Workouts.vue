<template>
<div>
  <Header />

  <!-- Breadcrumb -->
  <section class="breadcrumb">
    <span class="breadcrumb__home">HOME</span>
    <span class="breadcrumb__slash">/</span>
    <span class="breadcrumb__page">WORK OUTS</span>
  </section>

  <!-- WORKOUTS card grid -->
  <main class="workouts-main">
    <section class="workouts__container">
      <!-- 1st row (4 cards) -->
      <div class="workouts__row">
        <div class="workout-card">
          <img src="/images/coaching.jpg" alt="Coaching" class="workout-card__img" />
          <div class="workout-card__badge brown">Member Promotions</div>
          <div class="workout-card__title">Coaching</div>
          <div class="workout-card__desc">
            Personalized training sessions designed to help you achieve your fitness goals with expert guidance.
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Coaching')">Learn More</button>
          </div>
        </div>
        <div class="workout-card">
          <img src="/images/Fitness_Programs.jpg" alt="Fitness Programs" class="workout-card__img" />
          <div class="workout-card__badge brown">Member Promotions</div>
          <div class="workout-card__title">Fitness programs</div>
          <div class="workout-card__desc">
            State-of-the-art, 24-hour access gym
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Fitness programs')">Learn More</button>
          </div>
        </div>
        <div class="workout-card">
          <img src="/images/Basket_Ball_Team.jpg" alt="Basket Ball Team" class="workout-card__img" />
          <div class="workout-card__badge blue">Member Benefit</div>
          <div class="workout-card__title">Basket ball team</div>
          <div class="workout-card__desc">
            Join our dynamic basketball team and compete in competitions and friendly matches. All skill levels welcome!
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Basket ball team')">Learn More</button>
            <button class="workout-card__btn blue" @click="bookNow('Basket ball team')">Book Now</button>
          </div>
        </div>
        <div class="workout-card">
          <img src="/images/Dance_Team.jpg" alt="Dance Team" class="workout-card__img" />
          <div class="workout-card__badge blue">Member Benefit</div>
          <div class="workout-card__title">Dance team</div>
          <div class="workout-card__desc">
            Express yourself, burn calories, and build strength through fun and high-energy dance sessions.
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Dance team')">Learn More</button>
            <button class="workout-card__btn blue" @click="bookNow('Dance team')">Book Now</button>
          </div>
        </div>
      </div>
      <!-- 2nd row (5 cards) -->
      <div class="workouts__row">
        <div class="workout-card">
          <img src="/images/Additional_Services.jpg" alt="Additional Services" class="workout-card__img" />
          <div class="workout-card__badge blue">Member Benefit</div>
          <div class="workout-card__title">Additional Services</div>
          <div class="workout-card__desc">
            Explore wellness extras like ergonomic working, nutrition advice, and recovery program.
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Additional Services')">Learn More</button>
            <button class="workout-card__btn blue" @click="bookNow('Additional Services')">Book Now</button>
          </div>
        </div>
        <div class="workout-card">
          <img src="/images/Team_Fitness.jpg" alt="Team Fitness" class="workout-card__img" />
          <div class="workout-card__badge blue">Member Benefit</div>
          <div class="workout-card__title">Team fitness</div>
          <div class="workout-card__desc">
            Engage group-based workouts through physical activity while building your physical resilience.
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Team fitness')">Learn More</button>
            <button class="workout-card__btn blue" @click="bookNow('Team fitness')">Book Now</button>
          </div>
        </div>
        <div class="workout-card">
          <img src="/images/Sports_Team_Building.jpg" alt="Sports Team Building" class="workout-card__img" />
          <div class="workout-card__badge blue">Member Benefit</div>
          <div class="workout-card__title">Sports Team Building</div>
          <div class="workout-card__desc">
            Strengthen team synergy and challenge coworkers with exciting, competitive cooperation games.
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Sports Team Building')">Learn More</button>
            <button class="workout-card__btn blue" @click="bookNow('Sports Team Building')">Book Now</button>
          </div>
        </div>
        <div class="workout-card">
          <img src="/images/Badminton.jpg" alt="Badminton" class="workout-card__img" />
          <div class="workout-card__badge blue">Member Benefit</div>
          <div class="workout-card__title">Badminton</div>
          <div class="workout-card__desc">
            Sharpen your reflexes and enjoy a good workout with friendly badminton matches.
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Badminton')">Learn More</button>
            <button class="workout-card__btn blue" @click="bookNow('Badminton')">Book Now</button>
          </div>
        </div>
        <div class="workout-card">
          <img src="/images/Volley_Ball_Team.jpg" alt="Volley Ball Team" class="workout-card__img" />
          <div class="workout-card__badge blue">Member Benefit</div>
          <div class="workout-card__title">Volley ball team</div>
          <div class="workout-card__desc">
            Spike, serve, and block your way to fitness with our energetic, inclusive volleyball squad.
          </div>
          <div class="workout-card__btns">
            <button class="workout-card__btn" @click="learnMore('Volley ball team')">Learn More</button>
            <button class="workout-card__btn blue" @click="bookNow('Volley ball team')">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Workouts",
  components: {
    Header,
    Footer
  },
  methods: {
    learnMore(title) {
      alert(`More information about: ${title}`);
    },
    bookNow(title) {
      alert(`Booking process started for: ${title}`);
    }
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background: #fff7dc !important;
  color: #191919;
  min-width: 1200px;
  font-size: 22px;
  line-height: 1.7;
}
body {
  background: #fff7dc !important;
}

/* Breadcrumb */
.breadcrumb {
  background: #fff7dc;
  border-bottom: 4px solid #191919;
  padding: 18px 0 18px 90px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #222;
  display: flex;
  align-items: center;
  gap: 24px;
}
.breadcrumb__slash {
  font-size: 38px;
  font-weight: 200;
  color: #a6a6a6;
}
.breadcrumb__page {
  letter-spacing: 0.02em;
  font-weight: 700;
}

/* ----- 운동 카드 영역 ----- */
.workouts-main {
  background: #fff7dc;
  padding-top: 24px;
  padding-bottom: 54px;
}
.workouts__container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 100%;
}
.workouts__row {
  display: flex;
  flex-direction: row;
  gap: 36px;
  justify-content: center;
  margin-bottom: 18px;
}
.workout-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 36px 0 rgba(153, 153, 153, 0.12);
  width: 420px;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 24px 0;
  margin-bottom: 0;
  transition: box-shadow 0.2s;
}
.workout-card:hover {
  box-shadow: 0 8px 32px 2px rgba(153, 133, 113, 0.20);
}
.workout-card__img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.workout-card__badge {
  margin-top: 18px;
  margin-left: 24px;
  padding: 4px 13px 4px 13px;
  border-radius: 12px;
  font-size: 0.95em;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
  display: inline-block;
}
.workout-card__badge.brown {
  background: #f6e7d9;
  color: #965336;
}
.workout-card__badge.blue {
  background: #e6f5ff;
  color: #2576b7;
}
.workout-card__title {
  margin: 6px 0 0 24px;
  font-size: 1.29em;
  font-weight: 700;
  color: #222;
  letter-spacing: 0.02em;
}
.workout-card__desc {
  margin: 14px 0 0 24px;
  font-size: 1.08em;
  color: #555;
  line-height: 1.6;
  min-height: 54px;
  margin-bottom: 22px;
  max-width: 86%;
}
.workout-card__btns {
  margin-left: 24px;
  margin-top: 12px;
  display: flex;
  gap: 12px;
}
.workout-card__btn {
  padding: 8px 24px;
  background: #fff;
  border: 2px solid #2d7bc7;
  color: #2d7bc7;
  border-radius: 8px;
  font-size: 1.06em;
  font-weight: 700;
  cursor: pointer;
  margin-right: 8px;
  transition: background 0.13s, color 0.13s, border 0.13s;
  margin-bottom: 2px;
}
.workout-card__btn.blue, .workout-card__btn.blue:hover {
  background: #2d7bc7;
  color: #fff;
  border-color: #2d7bc7;
}
.workout-card__btn:hover {
  background: #e3f0fd;
  color: #2d7bc7;
  border-color: #0f2a45;
}
</style>
