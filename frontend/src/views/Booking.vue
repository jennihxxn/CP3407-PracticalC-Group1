<template>
  <div>
    <Header />


    <!-- Breadcrumb -->
    <section class="breadcrumb">
      <span class="breadcrumb__home">HOME</span>
      <span class="breadcrumb__slash">/</span>
      <span class="breadcrumb__page">BOOKING</span>
    </section>

    <!-- Booking Form -->
    <main class="booking-main">
      <div class="booking-form__container">
        <div class="booking-form__left">
          <div class="booking-form__label">DATE</div>
          <input type="text" class="booking-form__input" placeholder="SELECT DATE" />
          <div class="booking-form__label">TIME</div>
          <input type="text" class="booking-form__input" placeholder="SELECT TIME" />
          <button class="booking-form__save-btn">SAVE</button>
        </div>
        <div class="booking-form__right">
          <div class="booking-form__title">Your booking</div>
          <input type="text" class="booking-form__input" value="3/7/2025" />
          <div class="booking-form__desc">
            Enter the email you specified during registration and we will send you a letter with instructions.
          </div>
          <button class="booking-form__cancel-btn">CANCEL</button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "Booking",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
/* style.css 전체 복붙 [131] */
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

.breadcrumb {
  background: #fff7dc;
  padding: 30px 0 22px 94px;
  font-size: 0;
  display: flex;
  align-items: flex-end;
  border-bottom: 3.5px solid #191919;
  margin-bottom: 36px;
}
.breadcrumb__home {
  color: #222;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.13em;
  margin-right: 28px;
  font-family: 'Inter', Arial, sans-serif;
  line-height: 2.3;
}
.breadcrumb__slash {
  font-size: 40px;
  color: #bababa;
  margin-right: 28px;
  line-height: 2.3;
}
.breadcrumb__page {
  font-size: 58px;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 800;
  color: #222;
  letter-spacing: 0.04em;
  margin-left: 10px;
  margin-bottom: 0.03em;
  line-height: 2.3;
}

/* Booking 폼 영역 - 박스 2개를 가로 50%씩! */
.booking-main {
  background: #fff7dc;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.booking-form__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  background: #fff7dc;
  width: 100vw;
  max-width: none;
  min-width: 0;
  gap: 0;
  padding: 70px 0 82px 0;
  border-bottom: none;
  border-top: none;
}
.booking-form__left,
.booking-form__right {
  width: 50vw;
  min-width: 0;
  max-width: none;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 60px 70px 60px;
  box-shadow: 0 4px 32px 0 rgba(213,181,115,0.18);
  border-radius: 0;
}
.booking-form__right {
  border-left: none;
}
.booking-form__label {
  font-size: 1.23em;
  color: #8d8d8d;
  margin-bottom: 18px;
  margin-top: 34px;
  letter-spacing: 0.09em;
  font-family: 'Inter', Arial, sans-serif;
  line-height: 2.0;
}
.booking-form__label:first-child { margin-top: 0; }
.booking-form__input {
  width: 100%;
  height: 58px;
  background: #fff;
  border: 2.2px solid #bcbcbc;
  font-size: 1.23em;
  padding: 0 20px;
  margin-bottom: 30px;
  border-radius: 0;
  font-family: inherit;
  color: #191919;
  box-sizing: border-box;
  line-height: 2.0;
}
.booking-form__save-btn,
.booking-form__cancel-btn {
  padding: 17px 46px;
  background: #96492e;
  border: none;
  color: #fff;
  font-size: 1.5em;
  border-radius: 0;
  cursor: pointer;
  margin-top: 25px;
  font-family: inherit;
  letter-spacing: 0.03em;
  transition: background 0.18s;
  font-weight: 700;
  line-height: 2.1;
}
.booking-form__save-btn:hover,
.booking-form__cancel-btn:hover {
  background: #65321b;
}
.booking-form__title {
  font-size: 2.2em;
  color: #191919;
  font-weight: 800;
  margin-bottom: 30px;
  margin-top: 22px;
  letter-spacing: 0.03em;
  font-family: 'Inter', Arial, sans-serif;
  line-height: 2.0;
}
.booking-form__desc {
  font-size: 1.12em;
  color: #555;
  margin: 18px 0 38px 0;
  letter-spacing: 0.01em;
  font-family: 'Inter', Arial, sans-serif;
  line-height: 2.1;
}

</style>
