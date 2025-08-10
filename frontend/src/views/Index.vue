<template>
  <div class="font-sans text-gray-800">
    <Header />
    <!-- Block 1: Hero -->
    <section class="relative w-full h-screen">
      <img src="/images/jcu-hero.jpg" alt="JCU Fitness Hero" class="absolute inset-0 w-full h-full object-cover" />

      <!-- Overlay for Text -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div class="text-xl md:text-2xl mt-2 tracking-widest"></div>
      </div>

      <!-- Optional: Dark overlay for contrast -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
    </section>

    <!-- Block: 3 Cards with Buttons -->
    <section class="py-20 px-6 bg-[#FAF3DC]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Card 1 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img src="/images/booking.jpg" alt="Booking" class="w-full h-auto object-cover" />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
          <RouterLink
            to="/booking"
            class="absolute bottom-6 left-1/2 -translate-x-1/2 border border-white text-white px-8 py-2 text-sm tracking-wide uppercase transition duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 bg-transparent"
          >
            Booking
          </RouterLink>
        </div>

        <!-- Card 2 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img src="/images/choose.jpg" alt="Choose Card" class="w-full h-auto object-cover" />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
          <RouterLink
            to="/cards"
            class="absolute bottom-6 left-1/2 -translate-x-1/2 border border-white text-white px-8 py-2 text-sm tracking-wide uppercase transition duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 bg-transparent"
          >
            Choose Card
          </RouterLink>
        </div>

        <!-- Card 3 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img src="/images/workouts.jpg" alt="Work Outs" class="w-full h-auto object-cover" />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
          <RouterLink
            to="/workout"
            class="absolute bottom-6 left-1/2 -translate-x-1/2 border border-white text-white px-8 py-2 text-sm tracking-wide uppercase transition duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 bg-transparent"
          >
            Work Outs
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Block 3: Text -->
    <section class="bg-[#FAF3DC] py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Заголовок блока -->
        <div class="mb-10">
          <div class="flex items-center gap-2 text-sm font-medium text-[#0F4C81] uppercase">
            <div class="w-4 h-4 bg-[#0F4C81]"></div>
            <span>Why JCU Gym?</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-light mt-4 leading-snug text-black">
            JCU Fitness Club – sport as a result of<br />
            development of body, mind and spirit through<br />
            physical exercises, competition, ethical principles
          </h2>
          <p class="mt-6 text-gray-700 max-w-3xl text-base leading-relaxed">
            JCU — is more than just a uni, it is a path to a healthier, more balanced state.
            Whether you want to pay attention to your body, calm your mind or achieve the perfect harmony
            between the two, JCU Fitness Club — is the place for you.
          </p>
        </div>

        <!-- Статистика -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center md:text-left">
          <div>
            <h3 class="text-4xl font-light text-black">1 000</h3>
            <p class="uppercase text-sm text-gray-600 mt-1">Muscles that can be trained</p>
          </div>
          <div class="md:border-l md:border-gray-300 md:pl-6">
            <h3 class="text-4xl font-light text-black">15+</h3>
            <p class="uppercase text-sm text-gray-600 mt-1">Can be accommodated<br />in each outlet</p>
          </div>
          <div class="md:border-l md:border-gray-300 md:pl-6">
            <h3 class="text-4xl font-light text-black">365</h3>
            <p class="uppercase text-sm text-gray-600 mt-1">
              We work starting from<br />7 a.m. up to 10 p.m<br />365 days in a year
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Block 4: 3 Columns with Video Backgrounds -->
    <section class="grid grid-cols-1 md:grid-cols-3 h-[400px]">
      <!-- Блок 1 -->
      <div class="relative h-full w-full overflow-hidden">
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/images/run_club.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4 text-center"
        >
          <p class="text-white text-lg">Study, learn, work: your journey to do that starts here</p>
        </div>
      </div>

      <!-- Блок 2 -->
      <div class="relative h-full w-full overflow-hidden">
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/images/swim_club.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4 text-center"
        >
          <p class="text-white text-lg">
            Nail your studies.<br />
            Overcome yourself. Find your strength.
          </p>
        </div>
      </div>

      <!-- Блок 3 -->
      <div class="relative h-full w-full overflow-hidden">
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/images/thriatlon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4 text-center"
        >
          <p class="text-white text-lg">Focus on what you want to achieve</p>
        </div>
      </div>
    </section>

    <!-- Block 5: Text and 3 Buttons -->
    <section class="bg-[#FAF3DC] py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Заголовок -->
        <div class="flex justify-between items-center flex-wrap gap-6 mb-16">
          <div>
            <div class="flex items-center gap-2 text-sm font-medium text-[#0F4C81] uppercase mb-2">
              <div class="w-4 h-4 bg-[#0F4C81]"></div>
              <span>Which card to choose?</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-light text-black uppercase tracking-tight">
              Types of Club Cards
            </h2>
          </div>

          <!-- Кнопка-ссылка -->
          <RouterLink
            to="/cards"
            class="flex items-center gap-2 text-sm font-medium text-[#0F4C81] hover:underline cursor-pointer"
          >
            <span>CHECK MORE</span>
            <div
              class="w-8 h-8 border border-black rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400"
            >
              <span class="-mt-[2px] text-xl">→</span>
            </div>
          </RouterLink>
        </div>

        <!-- Карточки -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <!-- Карта 1 -->
          <div
            class="bg-[#4D5049] text-white px-8 py-12 min-h-[320px] flex flex-col justify-between"
          >
            <div>
              <h3 class="text-lg uppercase tracking-wide mb-6">One Trimeste (3 Month)</h3>
              <p class="text-base mb-2">Working Days — 7.00 - 22.00</p>
              <p class="text-base">Public Holidays / Break — 8.00 - 22.00</p>
            </div>
            <button
              class="mt-10 border border-white text-white py-2 px-6 uppercase text-sm hover:bg-white hover:text-[#4D5049] transition"
            >
              Cheak More
            </button>
          </div>

          <!-- Карта 2 -->
          <div
            class="bg-gradient-to-b from-[#F7F1DB] to-[#FFF3B0] text-black px-8 py-12 border border-black min-h-[320px] flex flex-col justify-between"
          >
            <div>
              <h3 class="text-lg uppercase tracking-wide mb-6">Permanent</h3>
              <p class="text-base mb-2">Working Days — 7.00 - 24.00</p>
              <p class="text-base">Public Holidays / Break — 7.00 - 24.00</p>
            </div>
            <button
              class="mt-10 border border-black text-black py-2 px-6 uppercase text-sm hover:bg-black hover:text-white transition"
            >
              Cheak More
            </button>
          </div>

          <!-- Карта 3 -->
          <div
            class="bg-[#4D5049] text-white px-8 py-12 min-h-[320px] flex flex-col justify-between"
          >
            <div>
              <h3 class="text-lg uppercase tracking-wide mb-6">Tree Trimesters (6 Month)</h3>
              <p class="text-base mb-2">Working Days — 7.00 - 22.00</p>
              <p class="text-base">Public Holidays / Break — 8.00 - 22.00</p>
            </div>
            <button
              class="mt-10 border border-white text-white py-2 px-6 uppercase text-sm hover:bg-white hover:text-[#4D5049] transition"
            >
              Cheak More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Block 6: Title and 6 Images -->
    <section class="bg-[#0B4A6F] py-20 px-6 text-white">
      <div class="max-w-7xl mx-auto">
        <!-- Заголовок -->
        <div class="mb-12">
          <div class="flex items-center gap-2 text-sm font-medium text-[#C1DAE8] uppercase mb-2">
            <div class="w-4 h-4 bg-white"></div>
            <span>How club looks from the inside?</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-light uppercase tracking-tight">
            Your path to fitness starts here
          </h2>
        </div>

        <!-- Галерея -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <!-- Карточка 1 -->
          <RouterLink
            to="/workout"
            class="group block p-[2px] bg-transparent hover:bg-gradient-to-r from-[#00C6FF] to-[#0072FF] transition-all duration-300"
          >
            <div
              class="relative h-[250px] md:h-[280px] bg-cover bg-center"
              style="background-image: url('/images/fitting.jpg')"
            >
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span class="text-white text-sm md:text-lg uppercase tracking-wide">Fitting Room</span>
              </div>
            </div>
          </RouterLink>

          <!-- Карточка 2 -->
          <RouterLink
            to="/workout"
            class="group block p-[2px] bg-transparent hover:bg-gradient-to-r from-[#00C6FF] to-[#0072FF] transition-all duration-300"
          >
            <div
              class="relative h-[250px] md:h-[280px] bg-cover bg-center"
              style="background-image: url('/images/volleyball.jpg')"
            >
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span class="text-white text-sm md:text-lg uppercase tracking-wide">Volleyball</span>
              </div>
            </div>
          </RouterLink>

          <!-- Карточка 3 -->
          <RouterLink
            to="/workout"
            class="group block p-[2px] bg-transparent hover:bg-gradient-to-r from-[#00C6FF] to-[#0072FF] transition-all duration-300"
          >
            <div
              class="relative h-[250px] md:h-[280px] bg-cover bg-center"
              style="background-image: url('/images/shower.jpg')"
            >
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span class="text-white text-sm md:text-lg uppercase tracking-wide">Shower</span>
              </div>
            </div>
          </RouterLink>

          <!-- Карточка 4 -->
          <RouterLink
            to="/workout"
            class="group block p-[2px] bg-transparent hover:bg-gradient-to-r from-[#00C6FF] to-[#0072FF] transition-all duration-300"
          >
            <div
              class="relative h-[250px] md:h-[280px] bg-cover bg-center"
              style="background-image: url('/images/equipment.jpg')"
            >
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span class="text-white text-sm md:text-lg uppercase tracking-wide">Newest Equipment</span>
              </div>
            </div>
          </RouterLink>

          <!-- Карточка 5 -->
          <RouterLink
            to="/workout"
            class="group block p-[2px] bg-transparent hover:bg-gradient-to-r from-[#00C6FF] to-[#0072FF] transition-all duration-300"
          >
            <div
              class="relative h-[250px] md:h-[280px] bg-cover bg-center"
              style="background-image: url('/images/basketball.jpg')"
            >
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span class="text-white text-sm md:text-lg uppercase tracking-wide">Basketball</span>
              </div>
            </div>
          </RouterLink>

          <!-- Карточка 6 -->
          <RouterLink
            to="/workout"
            class="group block p-[2px] bg-transparent hover:bg-gradient-to-r from-[#00C6FF] to-[#0072FF] transition-all duration-300"
          >
            <div
              class="relative h-[250px] md:h-[280px] bg-cover bg-center"
              style="background-image: url('/images/group-classes.jpg')"
            >
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span class="text-white text-sm md:text-lg uppercase tracking-wide">Group Classes</span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Block: News Section -->
    <section class="mt-24 py-20 px-6 bg-[#FAF3DC]">
      <div class="max-w-7xl mx-auto">

        <!-- Заголовок и кнопка -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <p class="text-sm text-[#2D6484] font-semibold tracking-wider mb-1">■ WHAT’S NEW?</p>
            <h2 class="text-3xl text-black font-semibold">CHECK OUT OUR NEWS</h2>
          </div>
          <RouterLink
            to="/news"
            class="flex items-center gap-2 mt-4 md:mt-0 group text-black hover:text-yellow-600 transition"
          >
            <span class="text-md uppercase">All News</span>
            <div
              class="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400"
            >
              ➝
            </div>
          </RouterLink>
        </div>

        <!-- 3 карточки новостей -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Новость 1 -->
          <div class="flex flex-col h-full bg-[#fffbe6] p-4 rounded-lg">
            <img
              src="/images/news1.jpeg"
              alt="News 1"
              class="w-full h-[200px] object-contain rounded-lg mb-4 bg-fffbe6 mx-auto"
            />
            <div class="mt-auto">
              <p class="text-sm text-gray-500 mb-1">01 June 2025</p>
              <p class="text-base font-medium text-black">New full course membership</p>
            </div>
          </div>

          <!-- Новость 2 -->
          <div class="flex flex-col h-full bg-[#fffbe6] p-4 rounded-lg">
            <img
              src="/images/news2.jpeg"
              alt="News 2"
              class="w-full h-[200px] object-contain rounded-lg mb-4 bg-fffbe6 mx-auto"
            />
            <div class="mt-auto">
              <p class="text-sm text-gray-500 mb-1">30 June 2025</p>
              <p class="text-base font-medium text-black">June Events</p>
            </div>
          </div>

          <!-- Новость 3 -->
          <div class="flex flex-col h-full bg-[#fffbe6] p-4 rounded-lg">
            <img
              src="/images/news3.jpeg"
              alt="News 3"
              class="w-full h-[200px] object-contain rounded-lg mb-4 bg-fffbe6 mx-auto"
            />
            <div class="mt-auto">
              <p class="text-sm text-gray-500 mb-1">17 June 2025</p>
              <p class="text-base font-medium text-black">Updated collection of accessories JCU</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div> 
</template>




