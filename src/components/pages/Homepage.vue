<template>
  <div class="wrapper">
    <img src="../../assets/hunters tooth and talon_intero.png" class="logo" alt="">
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

  <div class="contents d-flex flex-column align-items-center">

        <h1>
          Let the hunt begin!
        </h1>

        <div class="sponsored">
          <CardContainer />
        </div>

        
        <button class="btn">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.18 516.57"><title>hunters target</title><path d="M382.68,103.93V62.34h24V152C486.33,162.56,536.89,206.3,559.76,284c-8.78,0-16.46.15-24.12-.19-1,0-2.2-2.58-2.67-4.15a139.77,139.77,0,0,0-30.66-54.87q-46.1-50.47-114.55-48.24c-1.51,0-3,0-5.07,0V127.77c-9.63,1.46-18.77,2.11-27.54,4.28Q236.31,161.36,206.39,280.32c-.65,2.6-1.41,4-4.5,3.88-6.36-.28-12.74-.12-19.11-.17a8.64,8.64,0,0,1-1.75-.51c9.15-49.57,32.06-91.37,69.65-124.9S332.31,107.41,382.68,103.93Z" transform="translate(-136.59 -62.34)"/><path d="M357.9,534.26C269.46,520.71,184.14,442.34,178,332.76H136.59V308.84h90.12c4.1-45.81,22.72-84,56.64-114.38,21.33-19.1,46.17-31.68,74.58-38.1v23.91c-71.84,25.1-107.93,75.25-107.7,152.24H202.06c1.25,9,1.74,17.35,3.63,25.4q28.4,120.7,148.62,151.25c2.92.74,4.16,1.67,4,4.83-.25,6.21-.08,12.44-.1,18.66A8.65,8.65,0,0,1,357.9,534.26Z" transform="translate(-136.59 -62.34)"/><path d="M431.34,485V460.31c33.54-9.3,60.72-27.9,80.91-56.27s28.46-60,26.21-95.17h47.85C586,245.58,536.45,152.58,431.42,131V107.49c76.78,9.37,172.36,81.57,180,201.09h41.4v23.88h-90c-4.11,46.15-23,84.56-57.27,115A163.47,163.47,0,0,1,431.34,485Z" transform="translate(-136.59 -62.34)"/><path d="M229.75,357.43h24.63c25.32,72.09,75.42,108.24,152.34,107.79v48.47c10.51-1.67,20.4-2.55,29.95-4.87,64.8-15.8,110.39-54.61,136.57-115.92,4.3-10.07,6.75-20.95,9.69-31.55.86-3.1,1.92-4.31,5.23-4.16,6.5.28,13,.08,19.56.08-8.78,76.17-82.17,173.6-200.77,180.34V578.9H382.7V489.42C303,478.63,252.41,435,229.75,357.43Z" transform="translate(-136.59 -62.34)"/></svg>
            </span>
            <span class="text">All Hunters</span>
        </button>

  </div>

</template>
<script>

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CardContainer from '../CardsHome/CardContainer.vue'

export default {
  name: 'AppMain',
  components:{
    CardContainer
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>

@use '../../styles/partials/variables.scss' as *;
.wrapper{
    margin-top: 100px;
  .logo{
      height: calc(100vh - 100px);
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

.contents{
  background-color: $background;

  h1{
    font-family: 'Cinzel Decorative', cursive;
    font-weight: 700;
    font-size: 4rem;
    color: $secondary;
    text-align: center;
    padding-top: 125px;
    padding-bottom: 40px;
  }

  .sponsored{
    width: 80%;
    margin-bottom: 55px;
  }

  .btn {
    margin-bottom: 100px;
  width: 235px;
  height: 50px;
  padding: 0 15px;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  font-size: 20px;
    font-family: 'Cinzel Decorative', cursive;
  font-weight: 600;
  display: flex;
  align-items: center;
  background-color: $primary;
  color: black;

  &:active{
    background: $secondary;
  }
 }

.btn:hover {
  box-shadow: 0 0 20px 0px $secondary;
}

.btn .icon {
  position: absolute;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  svg{
    height: 30px;
  }
}

.btn .text {
  transform: translateX(55px);

}

.btn:hover .icon {
  width: 205px;
}

.btn:hover .text {
  transition: all 0.5s;
  opacity: 0;
}

.btn:focus {
  outline: none;
}

.btn:active .icon {
  transform: scale(0.85);
}

 
}



@media screen and (max-width: 576px) {
  .logo{
    height: 250px;
  }
}

</style>