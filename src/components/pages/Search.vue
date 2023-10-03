<template>
<section class="background_details d-flex flex-row-reverse">
  <div class="container p-3">
    
    <div class="my_section_hunters container border-1 rounded-4">
    <section class="container  filter">
    <!-- SELECT SPECIALIZATION -->
      <div class="row d-flex justify-content-around ">

        <h1>
          {{ store.searchValue }}
        </h1>
      

        <select class="select-style col-4 mb-4 " name="type-select" id="type-select" v-model="selectedSpecialization">
  <option :value="store.searchValue" selected>You selected {{ store.searchValue }}</option> 
  <option class="option-style" v-for="specialization in specializations" :value="specialization.name">
      {{ specialization.name }}
  </option>
</select>
          <!-- SELECT VOTE -->
        <select class="mb-4 select-style col-3" name="" id="" v-model="vote">
          <option value="" disable selected>Vote</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

      <!-- SELECT REVIEW -->
      <select class="mb-4 select-style col-3" name="" id="" v-model="review">
        <option value="" disable selected>Reviews</option>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </select>

      <!-- BUTTON APPLY FILTERS -->

      <button class="btn mx-auto" @click="advancedHuntersFilter(selectedSpecialization,vote, review)">
        <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.18 516.57"><title>hunters target</title><path d="M382.68,103.93V62.34h24V152C486.33,162.56,536.89,206.3,559.76,284c-8.78,0-16.46.15-24.12-.19-1,0-2.2-2.58-2.67-4.15a139.77,139.77,0,0,0-30.66-54.87q-46.1-50.47-114.55-48.24c-1.51,0-3,0-5.07,0V127.77c-9.63,1.46-18.77,2.11-27.54,4.28Q236.31,161.36,206.39,280.32c-.65,2.6-1.41,4-4.5,3.88-6.36-.28-12.74-.12-19.11-.17a8.64,8.64,0,0,1-1.75-.51c9.15-49.57,32.06-91.37,69.65-124.9S332.31,107.41,382.68,103.93Z" transform="translate(-136.59 -62.34)"/><path d="M357.9,534.26C269.46,520.71,184.14,442.34,178,332.76H136.59V308.84h90.12c4.1-45.81,22.72-84,56.64-114.38,21.33-19.1,46.17-31.68,74.58-38.1v23.91c-71.84,25.1-107.93,75.25-107.7,152.24H202.06c1.25,9,1.74,17.35,3.63,25.4q28.4,120.7,148.62,151.25c2.92.74,4.16,1.67,4,4.83-.25,6.21-.08,12.44-.1,18.66A8.65,8.65,0,0,1,357.9,534.26Z" transform="translate(-136.59 -62.34)"/><path d="M431.34,485V460.31c33.54-9.3,60.72-27.9,80.91-56.27s28.46-60,26.21-95.17h47.85C586,245.58,536.45,152.58,431.42,131V107.49c76.78,9.37,172.36,81.57,180,201.09h41.4v23.88h-90c-4.11,46.15-23,84.56-57.27,115A163.47,163.47,0,0,1,431.34,485Z" transform="translate(-136.59 -62.34)"/><path d="M229.75,357.43h24.63c25.32,72.09,75.42,108.24,152.34,107.79v48.47c10.51-1.67,20.4-2.55,29.95-4.87,64.8-15.8,110.39-54.61,136.57-115.92,4.3-10.07,6.75-20.95,9.69-31.55.86-3.1,1.92-4.31,5.23-4.16,6.5.28,13,.08,19.56.08-8.78,76.17-82.17,173.6-200.77,180.34V578.9H382.7V489.42C303,478.63,252.41,435,229.75,357.43Z" transform="translate(-136.59 -62.34)"/></svg>
        </span>
        <span class="text d-flex">
        Apply Filter
        </span>  
      </button>



      </div>
    </section>
    <SingleHunter/>
    </div>
  </div>


</section>  

  
</template>
<script>
import axios from 'axios';
import {store} from '../../store.js';
import SingleHunter from './SingleHunter.vue';

