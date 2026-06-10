import '../styles/toExplore.css'
import ToExploreHero from '../assets/ToExplorePage/Sightseeing.jpg'
import SightseeingImg from '../assets/ToExplorePage/Sightseeing.jpg'
import WaterfallsImg from '../assets/ToExplorePage/waterfalls.jpg'
import WineTourismImg from '../assets/ToExplorePage/WineTourism.jpg'
import BoatCruisesImg from '../assets/ToExplorePage/boatcruises.jpg'
import AdrenalineImg from '../assets/ToExplorePage/adrenaline.jpg'
import MotorbikeImg from '../assets/ToExplorePage/motorbike.jpg'

export function ToExplore() {
  return `

    <section class="to-explore-hero" style="background-image: url('${ToExploreHero}');">
      <div class="to-explore-hero-overlay"></div>

      <div class="to-explore-hero-content">

        <h1 class="to-explore-hero-title">TO EXPLORE</h1>

        <div class="to-explore-hero-bottom">
          <p class="to-explore-hero-description">
            Exploring the valley offers visitors a unique blend of natural beauty and historical charm. Travelers can embark on scenic boat
            cruises along the Douro River, taking in the picturesque views of the rolling hills and vineyards that produce some of the world's
            finest Port wine.
          </p>
        </div>

      </div>
    </section>

    <section class="explore-services-section">
      <div class="explore-services-grid">

        <div class="explore-service-card">
          <div class="explore-service-card-header">
            <h2 class="explore-service-card-title">Sightseeing</h2>
          </div>
          <img class="explore-service-card-image" src="${SightseeingImg}" alt="Sightseeing" />
          <p class="explore-service-card-description">
            Numerous viewpoints offer breathtaking panoramic vistas of the winding river. These spots provide visitors with stunning opportunities to soak in the natural beauty and capture memorable photographs of the serene landscape.
          </p>
        </div>

        <div class="explore-service-card">
          <div class="explore-service-card-header">
            <h2 class="explore-service-card-title">River Beaches & Waterfalls</h2>
          </div>
          <img class="explore-service-card-image" src="${WaterfallsImg}" alt="River Beaches & Waterfalls" />
          <p class="explore-service-card-description">
            Calm waters gently reflecting the sky above, surrounded by the lush natural landscapes of dense forests and sprawling vineyards, create a scene of unparalleled scenic beauty.
          </p>
        </div>

        <div class="explore-service-card">
          <div class="explore-service-card-header">
            <h2 class="explore-service-card-title">Wine Tourism</h2>
          </div>
          <div class="img-wrapper">
            <img class="explore-service-card-image has-white-border" src="${WineTourismImg}" alt="Wine Tourism" />
          </div>
          <p class="explore-service-card-description">
            One of the world's most prestigious and renowned regions, celebrated for its exceptional beauty and rich cultural heritage, offers a unique blend of history, stunning landscapes, and vibrant communities.
          </p>
        </div>

        <div class="explore-service-card">
          <div class="explore-service-card-header">
            <h2 class="explore-service-card-title">Boat & Train Cruises</h2>
          </div>
          <div class="img-wrapper">
            <img class="explore-service-card-image has-white-border" src="${BoatCruisesImg}" alt="Boat & Train Cruises" />
          </div>
          <p class="explore-service-card-description">
            Boat and train cruises in the Douro Valley offer a unique way to experience Portugal's stunning wine region, combining scenic river journeys with picturesque railway travel.
          </p>
        </div>

        <div class="explore-service-card">
          <div class="explore-service-card-header">
            <h2 class="explore-service-card-title">Adrenaline & Extreme Sports</h2>
          </div>
          <div class="img-wrapper">
            <img class="explore-service-card-image has-white-border" src="${AdrenalineImg}" alt="Adrenaline & Extreme Sports" />
          </div>
          <p class="explore-service-card-description">
            Water Sports Dominance: Experience the thrill of river rafting and paddle sports, or try your hand at canoeing. For those who crave excitement on land, explore off-road adventures with hiking and cycling through scenic trails.
          </p>
        </div>

        <div class="explore-service-card">
          <div class="explore-service-card-header">
            <h2 class="explore-service-card-title">Motor Bike & Car Routes</h2>
          </div>
          <div class="img-wrapper">
            <img class="explore-service-card-image has-white-border" src="${MotorbikeImg}" alt="Motor Bike & Car Routes" />
          </div>
          <p class="explore-service-card-description">
            The EN222 is widely celebrated as one of the most scenic driving and motorbike routes in the world, particularly renowned for its winding path through Portugal's Douro Valley.
          </p>
        </div>

      </div>
    </section>

    <div class="to-explore-back">
      <a href="#/" class="to-explore-back-link">← BACK TO HOME</a>
    </div>

  `
}