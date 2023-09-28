<template>
    <div class="wrapper row mx-auto">
        <SingleCard v-for="hunter in hunters" 
        :thumb="hunter.thumb"
        :name="hunter.name"
        :surname="hunter.surname"
        :specialization="hunter.specialization"/>
    </div>
</template>
<script>
import SingleCard from './SingleCard.vue';

export default {
    name: 'CardContainer',

    components:{
        SingleCard
    },
    data() {
        return {
            hunters:[
                {
                    thumb: 'https://hips.hearstapps.com/hmg-prod/images/supernatural-dean-winchester-1556276848.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*',
                    name: 'Dean',
                    surname: 'Winchester',
                    specialization: 'Demons'
                },
                {
                    thumb: 'https://i.pinimg.com/564x/86/03/7c/86037cf1698c735a3c6ce3d6540f9567.jpg',
                    name: 'Maka',
                    surname: 'Albarn',
                    specialization: 'Ghosts'
                },
                {
                    thumb: 'https://i.pinimg.com/1200x/46/a8/ee/46a8ee83264088b873a8efd562a36de8.jpg',
                    name: 'Ellen Louise',
                    surname: 'Ripley',
                    specialization: 'Aliens'
                },
                {
                    thumb: 'https://i.pinimg.com/originals/55/7b/9b/557b9b3fdfec1bd85753c08b06b68cef.jpg',
                    name: 'Seraphina',
                    surname: 'Lightwing',
                    specialization: 'Angels'
                },
            ]
        }
    },
    
}
</script>
<style lang="scss" scoped>
    .wrapper{
        height: 100%;
        width: 100%;
        justify-content: center;
    }
</style>