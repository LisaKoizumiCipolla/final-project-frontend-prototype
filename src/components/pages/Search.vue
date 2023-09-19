<template>
    <div class="container">
    <div class="search-bar">
      <input type="text" name="text" id="searchText" class="navbar" v-model="searchText">
      <button @click="newSearch(searchText)" class="custom-btn btn">search</button>
    </div>
    <SingleHunter  v-for="hunter in hunters" :hunter="hunter"/>
  </div>
    
</template>
<script>
import axios from 'axios';
import SingleHunter from '../pages/SingleHunter.vue';

export default {
    name: 'Search',
    components: {
      SingleHunter
    },

    data() {
        return {
            hunters:[],
            apiUrl:'http://127.0.0.1:8000/api/hunters',
            searchText : '',
        }
    },

    methods: {
        getHunters(apiUrl = this.apiUrl, nameQuery = false){
            const params = { }
            if(nameQuery){
                params.search = nameQuery;
            }
            
            
            axios.get(apiUrl, {params})
            .then((response)=>{
               console.log(response.data.results.data);
                this.hunters= response.data.results.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        },

        newSearch(nameToSearch){
                this.getHunters(this.apiUrl, nameToSearch);
        }


    },

    created() {
        this.getHunters(this.apiUrl);
        
    },

}
</script>
<style lang="scss" scoped>

@use '../../styles/partials/variables.scss' as *;
.container{
    padding-top: 15rem;
    background-color: $background;
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
  width: 30%;
  border-radius: 10px;
  margin-right: 3rem;
  height: 30px;
  padding-left: 10px;
}
.search-bar{
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  margin-left: 3rem;
}
.custom-btn {
 width: 130px;
 height: 40px;
 color: white;
 border-radius: 5px;
 padding: 10px 25px;
 font-family: 'Lato', sans-serif;
 font-weight: 500;
 background: transparent;
 cursor: pointer;
 transition: all 0.3s ease;
 position: relative;
 display: inline-block;
 box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
 outline: none;
}

.btn {
 background: linear-gradient(0deg, rgb(58, 56, 53) 0%, rgb(0, 0, 0) 100%);
 line-height: 42px;
 padding: 0;
 border: none;
}

.btn span {
 position: relative;
 display: block;
 width: 100%;
 height: 100%;
}

.btn:before,
.btn:after {
 position: absolute;
 content: "";
 right: 0;
 bottom: 0;
 background: #2b2a33;
 box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
 transition: all 0.3s ease;
}

.btn:before {
 height: 0%;
 width: 2px;
}

.btn:after {
 width: 0%;
 height: 2px;
}

.btn:hover:before {
 height: 100%;
}

.btn:hover:after {
 width: 100%;
}

.btn span:before,
.btn span:after {
 position: absolute;
 content: "";
 left: 0;
 top: 0;
 box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
 transition: all 0.3s ease;
}

.btn span:before {
 width: 2px;
 height: 0%;
}

.btn span:after {
 height: 2px;
 width: 0%;
}

.btn span:hover:before {
 height: 100%;
}

.btn span:hover:after {
 width: 100%;
}
.container{
  width:100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  padding:40px 20px;
  
  background-size:cover;
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
</style>