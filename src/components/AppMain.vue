<template>
  <div class="wrapper">
    <img src="../assets/hunters tooth and talon_intero.png" class="logo" alt="">
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-indicators">
       <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="4" aria-label="Slide 5"></button>
     </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://cdnb.artstation.com/p/assets/images/images/014/478/623/large/caio-monteiro-010.jpg?1544112638" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <!-- Correct the URL of your second image -->
          <img src="https://cdn.discordapp.com/attachments/1134115229098324073/1151092130333343754/Diablo_Warriors_Monsters_Arthas_Barbarian_Battle_533442_1920x1080.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701471456.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://www.wallpaperflare.com/static/554/121/81/fantasy-art-warrior-sword-creature-wallpaper.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://cdn.wallpapersafari.com/1/81/kHuKpN.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: 'AppMain',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>

.wrapper{

  .logo{

      z-index: 1;
      height: 500px;
      filter: invert(0);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      }

    img{
      height: calc(100vh - 100px);
      overflow: hidden;

      filter: opacity(.9);
      object-fit: cover;
    }
}
</style>