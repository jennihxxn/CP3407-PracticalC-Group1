<!-- Workouts 페이지 - BODY 부분만 복사 -->
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
            <button class="workout-card__btn">Learn More</button>
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
            <button class="workout-card__btn">Learn More</button>
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
            <button class="workout-card__btn">Learn More</button>
            <button class="workout-card__btn blue">Book Now</button>
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
            <button class="workout-card__btn">Learn More</button>
            <button class="workout-card__btn blue">Book Now</button>
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
            <button class="workout-card__btn">Learn More</button>
            <button class="workout-card__btn blue">Book Now</button>
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
            <button class="workout-card__btn">Learn More</button>
            <button class="workout-card__btn blue">Book Now</button>
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
            <button class="workout-card__btn">Learn More</button>
            <button class="workout-card__btn blue">Book Now</button>
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
            <button class="workout-card__btn">Learn More</button>
            <button class="workout-card__btn blue">Book Now</button>
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
            <button class="workout-card__btn">Learn More</button>
            <button class="workout-card__btn blue">Book Now</button>
          </div>
        </div>
      </div>
    </section>
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
      <div class="footer__copyright">
        2025© JCU FCLub.au — All rights reserved
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default { name: "Workouts" }
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

/* Header, Navbar */
.navbar {
  background: #fff7dc;
  width: 100%;
  min-width: 1200px;
  padding: 16px 40px 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar__logo img {
  height: 48px;
}
.navbar__contacts {
  display: flex;
  gap: 32px;
  font-size: 20px;
  align-items: center;
}
.icon-phone {
  width: 28px;
  height: 28px;
  object-fit: contain;
  vertical-align: middle;
  margin-right: 8px;
}
.navbar__social img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  margin-right: 8px;
  vertical-align: middle;
}
.navbar__menu-icon {
  font-size: 28px;
  cursor: pointer;
  margin-left: 12px;
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

/* Footer */
.footer {
  background: #fff7dc;
  border-top: 2px solid #e2dcc2;
  width: 100%;
  margin-top: 48px;
  padding-bottom: 0;
  font-size: 18px;
}
.footer__top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 32px;
  padding: 34px
}

</style>
