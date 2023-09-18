<template>
    <div class="card">
        <div class="card-image">
            <img :src="hunter.image" alt="">
        </div>
        <div class="card-text">
            <router-link   :to="{name: 'Show', params: {id:hunter.user_id}}">
                <p class="card-meal-type">{{ hunter.surname }}</p>
                <h2 class="card-title">{{ hunter.name }}</h2>
                <p> {{ hunter.user_id }}</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'SingleHunter',
    props:{
        'hunter' : Object
    }
}
</script>
<style lang="scss" scoped>
    
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