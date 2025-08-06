<template>
  <div>
    <Header />

    <!-- Breadcrumb -->
    <section class="breadcrumb">
      <span class="breadcrumb__home">HOME</span>
      <span class="breadcrumb__slash">/</span>
      <span class="breadcrumb__page">CLUB CARDS</span>
    </section>

    <!-- Card Section -->
    <main class="cards-section">
      <div class="cards-row">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card"
          :style="{ backgroundImage: `url(${card.image})` }"
          :class="{ selected: selectedCard === card }"
        >
          <div class="card__content">
            <h2>{{ card.title }}</h2>
            <div class="card__desc">
              <div>PRICE: {{ card.price }}</div>
              <div>DURATION: {{ card.duration }}</div>
              <div>{{ card.weekdayHours }}</div>
              <div>{{ card.holidayHours }}</div>
            </div>
            <button class="card__btn" @click="selectCard(card)">CHOOSE CARD</button>
          </div>
        </div>
      </div>

      <div class="join-club-wrap">
        <button class="join-club-btn" @click="openPurchaseModal">JOIN CLUB</button>
      </div>
    </main>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Confirm Purchase</h2>
        <p>You are about to purchase:</p>
        <ul>
          <li><strong>{{ selectedCard.title }}</strong></li>
          <li>{{ selectedCard.price }}</li>
          <li>{{ selectedCard.duration }}</li>
        </ul>
        <button @click="confirmPurchase" class="confirm-btn">Confirm</button>
        <button @click="closeModal" class="cancel-btn">Cancel</button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'ClubCards',
  components: { Header, Footer },
  data() {
    return {
      cards: [
        {
          title: 'ONE TRIMESTER (3 MONTH)',
          price: '50 S$',
          duration: '1 TRIMESTER',
          weekdayHours: 'Working Days — 7.00 - 22.00',
          holidayHours: 'Public Holidays / Break — 8.00 - 22.00',
          image: '/images/v1_3105.png'
        },
        {
          title: 'PERMMENENT',
          price: '175 S$',
          duration: '6 TRIMESTERS',
          weekdayHours: 'Working Days — 7.00 - 22.00',
          holidayHours: 'Public Holidays / Break — 8.00 - 22.00',
          image: '/images/v1_3115.png'
        },
        {
          title: 'TREE TRIMESTERS (6 MONTH)',
          price: '100 S$',
          duration: '3 TRIMESTERS',
          weekdayHours: 'Working Days — 7.00 - 22.00',
          holidayHours: 'Public Holidays / Break — 8.00 - 22.00',
          image: '/images/v1_3098.png'
        }
      ],
      selectedCard: null,
      showModal: false
    };
  },
  methods: {
    selectCard(card) {
      this.selectedCard = card;
    },
    openPurchaseModal() {
      if (!this.selectedCard) {
        alert('Please choose a card first.');
        return;
      }
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    confirmPurchase() {
      alert(`You have purchased the ${this.selectedCard.title} card!`);
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
/* Existing styles ... */
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
  box-shadow: 0 3px 24px 0 rgba(0,0,0,0.10);
  display: flex;
  align-items: center;
  transition: border 0.2s ease;
}
.card.selected {
  border: 3px solid #fff;
}
.card__content {
  background: rgba(38, 40, 32, 0.46);
  color: #fff;
  padding: 38px 26px;
  width: 100%;
  text-align: left;
}
.card__btn {
  width: 100%;
  padding: 10px 0;
  border: 1.5px solid #fff;
  background: transparent;
  color: #fff;
  cursor: pointer;
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
  cursor: pointer;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.modal-content {
  background: #fff;
  padding: 32px;
  border-radius: 6px;
  width: 400px;
  text-align: center;
}
.modal-content h2 {
  margin-bottom: 16px;
}
.confirm-btn, .cancel-btn {
  padding: 10px 20px;
  margin: 8px;
  font-size: 1em;
  border: none;
  cursor: pointer;
}
.confirm-btn {
  background-color: #4caf50;
  color: white;
}
.cancel-btn {
  background-color: #ccc;
}
</style>
