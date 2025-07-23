// Header.vue
<template>
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
</template>

<script setup>
</script>

<style scoped>
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
</style>
