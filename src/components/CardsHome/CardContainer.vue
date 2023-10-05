<template>
    <div class="wrapper d-flex flex-wrap">
        <SingleCard class="card" v-for="hunter in sponsoredHunters" 
        :user_id="hunter.user_id"
        :image="hunter.image"
        :name="hunter.name"
        :surname="hunter.surname"
        :specialization="hunter.specializations"/>
    </div>
</template>
<script>
import SingleCard from '../CardsHome/SingleCard.vue';
import axios from 'axios';

export default {
    name: 'CardContainer',

    components:{
        SingleCard
    },
    data() {
        return {
            sponsoredHunters:[],
            apiUrl:'http://127.0.0.1:8000/api/sponsored',
        }
    },
    methods:{
        getSponsoredHunter(){

        axios.get(this.apiUrl, {
      })
      .then((response) => {
        this.sponsoredHunters = response.data.results;
        console.log(this.sponsoredHunters);
       
      })
      .catch((error) => {
        console.error(error);
      });
    },
    },
    created(){
        this.getSponsoredHunter();
    }
}
//http://127.0.0.1:8000/api/sponsored
</script>
<style lang="scss" scoped>
    .wrapper{
        height: 100%;
        width: 100%;
        justify-content: center;
    }
    .card{
        min-width: 350px;
    }
</style>