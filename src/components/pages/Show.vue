<template>
    <div class="background-page">
        <div class="container">
            <div class="row justify-content-center margin-row">
                <div class="col-12 col-md-6 card-hunter">
                    <img class="img-fluid" :src="hunter.image" :alt="hunter.name">
                    <div class="content">
                        <h2>{{ hunter.name }} {{ hunter.surname }}</h2>
                        <p class="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta laudantium totam facilis ipsam. Labore repellat optio, unde aperiam illum fugit commodi voluptatum. Rem voluptate in accusamus quos error reprehenderit.</p>
                        <p class="specialization">
                            Specialization: {{ hunter.specialization }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
            hunter: '',
        };
    },
    methods: {
        getHunter() {
            console.log(this.$route.params.user_id);
            axios.get(`${this.apiUrl}/api/hunters/${this.$route.params.user_id}`).then((response) => {
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
    background-color: $background;
}

.card-hunter{
    box-shadow: rgba(255, 255, 255, 0.1) 0px 20px 30px;
    padding: 0;
}

.margin-row{
    padding-top: 10rem;
    padding-bottom: 5rem;
}

.content{
    padding: 1.2rem;
    background-color: white;
}

img{
    height: 450px;
    width: 100%;
    object-fit: cover;
}



</style>