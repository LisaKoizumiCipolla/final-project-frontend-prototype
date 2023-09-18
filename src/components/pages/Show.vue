<template>
    <div class="wrapper d-flex align-items-center justify-content-center">
        <div class="data">
            <img :src="hunter.image" alt="">
            <h2>
                {{ hunter.name }} {{ hunter.surname }}
            </h2>
        </div>
        <div class="contact"></div>
    </div>

</template>
<script>
import axios from 'axios';
//import SingleHunter from '../pages/SingleHunter.vue';

export default {
    name: 'Show',
    props: {
        'hunter': Object
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
                this.cocktail = response.data.results.data;
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
    .wrapper{
        margin: 0 auto;
        padding-top: 150px;
        background-color: $background;

        .data{
            width: 40%;
            height: 400px;
            margin: 100px;
            background-color: $text;

            img{
                height: 200px;
                object-fit: contain;
            }
        }

        .contact{
            width: 30%;
            background-color: $text;
        }
    }
</style>