<template>
    <div class="background-page">
        <div class="container">
            <div class=" hunter row d-flex flex-row justify-content-center margin-row">
                <div class="card-hunter col-8">
                    <div class="presentation d-flex">
                        <img v-if="hunter.image.startsWith('http')" :src="hunter.image" alt="">
                        <img v-else :src="'http://127.0.0.1:8000/storage/' + hunter.image" alt="">
                        <div class="data">
                            <h2>{{ hunter.name }} {{ hunter.surname }}</h2>
                            <p class="address"><i class="fa-solid fa-location-dot fa-sm"></i> {{ hunter.address }} </p>
                            <p class="phone"><i class="fa-solid fa-phone fa-sm"></i> +39 {{ hunter.phone }} </p>
                        
                            <p class="specialization">
                                Specializations: 
                                <ul>
                                    <li v-for="specialization in hunter.specializations">
                                        {{ specialization.name }}
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="content">
                        <p class="d-inline-flex gap-1">
                            
                            <button class="btn " type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="true" aria-controls="multiCollapseExample1">Services</button>
                            <a class="btn " data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">Leave a review</a>
                        </p>
                        <div class="row">
                            <div class="col-12">
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body">
                                        <h2>Services </h2>
                                        <p class="text-description"> {{ hunter.services }} </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                    <div class="div">
                                        <!--<ContactHunter :hunter="hunter" />-->
                                        <div class="card ">

                                            <h3 class="pt-5">
                                                Leave a Review
                                            </h3>

                                            <ReviewHunter :hunter="hunter" />
                                        </div>
                                            <div class="card reviews-wrapper">
                                                <h3>
                                                    Reviews
                                                </h3>
                                                <div class="reviews"  v-for="review in hunter.reviews">
                                                    <div>
                                                        Reviewer: {{ review.name }} {{ review.surname }}
                                                    </div>
                                                    <div>
                                                        Vote: {{ review.vote }}
                                                    </div>
                                                    <div>
                                                        Review: 
                                                        <p>{{ review.review }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="contact-hunter col-4">
                    <ContactHunter :hunter="hunter" />
                    <!-- <ReviewHunter :hunter="hunter" /> -->
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ContactHunter from './ContactHunter.vue'
import ReviewHunter from './ReviewHunter.vue'

export default {
    name: 'Show',
    components: {
        ContactHunter,
   ReviewHunter
    },
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000',
            hunter: false,
        };
    },
    methods: {
        getHunter() {
            console.log(this.$route.params.id);
            axios.get(`${this.apiUrl}/api/hunters/${this.$route.params.id}`).then((response) => {
                console.log(response);
                this.hunter = response.data.results;

            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    created() {
        this.getHunter();
    },
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

.background-page{
    background-color:$background;
    width: 100%;
    margin-top: 100px;
    padding: 100px 0;
}

.container{
    width: 100%;
    .hunter{
        width: 100%;
        background: $secondary;
        border-radius: 50px;
        padding: 50px;
    }
}
.card-hunter{
    //box-shadow: rgba(255, 255, 255, 0.1) 0px 20px 30px;
    padding: 0;
    border-radius: 15px;

    .presentation{        

        background-color: $text;
        padding: 10px;

        .data{
            padding: 30px 0;

            h2{
                font-family: 'Cinzel Decorative', cursive;
                font-weight: 700;
                font-size: 2rem;
            }

            .address, .phone{
                font-family: 'Cinzel Decorative', cursive;
                font-size: 1.1rem;
                font-weight: 400;
            }
        }


        .specialization{
            
            font-family: 'Cinzel Decorative', cursive;
            font-size: 1.4rem;
            font-weight: 600;
        }

        ul{
            list-style-type: none;

            li{
                font-family: 'Raleway', sans-serif;
            }
        }

        img{
            height: 250px;
            width: 250px;
            padding-right: 50px;
            object-fit: cover;
            object-position:20% 20%;
        }
    }

    .content{
        padding: 1.2rem;
        background-color: $text;
        
        h2{
            font-family: 'Cinzel Decorative', cursive;
            font-weight: 700;
            font-size: 2rem;
        }
    }
}

.contact-hunter{
    background-color: $text;
    border-left: 10px solid $secondary;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    padding: 0;
    height: 370px;
}
h3{
        text-align: center;
        font-weight: 600;
        font-family: 'Cinzel Decorative', cursive;
        padding-bottom: 10px;
    }
.reviews-wrapper{
    margin-top: 10px;
    padding: 30px 20px;



    .reviews{
        margin: 10px;
        padding: 15px 15px 0px;
        border: 1px solid $text;
        border-radius: 15px;
    }
}
.margin-row{
    padding-top: 10rem;
    padding-bottom: 5rem;
}

.btn {
    margin-top: 17px;
  width: 200px;
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

  a{
    text-decoration: none;
    color: $background;
  }

}

.btn:hover .icon {
  width: 170px;
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