<template>
    <div class="single-card">
        
        <router-link class="text-decoration-none" id="color-text" :to="{name: 'Show', params: {id:user_id}}">       
            <img v-if="image.startsWith('http')" :src="image" alt="">
                        <img v-else :src="'http://127.0.0.1:8000/storage/' + image" alt="">
            <div class="text">
                <h2>
                    {{ name }} {{ surname }}
                </h2>
                <h3>
                    SPECIALIZATIONS:
                    <span v-for="specializationItem in specialization">     
                           <span>
                               {{ specializationItem.name }} ,
                           </span>
                    </span>
                </h3>
                <span class="badge rounded-pill text-bg-warning">Best Hunters</span>
            </div>
        </router-link>

    </div>
</template>
<script>
export default {
    name: 'SingleCard',
    props:{
        image: String,
        name: String,
        surname: String,
        specialization: String,
        user_id:String,
    },
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;

#color-text{
    color: $background;
}

    .single-card{
        width: calc( (100% / 3) - 25px);
        //
        background-color: $text;
        margin-bottom: 20px;
        margin-right: 15px;
        transition: 0.5s;

        &:hover{
            cursor: pointer;
            border-bottom-right-radius: 25px;
            box-shadow: rgba(209, 65, 65, 0.795) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
        }

        .text{
            font-family: 'Cinzel Decorative', cursive;
            padding: 10px 20px 5px;

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