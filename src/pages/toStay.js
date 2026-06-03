import '../styles/toStay.css'
import ModernClassicVilla from '../assets/ToStayPage/1.MODERNCLASSIC/background.jpg'
import ArtistSuite from '../assets/ToStayPage/1.MODERNCLASSIC/ARTISTSUITE.jpg'
import EthnicSuite from '../assets/ToStayPage/1.MODERNCLASSIC/ETHNICSUITE.jpg'
import RusticSuite from '../assets/ToStayPage/1.MODERNCLASSIC/RUSTICSUITE.jpg'

export function ToStay() {
  return `
    <section 
      class="to-stay-hero" 
      style="background-image: url('${ModernClassicVilla}');"
    >
      <div class="to-stay-hero-overlay"></div>

      <div class="to-stay-hero-content">
        <h1 class="to-stay-hero-title">MODERN CLASSIC VILLA</h1>

        <p class="to-stay-hero-description">
          This is a luxurious, eclectic-style home with design details that make it 
          comfortable in every way, and the view of the outdoor area —which includes 
          the pool and family hot tub— is truly unique. The terrace, where the whole 
          family can gather, adjacent to the open-concept living room, completes the 
          experience. Guests will feel right at home and won't want their vacation to 
          end, as they'll have all the amenities of a luxury home where they can 
          socialize and cook together as a familyOLA.
        </p>
      </div>
    </section>
   
      <section class="suites">

    <div class="suites-grid">

      <div class="suite-col">
        <h3 class="suite-name">ARTIST SUITE</h3>
        <img src="${ArtistSuite}" class="suite-img" alt="Artist Suite" />
        <p class="suite-desc">This artist-inspired accessibility suite includes adjustable beds, a roll-in shower, grab bars, and lowered amenities. It's on the same level as the exterior and parking.</p>
        <div class="suite-info-box">
          <div class="suite-info-top">
            <span class="suite-guests">MAX 2 GUESTS</span>
            <div class="suite-icons">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
            </div>
          </div>
          <div class="suite-amenities">
            <span>ACCESSIBILITY</span>
            <span>ON SUITE</span>
            <span>2 SINGLE BEDS</span>
            <span>AIRCONDITIONER</span>
            <span>FIREPLACE</span>
            <span>KITCHEN</span>
            <span>WIFI</span>
            <span>PARKING</span>
          </div>
        </div>
      </div>

      <div class="suite-col">
        <h3 class="suite-name">ETHNIC SUITE</h3>
        <img src="${EthnicSuite}" class="suite-img" alt="Ethnic Suite" />
        <p class="suite-desc">The suite's ethnic design enhances comfort for couples, featuring a balcony for sunset views, mountains, a Portuguese vegetable garden, or relaxing with a book.</p>
        <div class="suite-info-box">
          <div class="suite-info-top">
            <span class="suite-guests">MAX 2 GUESTS</span>
            <div class="suite-icons">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
            </div>
          </div>
          <div class="suite-amenities">
            <span>ON SUITE</span>
            <span>2 SINGLE BEDS OR</span>
            <span>(1 QUEEN SIZE BED)</span>
            <span>AC</span>
            <span>FIREPLACE</span>
            <span>KITCHEN</span>
            <span>WIFI</span>
            <span>PARKING</span>
          </div>
        </div>
      </div>

      <div class="suite-col">
        <h3 class="suite-name">RUSTIC  SUITE</h3>
        <img src="${RusticSuite}" class="suite-img" alt="Rustic Suite" />
        <p class="suite-desc">The Rustic Master Suite, featuring the owner's artwork, includes a balcony ideal for enjoying mountain sunsets or relaxing with a book.</p>
        <div class="suite-info-box">
          <div class="suite-info-top">
            <span class="suite-guests">MAX 2 GUESTS</span>
            <div class="suite-icons">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
            </div>
          </div>
          <div class="suite-amenities">
            <span>ON SUITE</span>
            <span>2 SINGLE BEDS OR</span>
            <span>(1 KING SIZE BED)</span>
            <span>AC</span>
            <span>FIREPLACE</span>
            <span>KITCHEN</span>
            <span>WIFI</span>
            <span>PARKING</span>
          </div>
        </div>
      </div>

    </div>

  </section>

    <div class="to-stay-back">
      <a href="#/" class="to-stay-back-link">← VOLTAR</a>
    </div>*/
  `
}