<template>
  <div class="container p-5 p-md-0">
    <div class="row justify-content-around px-md-2">
      <div class="card-style col-12 col-md-3 me-3" v-for="singlehunter in store.huntersList">
        <router-link :to="{name: 'Show', params: {id:singlehunter.user_id}}">
          <div class="card-img">
            <div class="image-overlay">

            </div>
            <img v-if="singlehunter.image.startsWith('http')" :src="singlehunter.image" alt="">
            <img v-else :src="'http://127.0.0.1:8000/storage/' + singlehunter.image" alt="">
            </div>
                <div class="card-info my_bg-glass">
                  <p class="title">{{ singlehunter.name }}</p>
                  <p class="subtitle">{{ singlehunter.surname }}</p>
                  <div v-for="huntersponsor in singlehunter.sponsorships" class="sponsor">
                    <span class="badge rounded-pill text-bg-warning">{{ huntersponsor.name }}</span>                        
                  </div>
                </div>
                
          </router-link>
      </div>
    </div>
  </div>

    
      
    
    
</template>
<script>
import {store} from '../../store.js';
export default {
    name:'SingleHunter',
    props: {
      'hunter' : Object,
    },
    data(){
      return{
        store,

      }
    }
}
</script>
<style lang="scss" scoped>

@use '../../styles/partials/variables.scss' as *;
    
.card-style {
  height: 300px;
  width: 300px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  line-height: 100%;
  transition: box-shadow .3s ease-in-out;
  margin-bottom: 2rem;
  padding: 0;
}

.card-info {
  position: absolute;
  bottom: 1em;
  width: 100%;
  text-align: center;
  z-index: 1;
  font-family: 'Cinzel Decorative';
  transition: transform .3s ease-in-out;
  padding-top: 1rem;
  height: 80px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  p{
    color: $text;
  }
}

.my_bg-glass {
  text-align: center;
  backdrop-filter: blur(80px);
  background-color: rgba(255, 255, 255, 0.099);
}

/* Image */
.card-img {
  position: relative;

  img{
    width: 300px;
    height: 300px;
    object-fit: cover;
    display: block;
    object-position: top;
  }
}

/* Buttons */

/* Texts */
.title {
  font-size: 1.5em;
  font-weight: bold;
}

.subtitle {
  letter-spacing: 1px;
  font-size: 0.9em;
}


/* Hovers */
.card-style:hover {
  box-shadow: 0px 15px 30px rgba(80, 80, 80, 0.4);
}

.card-style:hover .card-info {
  transform: translateY(-5em);
}

.title-selection{
  font-family: 'Cinzel Decorative';
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  color: $secondary;
  margin-bottom: 3rem;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9); /* Colore di sfondo opaco (qui 0.5 indica un'opacità del 50%) */
    opacity: 0; /* Inizialmente trasparente */
    transition: opacity 0.3s ease-in-out; /* Aggiungi una transizione */

    &:hover .image-overlay {
    opacity: 1;
  }
  }

</style>