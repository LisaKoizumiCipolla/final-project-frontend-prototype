<template>
    <div class="single-card">
        <img :src="thumb" alt="">
        <div class="text">
            <h2>
                {{ name }} {{ surname }}
            </h2>
            <h3>
               SPECIALIZATION: {{ specialization }}
            </h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SingeCard',
    props:{
        thumb: String,
        name: String,
        surname: String,
        specialization: String
    },
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

    .single-card{
        width: calc( (100% / 3) - 25px);
        //
        background-color: $text;
        margin-bottom: 20px;
        margin-right: 15px;

        &:hover{
            cursor: pointer;
            transition: .5s;
            border-bottom-right-radius: 25px;
            box-shadow: rgba(209, 65, 65, 0.795) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
        }

        .text{
            font-family: 'Cinzel Decorative', cursive;
            padding: 10px 10px 5px;

            h2{
                font-size: 1.5rem;
                font-weight: 700;
            }

            h3{
                font-size: 1.2rem;
                color: $secondary;
                font-weight: 500;
            }
        }
        img{
            width: 100%;
            height: 270px;
            object-fit: cover;
            object-position: 0 20%;
            
        }
    }

</style>