export default {
  name: 'Search',
  components: {
    SingleHunter,
   
  },

  data() {
      return {

          store,
          vote:'',
          review:'',
          selectedSpecialization:'',
          nextPageUrl : '',
          currentPageNo: '',
          specializations:[],
          prevPageUrl : '',
          advancedfilteredhunter:[],
          selection:'',
      }
  },

  watch: {
    'store.searchValue'(newVal, oldVal) {
      // Questa funzione viene chiamata ogni volta che store.searchValue cambia
      this.selectedSpecialization = newVal;
    },
  },

        //$specialization = $request->input('specialization');
        //$minReview = $request->input('min_review');
        //$minAverage = $request->input('min_average');
        //http://127.0.0.1:8000/api/filter?=Demons?&min_review=1
        //http://127.0.0.1:8000/api/filter?=Demons?&min_average=4&min_review=5

  methods: {

    getSpecializations() {
        axios.get('http://127.0.0.1:8000/api/specializations')
          .then((response) => {
            // handle success
            this.specializations = response.data.results;
            console.log(this.specializations);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      },
    
      
  
    

      advancedHuntersFilter(selectedSpecialization,vote, review) {
        // const searchValue = this.store.searchValue;
  axios.get(`http://127.0.0.1:8000/api/filter?specialization=${selectedSpecialization}`,{
    params: {
      min_average: vote,
      min_review: review
    }
  })
  .then((response) => {
    this.filter = response.data.results;
    this.advancedfilteredhunter = vote.toString() + review.toString();

  this.store.updateHuntersList(this.filter);

    console.log(this.filter);
    console.log(this.advancedfilteredhunter);
  })
  .catch((error) => {
    console.error(error);
  });
}
    
      },
        

      nextPage(){
          // alert('next page');
          this.getHunters(this.nextPageUrl);
      },

      prevPage(){
          // alert('prev page');
          this.getHunters(this.prevPageUrl);
      },

      newSearch(nameToSearch){
              this.getHunters(this.apiUrl, nameToSearch);
      },

      created() {
      this.getSpecializations();
      
      console.log(this.store.searchValue);

    },
    computed:{
      
    }
   
  }
  
  

</script>
<style lang="scss" scoped>

@use '../../styles/partials/variables.scss' as *;

.serch_bar_container{
  background-color: $background;
  width: 50%;
  border-radius: 5px;
  padding: 0 1rem 0 1rem;
  margin-bottom: 0.7rem;
 
}
.my_section_hunters{
  width: 100%;
  background-color: $background;
  padding-top: 0 !important;
  margin-bottom: 2rem;
}

.nav_btn {
    
  width: 190px;
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
  color: $background;

  &:active{
    background: $secondary;
  }
  &.next{
              margin-left: auto;
          }
  &.prev{
              margin-right: auto;
              flex-direction: row-reverse;
              .text{
                transform: translateX(-50px);
              }
  }        
 }


.nav_btn:hover {
  box-shadow: 0 0 20px 0px $secondary;
}

.nav_btn .icon {
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

.nav_btn .text {
  transform: translateX(55px);

  a{
    text-decoration: none;
    color: $background;
  }

}

.nav_btn:hover .icon {
  width: 160px;
}

.nav_btn:hover .text {
  transition: all 0.5s;
  opacity: 0;
}

.nav_btn:focus {
  outline: none;
}

.nav_btn:active .icon {
  transform: scale(0.85);
}


.background_details{
  background-image: url(../../assets/hunter.bg.jpg);
  padding-top: 6rem;
}

.pagination{
      width: 100%;
      padding: 1rem;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      
      list-style-type: none;
      

  }

#header{
margin:20px;
}
#header>h1{
text-align:center;
font-size:3rem;
}
#header>p{
text-align:center;
font-size:1.5rem;
font-style:italic;
}
.navbar{
border-radius: 5px;
margin-right: 1rem;
width: 24rem;

}
.search-bar{
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-left: 3rem;
margin: 1rem 0 1rem 0;
}
.container{
padding-top: 3rem;
width:100%;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
height: 100%;
display:flex;
flex-wrap:wrap;
justify-content: space-around;
}
.card{
position: relative;
background-color: #f2f2f2;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
perspective: 1000px;
box-shadow: 0 0 0 5px #ffffff80;
transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
flex-direction:column;
width:400px;
margin-bottom:60px;

&:hover{
  cursor: pointer;
}
}
.card>div{
box-shadow:0 15px 20px 0 rgba(0,0,0,0.5);
}
.card-image{
width:400px;
height:250px;
}
.card-image>img{
width:100%;
//height:100%;
object-fit:cover;
object-position:center;
}
.card-text{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
padding: 20px;
box-sizing: border-box;
background-color: #2b2a33;
color: #f2f2f2;
transform: rotateX(-90deg);
transform-origin: bottom;
transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card-text {
transform: rotateX(0deg);

}
.card-meal-type{
font-style:italic;
}
.card-title{
font-size:2.2rem;
margin-bottom:20px;
margin-top:5px;
}
.card-body{
font-size:1.25rem;
}
.card-alcoholic{
width:100px;
height:100px;
background-color:salmon;
color:#fff;
margin-left:auto;
font-size:1rem;
display:flex;
justify-content:center;
align-items:center;
position: relative;
}

.select-style{
  background-color: $primary;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  font-family: 'Cinzel Decorative';
  color: $background;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
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

a{
    text-decoration: none;
    color: $background;
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



</style>