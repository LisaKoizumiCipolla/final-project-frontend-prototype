
  <template>
    <div class="wrapper-about">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8 col-lg-10">
                    <h1 class="text-center title">
                        About Us
                    </h1>
                    <div class="row justify-content-center">
                        <img class="brand-logo mx-auto" src="../../assets/hunters tooth and talon_intero.png" alt="">
                    </div>
                    
                    <!-- Card 1 -->
                    <div class="card-hunter">
                        <div class="card-content text-center">
                            <p class="mb-lg-5">
                                Welcome to Hunters Tooth and Talon, your ultimate destination for the finest hunting experiences.
                                Founded by a group of passionate hunters with a deep-rooted love for the outdoors
                            </p>
                        </div>
                    </div>

                    <div class="row justify-content-between bottom-card-container">
                        <!-- Card 2 -->
                        <h2 class="text-center mb-5">
                            Why you should choose us?
                        </h2>
                        <div class="card-hunter col-12 col-md-4">
                            <div class="card-content">
                                <p>
                                    Our company is dedicated to providing you with the highest level of expertise and qualifications in the hunting industry.
                                </p>
                            </div>
                        </div>
    
                        <!-- Card 3 -->
                        <div class="card-hunter col-12 col-md-4">
                            <div class="card-content">
                                <p>
                                    At Hunters Tooth and Talon, we believe in preserving the rich traditions of hunting while embracing modern techniques and ethical practices.
                                </p>
                            </div>
                        </div>
                        <div class="card-hunter col-12 col-md-4">
                            <div class="card-content">
                                <p>
                                    Hunter Tooth and Talon are founded for you to take care of the enemies you need to rid of choose one 
                                    of our best hunters
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- DEVELOPERS -->
                    <h1 class="text-center title">
                        OURS DEVELOPERS
                    </h1>
                    <div class="flex-wrap d-flex container">                        
                        <div class="member m-lg-0 m-md-3 m-sm-5">
                            <img src="../../../public/Fra.png" alt="Fra">
                            <h3>
                                Francesco - Junior Web Developer
                            </h3>
                        </div>
                        <div class="member m-lg-0 m-md-3 m-sm-5">
                            <img src="../../../public/Gabri.png" alt="Gabri">
                            <h3>
                                Gabriele - Junior Web Developer
                            </h3>
                        </div>
                        <div class="member m-lg-0 m-md-3 m-sm-5">
                            <img src="../../../public/Momo.png" alt="Momo">
                            <h3>
                                Mohamed - Junior Web Developer
                            </h3>
                        </div>
                        <div class="member m-lg-0 m-md-3 m-sm-5">
                            <img src="../../../public/Lisa.png" alt="Lisa">
                            <h3>
                                Lisa - Junior Web Developer
                            </h3>
                        </div>
                        <div class="member m-lg-0 m-md-3 m-sm-5">
                            <img src="../../../public/Juan.png" alt="Juan">
                            <h3>
                                Juan - Junior Web Developer
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {


    
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
@use '../../styles/style.scss' as *;

.wrapper-about{

    // background-color: $background;
    background-image: url(../../assets/hunter.bg.jpg);
    // background-size: cover;

    p{
        font-family: 'Raleway';
        font-size: 1.3rem;
        color: $text;
    }

    padding-top: 10rem;

    .brand-logo{
        height: 250px;
        width: 300px;
        margin-bottom: 5rem;
        filter: invert(1);
    }

    .title{
        color: $text;
        font-family: 'Cinzel Decorative';
        font-weight: 600;
        font-size: 3rem;
        padding-bottom: 2rem;
        padding-top: 2rem;
    }


.card-hunter {
    transition: ease-out 0.5s;
    transform: scale(1);
}

.card-hunter:hover {
    transform: scale(1.2);
}

.card-hunter:not(:hover) {
    transition: ease-in 0.5s; /* Animazione più lenta all'hover out */
}
.member{
    max-width: calc(100% / 3);
    margin-bottom: 55px;
    text-align: center;
    img{
        border-radius: 50%;
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: center center;
    };
    h3{
        color:white;
        font-family: 'Cinzel Decorative';
    }
}
.member:hover{
    transition: ease-out 0.5s;
    transform: scale(1.2); 
    }
.member:not(:hover) {
    transition: ease-out 0.5s;
}
@media screen {
    .member{
        width: calc(100% / 2);
    }
    
}
.card-content {
    padding: 1.5rem;
    border-radius: 2rem;
}

.bottom-card-container{
    h2{
        font-family: 'Cinzel Decorative';
        color: $text;
        padding: 1rem;
        font-size: 3rem;
        font-weight: 600;
    }
}
}
    
</style>