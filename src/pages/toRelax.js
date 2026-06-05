import '../styles/toRelax.css'
import ToRelaxHero from '../assets/ToRelaxPage/1.BACKGROUND.jpg'
import RelaxBg from '../assets/ToRelaxPage/5.jpg'
import MassagemImg from '../assets/ToRelaxPage/2.jpg'
import SoundImg from '../assets/ToRelaxPage/3.jpeg'
import YogaImg from '../assets/ToRelaxPage/4.jpg'

export function ToRelax() {
  return `

    <section class="to-relax-hero" style="background-image: url('${ToRelaxHero}');">
      <div class="to-relax-hero-overlay"></div>

      <div class="to-relax-hero-content">

        <h1 class="to-relax-hero-title">TO RELAX</h1>

        <div class="to-relax-hero-bottom">
          <p class="to-relax-hero-description">
            Whether you're traveling from near or far, immerse yourself in an experience where the intuitive touch of massage, the weightless resonance of a floating sound bath and,<br>
            the fluid movement of relaxing yoga ignites your renewal journey.
          </p>
        </div>

      </div>
    </section>

    <section class="relax-services-section">
      <div class="relax-services-grid">

        <div class="relax-service-card">
          <div class="relax-service-card-header">
            <h2 class="relax-service-card-title">Therapeutic Massage</h2>
          </div>
          <img class="relax-service-card-image" src="${MassagemImg}" alt="Therapeutic Massage" />
          <p class="relax-service-card-description">
            Restore peace and well-being with a relaxing, therapeutic massage. The intuitive touch of our therapit work in harmony to lull your nervous system into a state of pure peace, easing muscle tension, leaving you feeling clearer, lighter, and deeply restored.
          </p>
        </div>

        <div class="relax-service-card">
          <div class="relax-service-card-header">
            <h2 class="relax-service-card-title">Floating Sound Therapy</h2>
          </div>
          <img class="relax-service-card-image" src="${SoundImg}" alt="Floating Sound Therapy" />
          <p class="relax-service-card-description">
            Embrace the weightlessness of floating, combined with sound waves that eases the nervous system, reduces physical tension, fostering deep restful sleep. Our sound healing floating therapy offers an unforgettable escape, a moment of peace that belongs to everyone.
          </p>
        </div>

        <div class="relax-service-card">
          <div class="relax-service-card-header">
            <h2 class="relax-service-card-title">Yoga & Meditation</h2>
          </div>
          <img class="relax-service-card-image" src="${YogaImg}" alt="Yoga & Meditation" />
          <p class="relax-service-card-description">
            Yoga is a union of Body, Mind and Soul. The power of movement and breath invites stillness where one can relieve pain, build strength and restore. With every session one get the opportunity to explore discover self-healing and transformation.
          </p>
        </div>

      </div>
    </section>

    <section class="to-relax-banner" style="background-image: url('${RelaxBg}');">
      <div class="to-relax-hero-overlay"></div>
      <div class="to-relax-banner-content">
      </div>
    </section>

    <div class="to-relax-label">
      <p class="to-relax-label-text">To Relax</p>
    </div>

    <div class="to-relax-back">
      <a href="#/" class="to-relax-back-link">← BACK TO HOME</a>
    </div>

  `
}