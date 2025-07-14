<template>
  <div>
    <!-- 상단 네비게이션 -->
    <header class="navbar">
      <div class="navbar__logo">
        <img src="/images/jcu_logo.png" alt="JCU Fitness Club Logo">
      </div>
      <div class="navbar__contacts">
        <span class="navbar__phone">
          <svg class="icon" viewBox="0 0 24 24" width="18"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.56.57 1 1 0 011 1v3.62a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.62a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.21 1.11z" fill="#111"/></svg>
          +65 — 
        </span>
        <span class="navbar__phone">
          <svg class="icon" viewBox="0 0 24 24" width="18"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.56.57 1 1 0 011 1v3.62a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.62a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.21 1.11z" fill="#111"/></svg>
          +65 — 
        </span>
      </div>
      <div class="navbar__social">
        <span class="navbar-social-item">
          <img src="/images/whatsapp.svg" alt="WhatsApp" class="footer__icon" />
          <span>WhatsApp</span>
        </span>
        <span class="navbar-social-item">
          <img src="/images/instagram.svg" alt="Instagram" class="footer__icon" />
          <span>Instagram</span>
        </span>
        <span class="navbar-social-item">
          <img src="/images/telegram.svg" alt="Telegram" class="footer__icon" />
          <span>Telegram</span>
        </span>
      </div>
      <div class="navbar__menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24">
          <path stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
      </div>
    </header>

    <!-- 경로 & 타이틀 -->
    <section class="breadcrumb">
      <span class="breadcrumb__home">HOME</span>
      <span class="breadcrumb__slash">/</span>
      <span class="breadcrumb__page">CLUB CARDS</span>
    </section>

    <!-- 카드 3개 -->
    <main class="cards-section">
      <div class="cards-row">
        <div class="card" style="background-image:url('/images/v1_3105.png')">
          <div class="card__content">
            <h2>ONE TRIMESTE (3 MONTH)</h2>
            <div class="card__desc">
              <div>PRICE: 50 S$</div>
              <div>DURATION: 1 TRIMESTERS</div>
              <div>Working Days — 7.00 - 22.00</div>
              <div>Public Holidays / Break — 8.00 - 22.00</div>
            </div>
            <button class="card__btn">CHOOSE CARD</button>
          </div>
        </div>
        <div class="card" style="background-image:url('/images/v1_3115.png')">
          <div class="card__content">
            <h2>PERMMENENT</h2>
            <div class="card__desc">
              <div>PRICE: 175 S$</div>
              <div>DURATION: 6 TRIMESTERS</div>
              <div>Working Days — 7.00 - 22.00</div>
              <div>Public Holidays / Break — 8.00 - 22.00</div>
            </div>
            <button class="card__btn">CHOOSE CARD</button>
          </div>
        </div>
        <div class="card" style="background-image:url('/images/v1_3098.png')">
          <div class="card__content">
            <h2>TREE TRIMESTERS (6 MONTH)</h2>
            <div class="card__desc">
              <div>PRICE: 100 S$</div>
              <div>DURATION: 3 TRIMESTERS</div>
              <div>Working Days — 7.00 - 22.00</div>
              <div>Public Holidays / Break — 8.00 - 22.00</div>
            </div>
            <button class="card__btn">CHOOSE CARD</button>
          </div>
        </div>
      </div>
      <div class="join-club-wrap">
        <button class="join-club-btn">JOIN CLUB</button>
      </div>
    </main>

    <!-- 푸터 -->
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__logo-col">
          <img src="/images/jcu_logo.png" alt="JCU Fitness Club Logo" class="footer__logo">
          <p class="footer__desc">
            The information provided on the site for review is not a public offer. All information about cooperation and services can be obtained from the sales department.
          </p>
          <div class="footer__apps">
            <img src="/images/appstore.svg" alt="App Store" class="footer__app-icon" />
            <img src="/images/googleplay.svg" alt="Google Play" class="footer__app-icon" />
            <img src="/images/visa.png" alt="VISA" class="footer__pay-icon" />
            <img src="/images/mastercard.png" alt="MasterCard" class="footer__pay-icon" />
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
              <svg class="icon" viewBox="0 0 24 24" width="20"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.56.57 1 1 0 011 1v3.62a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.62a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.21 1.11z" fill="#111"/></svg>
              +65 — Student Affairs
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24" width="20"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.56.57 1 1 0 011 1v3.62a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.62a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.21 1.11z" fill="#111"/></svg>
              +65 — Sales Department
            </li>
            <li>
              <img src="/images/whatsapp.svg" alt="WhatsApp" class="footer__icon">
              WhatsApp 
            </li>
            <li>
              <img src="/images/instagram.svg" alt="Instagram" class="footer__icon">
              Instagram 
            </li>
            <li>
              <img src="/images/telegram.svg" alt="Telegram" class="footer__icon">
              Telegram 
            </li>
            <li>
              <svg class="icon" viewBox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10" stroke="#111" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="3" fill="#111"/></svg>
              149 Sims Drive, Singapore 387380
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__whatsapp">
          <img src="/images/whatsapp.svg" alt="WhatsApp">
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
export default {
  name: "ClubCards"
}
</script>

