<template>
    <div class="wrapper">
        <div class="data" v-for="hunter in hunters">
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

export default {
    name:'Show',

    data() {
        return {
            hunters: [],
            apiUrl: 'http://127.0.0.1:8000/api/hunters'
        }
    },

    methods: {
        getHunter() {
            const params = {}
            // console.log(params);
            axios.get(this.apiUrl, { params })
                .then((response) => {
                console.log(response.data.results);
                this.hunters = response.data.results.data;
            })
                .catch(function (error) {
                console.log(error);
            })
                .finally(function () {
            });
        }
    },
    created() {
        this.getHunter();
    } 
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
    .wrapper{
        margin: 0 auto;
        margin-top: 150px;
        display: flex;
        background-color: $background;

        .data{
            width: 40%;
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