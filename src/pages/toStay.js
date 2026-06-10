import '../styles/toStay.css'
import ModernClassicVilla from '../assets/ToStayPage/1.MODERNCLASSIC/background.jpg'
import BathroomBg from '../assets/ToStayPage/1.MODERNCLASSIC/backgroundbathroom.jpg'
import ArtistSuite from '../assets/ToStayPage/1.MODERNCLASSIC/ARTISTSUITE.jpg'
import EthnicSuite from '../assets/ToStayPage/1.MODERNCLASSIC/ETHNICSUITE.jpg'
import RusticSuite from '../assets/ToStayPage/1.MODERNCLASSIC/RUSTICSUITE.jpg'
import VintageVilla from '../assets/ToStayPage/2.VINTAGEVILLA/1.BACKGROUND.jpg'
import GreyRoom from '../assets/ToStayPage/2.VINTAGEVILLA/2.GREYROOM.jpg'
import OrangeRoom from '../assets/ToStayPage/2.VINTAGEVILLA/3.ORANGEROOM.jpg'
import PastelSuite from '../assets/ToStayPage/2.VINTAGEVILLA/4.PASTELSUITE.jpg'
import VintageBathroomBg from '../assets/ToStayPage/2.VINTAGEVILLA/5.BACKGROUNDBATHROOM.jpg'
import ExteriorBg from '../assets/ToStayPage/3.EXTERIORAREA/1.EXTERIORBACKGROUND.jpg'
import OutdoorRecreation from '../assets/ToStayPage/3.EXTERIORAREA/2.OUTDOORRECEATIONSPACE.jpg'
import RelaxJacuzzi from '../assets/ToStayPage/3.EXTERIORAREA/3.RELAXJACUZZI.jpg'
import SaltwaterPool from '../assets/ToStayPage/3.EXTERIORAREA/4.SALTWATER.jpg'

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
          socialize and cook together as a family.
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
          <h3 class="suite-name">RUSTIC SUITE</h3>
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

    <section class="to-stay-banner" style="background-image: url('${BathroomBg}');">
      <div class="to-stay-hero-overlay"></div>
      <div class="to-stay-banner-content"></div>
    </section>

    <div class="to-stay-label">
      <p class="to-stay-label-text">
        The Modern Classic Villa is a three-bedroom home featuring three suites: two bedrooms with twin beds and one suite with a queen-size bed. It includes an open-concept living area with a fully equipped kitchen, TV, fireplace, shared bathroom, free Wi-Fi, and a barbecue, along with a covered terrace overlooking the pool and family hot tub—perfect for al fresco dining. Suitable for people with reduced mobility, it accommodates up to 6 people (8 with an extra room) and features state-of-the-art hypoallergenic air conditioning (suitable for people with allergies).<br>
        THE SPECIAL HIDDEN GEM FOR SPECIAL MOMENTS.
      </p>
    </div>

    <section
      class="to-stay-hero-vintage"
      style="background-image: url('${VintageVilla}');"
    >
      <div class="to-stay-hero-overlay"></div>

      <div class="to-stay-hero-content">
        <h1 class="to-stay-hero-title">VINTAGE VILLA</h1>

        <div class="to-stay-hero-bottom">
          <p class="to-stay-hero-description">
            <span class="to-stay-vintage-subtitle">
              A Chic and Opulent Attic Retreat
            </span> <br>
            Welcome to a stylish and luxurious attic, where every corner has been thoughtfully designed to embrace our guests with warm,
            vintage-inspired decor. Enjoy a spacious terrace that provides breathtaking views of the mountains.
            <br>
            Spend a relaxing afternoon basking in the sun while marveling at a stunning sunset.
          </p>
        </div>
      </div>
    </section>

    <section class="suites">
      <div class="suites-grid">

        <div class="suite-col">
          <h3 class="suite-name">GREY ROOM</h3>
          <img src="${GreyRoom}" class="suite-img" alt="Grey Room" />
          <p class="suite-desc">This area has a desk ideal for quiet work or digital nomads, providing a focused space for virtual meetings and project completion.</p>
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
              <span>2 SINGLE BEDS</span>
              <span>AC</span>
              <span>KITCHEN</span>
              <span>WIFI</span>
              <span>PARKING</span>
              <span>&nbsp;</span>
            </div>
          </div>
        </div>

        <div class="suite-col">
          <h3 class="suite-name">ORANGE ROOM</h3>
          <img src="${OrangeRoom}" class="suite-img" alt="Orange Room" />
          <p class="suite-desc">This tech-themed double bedroom for younger family members features twin beds, reading lamps with phone chargers, and home automation connectivity.</p>
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
              <span>FIREPLACE</span>
              <span>KITCHEN</span>
              <span>WIFI</span>
              <span>PARKING</span>
            </div>
          </div>
        </div>

        <div class="suite-col">
          <h3 class="suite-name">PASTEL SUITE</h3>
          <img src="${PastelSuite}" class="suite-img" alt="Pastel Suite" />
          <p class="suite-desc">This suite, with smart home tech, reading lamps, terrace mountain views, and a sun deck, is a perfect retreat for a family of 8, offering peace in nature.</p>
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
              <span>QUEEN SIZE BED</span>
              <span>FIREPLACE</span>
              <span>KITCHEN</span>
              <span>AC</span>
              <span>WIFI</span>
              <span>PARKING</span>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section
      class="to-stay-banner"
      style="background-image: url('${VintageBathroomBg}');"
    >
      <div class="to-stay-hero-overlay"></div>
      <div class="to-stay-banner-content"></div>
    </section>

    <div class="to-stay-label">
      <p class="to-stay-label-text">
        The Vintage Villa is a loft-style home where every inch of space has been thoughtfully utilized. It is fully equipped to accommodate a family of up to 8 people, featuring air conditioning, a fully stocked kitchen, a spacious outdoor terrace with phenomenal views, 1 suite with a queen-size bed, and 2 bedrooms that share a bathroom. It's perfect for families with your my kids, and our kids, an open-concept living room with a TV and a sofa bed, free Wi-Fi—ideal for a memorable vacation with family or friends.
      </p>
    </div>
      <section
    class="to-stay-hero"
    style="background-image: url('${ExteriorBg}');"
  >
    <div class="to-stay-hero-overlay"></div>

    <div class="to-stay-hero-content">
      <h1 class="to-stay-hero-title">
        EXTERIOR AREA
      </h1>

      <p class="to-stay-hero-description">
        A unique outdoor area, as its U-shaped layout harmoniously and comfortably
        connects all the outdoor spaces—such as the terrace, barbecue area, pool,
        family hot tub, restroom and shower, a leisure area with sofas and hanging
        chairs, and a dining area—all on the same level and just a few meters from
        the main living room where all guests of the Modern Classic Villa and
        Vintage Villa gather, whether or not they are from the same family,
        creating unforgettable moments and celebrations that will remain in your
        memory...
      </p>
    </div>
  </section>

  <section class="suites">
    <div class="suites-grid">

      <div class="suite-col">
        <h3 class="suite-name">OUTDOOR RECREATION SPACE</h3>

        <img
          src="${OutdoorRecreation}"
          class="suite-img"
          alt="Outdoor Recreation Space"
        />

        <p class="suite-desc">
          Enjoy our open-concept living room at the Modern and Classic Villa,
          featuring an outdoor recreation space with ample room for relaxation
          and entertainment, blending contemporary and timeless design.
        </p>
      </div>

      <div class="suite-col">
        <h3 class="suite-name">RELAX IN OUR FAMILY JACUZZI</h3>

        <img
          src="${RelaxJacuzzi}"
          class="suite-img"
          alt="Family Jacuzzi"
        />

        <p class="suite-desc">
          Unwind outdoors with our family jacuzzi, accommodating up to 10 people.
          It's perfect for making memories, whether basking in the sun or seeking
          a peaceful retreat.
        </p>
      </div>

      <div class="suite-col">
        <h3 class="suite-name">SALTWATER POOL</h3>

        <img
          src="${SaltwaterPool}"
          class="suite-img saltwater-img"
          alt="Saltwater Pool"
        />

        <p class="suite-desc">
          Our outdoor saltwater pool offers a variety of activities, with a
          maximum depth of 140 cm. Whether you prefer a leisurely swim or exciting
          water sports, it provides the perfect setting for fun and relaxation.
        </p>
      </div>

    </div>

    <div class="exterior-info-box">

        <div class="exterior-content">

          <div class="exterior-amenities">

            <span>ACCESSIBILITY</span>
            <span>BARBECUE GRILL</span>
            <span>DINING AREA</span>
            <span>RELAXATION AREA</span>

            <span>SWIMMING POOL</span>
            <span>JACUZZI</span>
            <span>OUTDOOR SHOWER</span>
            <span>WC</span>

          </div>
          <div class="exterior-icons">

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="7" width="18" height="13" rx="1"/>
              <path d="M8 7V5a4 4 0 0 1 8 0v2"/>
            </svg>

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
              <path d="M12 6v6l4 2"/>
            </svg>

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
            </svg>

          </div>

        </div>

    </div>
  </section>

    <div class="to-stay-back">
      <a href="#/" class="to-stay-back-link">← VOLTAR</a>
    </div>
  `
}