<style scoped>
/* ---------- style.css 전체 복붙 ---------- */
body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background: #222;
  color: #111;
  min-width: 1200px;
}
.navbar {
  width: 100%;
  background: #fff7dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 52px 14px 52px;
  border-bottom: 6px solid #111;
  box-sizing: border-box;
}
.navbar__logo img {
  height: 48px;
  display: block;
}
.navbar__contacts {
  display: flex;
  align-items: center;
  gap: 18px;
}
.navbar__contacts span {
  font-size: 17px;
  font-weight: 400;
  color: #222;
  vertical-align: middle;
  margin-right: 20px;
  letter-spacing: 0.01em;
}
.navbar__contacts .icon {
  vertical-align: middle;
  margin-right: 6px;
}
.navbar__social {
  display: flex;
  align-items: center;
  gap: 6px;
}
.navbar__social img {
  width: 22px;
  height: 22px;
  margin-right: 5px;
  vertical-align: middle;
}
.social-desc {
  font-size: 15px;
  color: #454545;
  margin-right: 20px;
  margin-left: 2px;
  letter-spacing: 0.01em;
  vertical-align: middle;
  font-weight: 500;
}
.navbar__menu {
  margin-left: 22px;
}
.navbar__menu img {
  width: 34px;
  height: 34px;
  vertical-align: middle;
  cursor: pointer;
  opacity: 0.90;
  transition: opacity 0.18s;
}
.navbar__menu img:hover {
  opacity: 1;
}
.breadcrumb {
  background: #fff7dc;
  padding: 34px 0 16px 88px;
  font-size: 16px;
  letter-spacing: 0.08em;
}
.breadcrumb__home { color: #111; font-weight: 500; }
.breadcrumb__slash { margin: 0 9px; color: #999; }
.breadcrumb__page {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-left: 10px;
  color: #181818;
  vertical-align: middle;
}
.cards-section {
  background: #191919;
  padding: 62px 0 0 0;
}
.cards-row {
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-bottom: 44px;
}
.card {
  width: 330px;
  min-height: 340px;
  background-size: cover;
  background-position: center;
  border-radius: 0;
  box-shadow: 0 3px 24px 0 rgba(0,0,0,0.10);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.card__content {
  background: rgba(38, 40, 32, 0.46);
  color: #fff;
  padding: 38px 26px 38px 26px;
  width: 100%;
  text-align: left;
}
.card__content h2 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 24px 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.card__desc {
  font-size: 14px;
  margin-bottom: 22px;
  line-height: 1.7;
  color: #e0e0e0;
}
.card__btn {
  width: 100%;
  padding: 10px 0;
  border: 1.5px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  border-radius: 0;
}
.card__btn:hover {
  background: #fff;
  color: #1c1917;
}
.join-club-wrap {
  display: flex;
  justify-content: center;
  margin: 44px 0 54px 0;
}
.join-club-btn {
  padding: 28px 110px;
  border: 1.5px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.07em;
  border-radius: 0;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.join-club-btn:hover {
  background: #fff;
  color: #191919;
}
/* =========================
    FOOTER
========================= */
.footer {
  background: #fff7dc;
  color: #111;
  padding: 48px 0 0 0;
  border-top: 6px solid #111;
  font-size: 17px;
  margin-top: 42px;
  letter-spacing: 0.01em;
}
.footer__top {
  max-width: 1720px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 56px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 56px;
}
.footer__logo-col {
  width: 342px;
  margin-right: 26px;
}
.footer__logo {
  height: 54px;
  margin-bottom: 20px;
  margin-top: 6px;
}
.footer__desc {
  font-size: 16px;
  color: #222;
  margin-bottom: 20px;
  margin-top: 4px;
  line-height: 1.52;
  font-weight: 400;
}
.footer__apps img, .footer__apps .footer__icon {
  height: 29px;
  margin-right: 14px;
  vertical-align: middle;
}
.footer__col {
  min-width: 180px;
  padding-top: 10px;
}
.footer__col h4 {
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 18px;
  letter-spacing: 0.01em;
}
.footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer__col ul li {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 400;
  color: #111;
  letter-spacing: 0.01em;
}
.footer__col--menu ul li b {
  font-weight: 700;
}
.footer__col--contact ul li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 16px;
  letter-spacing: 0.01em;
}
.footer__icon {
  width: 22px;
  height: 22px;
  margin-right: 10px;
  vertical-align: middle;
}
.footer-contact-desc {
  font-size: 14px;
  color: #7b7b7b;
  margin-left: 5px;
  font-weight: 400;
  letter-spacing: 0.01em;
}
/* 하단라인 및 카피라이트 */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1.2px solid #aaa;
  padding: 22px 56px 18px 56px;
  margin-top: 36px;
  background: transparent;
}
.footer__whatsapp {
  display: flex;
  align-items: center;
  background: #25d366;
  color: #fff;
  font-size: 1.15rem;
  border-radius: 30px;
  padding: 10px 34px 10px 20px;
  gap: 8px;
  font-weight: 500;
  box-shadow: 0 2px 8px 0 rgba(38, 40, 32, 0.10);
}
.footer__whatsapp img {
  width: 21px;
  height: 21px;
  margin-right: 10px;
}
.footer__copyright {
  font-size: 1.05rem;
  color: #222;
  font-weight: 500;
  letter-spacing: 0.02em;
}
</style>
