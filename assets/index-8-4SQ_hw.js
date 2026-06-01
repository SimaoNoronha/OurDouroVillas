(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/OurDouroVillas/assets/IMG1-4YxGHhSD.jpg`,t=`/OurDouroVillas/assets/IMG2-iDKgRH0n.jpg`,n=`/OurDouroVillas/assets/IMG3-cA0GJyqL.jpg`,r=`/OurDouroVillas/assets/IMG4-BuxGiMKC.jpg`,i=`/OurDouroVillas/assets/1-BEYHKeuG.png`,a=`/OurDouroVillas/assets/2-CgXVNtBn.png`,o=`/OurDouroVillas/assets/3-Csx-JBeD.png`,s=`/OurDouroVillas/assets/4-BWk9gJ3M.png`,c=`/OurDouroVillas/assets/1-Dj_zrbbu.jpg`,l=`/OurDouroVillas/assets/2-7Ew48U-I.jpg`,u=`/OurDouroVillas/assets/3-1BZpj-9f.jpg`,d=`/OurDouroVillas/assets/4-BTZiasKy.jpg`,f=`/OurDouroVillas/assets/1FOTO-DIXJP6M7.png`,p=`/OurDouroVillas/assets/2FOTO-BmPLMmvK.jpg`,m=`/OurDouroVillas/assets/3FOTO-C4UZLV3N.png`,h=`/OurDouroVillas/assets/4FOTO-DnYe2Q-1.png`;function g(){return`

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
      <img src="/src/assets/images/OurVillas.png" alt="Our Douro Villas" class="hero-image" />
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
        <img src="${e}" alt="Villa pool" />
        <img src="${t}" alt="Villa interior" />
        <img src="${n}" alt="Villa terrace" />
        <img src="${r}" alt="Villa garden" />
      </div>
      <a href="#" class="card-link">READ MORE</a>
    </div>

    <div class="experience-card">
      <h3 class="card-title">TO RELAX</h3>
      <p class="card-subtitle">Restore harmony to your body, mind, and soul.</p>
      <div class="card-images">
        <img src="${i}" alt="Massage 1" />
        <img src="${a}" alt="Massage 2" />
        <img src="${o}" alt="Massage 3" />
        <img src="${s}" alt="Massage 4" />
      </div>
      <a href="#" class="card-link">READ MORE</a>
    </div>

    <div class="experience-card">
      <h3 class="card-title">TO EAT</h3>
      <p class="card-subtitle">Authentic Portuguese Hospitality</p>
      <div class="card-images">
        <img src="${c}" alt="Food 1" />
        <img src="${l}" alt="Food 2" />
        <img src="${u}" alt="Food 3" />
        <img src="${d}" alt="Food 4" />
      </div>
      <a href="#" class="card-link">READ MORE</a>
    </div>

    <div class="experience-card">
      <h3 class="card-title">TO EXPLORE & TO CELEBRATE</h3>
      <p class="card-subtitle">Tailormade Tourism & Special Events</p>
      <div class="card-images">
        <img src="${f}" alt="Explore 1" />
        <img src="${p}" alt="Explore 2" />
        <img src="${m}" alt="Explore 3" />
        <img src="${h}" alt="Explore 4" />
      </div>
      <a href="#" class="card-link">READ MORE</a>
    </div>

  </div>

</section>

  `}document.querySelector(`#app`).innerHTML=`${g()}`;