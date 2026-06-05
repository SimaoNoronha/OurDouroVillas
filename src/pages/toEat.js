import '../styles/toEat.css'
import ToEatHero from '../assets/ToEatPage/1.png'
import RestauranteBg from '../assets/ToEatPage/5.jpg'
import RestauranteImg from '../assets/ToEatPage/2.jpg'
import SouvenirsImg from '../assets/ToEatPage/3.jpg'
import CateringImg from '../assets/ToEatPage/6.jpg'

export function ToEat() {
  return `

    <section class="to-eat-hero" style="background-image: url('${ToEatHero}');">
      <div class="to-eat-hero-overlay"></div>

      <div class="to-eat-hero-content">

        <h1 class="to-eat-hero-title">TO EAT</h1>

        <div class="to-eat-hero-bottom">
          <h2 class="to-eat-hero-subtitle">RESTAURANTE SABORES E MEMÓRIAS</h2>
          <p class="to-eat-hero-description">
            The authentic Portuguese hospitality and a immersion into the traditional and authentic recipes from this region, with an extraordinary decoration with a eclectic style.<br>
            We guarantee that it will be one the most valuable meals you'll have!
          </p>
        </div>

      </div>
    </section>

    <section class="services-section">
      <div class="services-grid">

        <div class="service-card">
          <div class="service-card-header">
            <h2 class="service-card-title">Sabores e Memórias</h2>
            <h3 class="service-card-subtitle">Restaurant</h3>
          </div>
          <img class="service-card-image" src="${RestauranteImg}" alt="Sabores e Memórias Restaurant" />
          <p class="service-card-description">
            Nestled along the scenic EN222, this charming eatery offers delicious meals from 12:00 to 22:00, ready for a leisurely lunch or relaxed dinner in a welcoming atmosphere. The menu features a delightful variety of local dishes to please every palate.
          </p>
        </div>

        <div class="service-card">
          <div class="service-card-header">
            <h2 class="service-card-title">Sabores e Memórias</h2>
            <h3 class="service-card-subtitle">Souvenirs</h3>
          </div>
          <img class="service-card-image" src="${SouvenirsImg}" alt="Sabores e Memórias Souvenirs" />
          <p class="service-card-description">
            We offer a diverse selection of genuine Portuguese products. Whether you're seeking a unique gift or a taste of Portugal at home, our owner-curated gift boxes bring joy and charm to any celebration. Discover our collection and enjoy unforgettable flavors.
          </p>
        </div>

        <div class="service-card">
          <div class="service-card-header">
            <h2 class="service-card-title">Sabores e Memórias</h2>
            <h3 class="service-card-subtitle">Catering</h3>
          </div>
          <img class="service-card-image" src="${CateringImg}" alt="Sabores e Memórias Catering" />
          <p class="service-card-description">
            Make baptisms, communions, and birthdays memorable with our catering. We deliver delicious, beautifully arranged dishes customized to your taste, ensuring an unforgettable experience. Enjoy your special day while we handle the culinary details!
          </p>
        </div>

      </div>
    </section>

    <section class="to-eat-banner" style="background-image: url('${RestauranteBg}');">
      <div class="to-eat-hero-overlay"></div>
      <div class="to-eat-banner-content">
        <p class="to-eat-banner-description">
          With a warm and welcoming atmosphere, it's the ideal place<br>
          to savor delicious dishes and create fond memories.<br>
          each carrying the essence of Portugal's vibrant traditions and history.
        </p>
      </div>
    </section>
    
    <div class="to-eat-label">
        <p class="to-eat-label-text">To Eat</p>
    </div>

    <div class="to-eat-back">
      <a href="#/" class="to-eat-back-link">← BACK TO HOME</a>
    </div>

  `
}