<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__logo-col">
        <img src="/images/jcu_logo.png" alt="JCU Fitness Club Logo" class="footer__logo" />
        <p class="footer__desc">
          The information provided on the site for review is not a public offer.
          All information about cooperation and services can be obtained from the sales department.
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
            <svg class="icon" viewBox="0 0 24 24" width="20">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.56.57 1 1 0 011 1v3.62a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.62a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.21 1.11z" fill="#111" />
            </svg>
            +65 — Student Affairs
          </li>
          <li>
            <svg class="icon" viewBox="0 0 24 24" width="20">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.56.57 1 1 0 011 1v3.62a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.62a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.21 1.11z" fill="#111" />
            </svg>
            +65 — Sales Department
          </li>
          <li><img src="/images/whatsapp.svg" class="footer__icon" /> WhatsApp</li>
          <li><img src="/images/instagram.svg" class="footer__icon" /> Instagram</li>
          <li><img src="/images/telegram.svg" class="footer__icon" /> Telegram</li>
          <li>
            <svg class="icon" viewBox="0 0 24 24" width="20">
              <circle cx="12" cy="12" r="10" stroke="#111" stroke-width="2" fill="none" />
              <circle cx="12" cy="12" r="3" fill="#111" />
            </svg>
            149 Sims Drive, Singapore 387380
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__whatsapp">
        <img src="/images/whatsapp.svg" alt="WhatsApp" />
        WhatsApp
      </div>
      <div class="footer__copyright">
        2025© JCU FCLub.au — All rights reserved
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
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
  background: #33e775;
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
