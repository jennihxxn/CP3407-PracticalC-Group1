<template>
  <div>
    <Header />


    <!--path & title -->
    <section class="breadcrumb">
      <span class="breadcrumb__home">HOME</span>
      <span class="breadcrumb__slash">/</span>
      <span class="breadcrumb__page">CLUB CARDS</span>
    </section>

    <!-- 3 card -->
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

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "ClubCards",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
/* ---------- style.css  ---------- */
body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background: #222;
  color: #111;
  min-width: 1200px;
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
</style>
