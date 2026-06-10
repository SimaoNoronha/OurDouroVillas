import '../styles/home.css'
import OurVillas from '../assets/images/OurVillas.png'
import ToStay1 from '../assets/images/ToStay/IMG1.jpg'
import ToStay2 from '../assets/images/ToStay/IMG2.jpg'
import ToStay3 from '../assets/images/ToStay/IMG3.jpg'
import ToStay4 from '../assets/images/ToStay/IMG4.jpg'
import ToRelax1 from '../assets/images/ToRelax/1.png'
import ToRelax2 from '../assets/images/ToRelax/2.png'
import ToRelax3 from '../assets/images/ToRelax/3.png'
import ToRelax4 from '../assets/images/ToRelax/4.png'
import ToEat1 from '../assets/images/ToEat/1.jpg'
import ToEat2 from '../assets/images/ToEat/2.jpg'
import ToEat3 from '../assets/images/ToEat/3.jpg'
import ToEat4 from '../assets/images/ToEat/4.jpg'
import ToExplore1 from '../assets/images/ToExplore&ToCelebrate/1FOTO.png'
import ToExplore2 from '../assets/images/ToExplore&ToCelebrate/2FOTO.jpg'
import ToExplore3 from '../assets/images/ToExplore&ToCelebrate/3FOTO.png'
import ToExplore4 from '../assets/images/ToExplore&ToCelebrate/4FOTO.png'

export function Home() {
  return `

    <section class="hero">

      <div class="container">

        <h1 class="title">
          OUR DOURO VILLAS
        </h1>

        <h2 class="subtitle">
          Luxury | Vacation Home in
          <span>Douro</span>
        </h2>

        <p class="subsubtitle">
          WHERE SERENITY & RELAXATION MEETS
        </p>

      </div>

    </section>

    <div class="hero-image-wrapper">
      <img src="${OurVillas}" alt="Our Douro Villas" class="hero-image" />
    </div>

    <section class="about">

      <div class="about-left">

        <p>
          Welcome to Our Douro, located in the Douro Valley Region,
          Portugal. Your perfect getaway begins here.
          Where Portuguese tradition meets modern luxury.
        </p>

        <p>
          Discover elegance and personalized service in our luxury villas.
        </p>

        <p>
          We believe that true luxury is simplicity combined with the
          seamless union of extraordinary spaces, authentic local
          experiences , impeccable service, and unforgettable<br>
          moments that you carry forever. 
        </p>

        <p>
          The best memories for families up to 16 people.
        </p>

      </div>

      <div class="about-right">

        <p>
          The Douro Valley is famous for its terraced vineyards,<br>
          stunning landscapes shaped by the Douro River, and <br>
          historic Port wine production.
        </p>

        <p>
          It is the world's oldest demarcated wine region, with<br>
          boundaries set centuries ago.<br>
          This picturesque area combines rich culture, natural<br>
          beauty, and renowned wines. 
        </p>

        <p>
          Discover the Douro's best-kept secret.
        </p>

      </div>

    </section>

    <div class="divider"></div>

    <section class="experiences">



  <h2 class="experiences-title">TO STAY, TO RELAX, TO EAT, TO EXPLORE & TO CELEBRATE</h2>

  <div class="experiences-grid">

    <div class="experience-card">
      <h3 class="card-title">TO STAY</h3>
      <p class="card-subtitle">Our Douro Villas</p>
      <div class="card-images">
        <img src="${ToStay1}" alt="Villa pool" />
        <img src="${ToStay2}" alt="Villa interior" />
        <img src="${ToStay3}" alt="Villa terrace" />
        <img src="${ToStay4}" alt="Villa garden" />
      </div>
      <a href="#/to-stay" class="card-link">READ MORE</a>
    </div>

    <div class="experience-card">
      <h3 class="card-title">TO RELAX</h3>
      <p class="card-subtitle">Restore harmony to your body, mind, and soul.</p>
      <div class="card-images">
        <img src="${ToRelax1}" alt="Massage 1" />
        <img src="${ToRelax2}" alt="Massage 2" />
        <img src="${ToRelax3}" alt="Massage 3" />
        <img src="${ToRelax4}" alt="Massage 4" />
      </div>
      <a href="#/to-relax" class="card-link">READ MORE</a>
    </div>

    <div class="experience-card">
      <h3 class="card-title">TO EAT</h3>
      <p class="card-subtitle">Authentic Portuguese Hospitality</p>
      <div class="card-images">
        <img src="${ToEat1}" alt="Food 1" />
        <img src="${ToEat2}" alt="Food 2" />
        <img src="${ToEat3}" alt="Food 3" />
        <img src="${ToEat4}" alt="Food 4" />
      </div>
      <a href="#/to-eat" class="card-link">READ MORE</a>
    </div>

    <div class="experience-card">
      <h3 class="card-title">TO EXPLORE & TO CELEBRATE</h3>
      <p class="card-subtitle">Tailormade Tourism & Special Events</p>
      <div class="card-images">
        <img src="${ToExplore1}" alt="Explore 1" />
        <img src="${ToExplore2}" alt="Explore 2" />
        <img src="${ToExplore3}" alt="Explore 3" />
        <img src="${ToExplore4}" alt="Explore 4" />
      </div>
      <a href="#/to-explore" class="card-link">READ MORE</a>
    </div>

  </div>

</section>

  `
}
