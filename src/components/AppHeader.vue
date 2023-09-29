<template>
    <header class="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top " id="mainNav">
            <div class="container-fluid p-0 p-lg-4 d-flex">
                    <a class="navbar-brand ps-4" href="/">
                        <img src="../assets/navbar-logo.png" alt="...">
                    </a>
                    <button class="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end  mt-3 mt-lg-0 bg-dark-mobile" id="navbarResponsive">
                        <div class="navbar-nav pt-md-0">
                            <a class="nav-link text-center hover-link" v-for="link in links" :key="link.name">
                                <router-link v-if="link.name !== 'LOGIN' && link.name !== 'SIGNIN'" :to="link.route" class="nav-link">
                                    {{ link.name }}
                                </router-link>
                                <a v-else :href="link.route" class="nav-link">
                                    {{ link.name }}
                                </a>
                            </a>    
                        </div>
                    </div>
                </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            links : [

                {
                    route: '/',
                    name: 'HOME'
                },
                {
                    route: '/services',
                    name: 'SERVICES'
                },
                {
                    route: '/about',
                    name: 'ABOUT'
                },                             
                
                {
                    route: 'http://127.0.0.1:8000/register',
                    name: 'SIGNIN'
                },
                {
                    route: 'http://127.0.0.1:8000/login',
                    name: 'LOGIN'
                },
            ]
            
           
        }
    },
}
</script>
<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

@media screen and (max-width: 960px) {
  .bg-dark-mobile{
    background-color: rgba($color: #000000, $alpha: 0.95);
  }
  .hover-link:hover{
    background-color: $secondary;
    transition: 0.5s;
  }
}

header{
    height: 100px;
    width: 100%;
    background-color: $background;
    color: $text;
    margin-bottom: 100px;
    
}

nav{
    font-family: 'Raleway', sans-serif;
    width: 100%;
    height: 100px;

    .navbar-content{
        
    height: 100%;
    width: 100%;

    ul{
        li{
                transition: all 2s;
            &:hover{
                text-decoration:underline;
            }
        }
    }
    }

    img{
        height: 65px;
        filter: invert(1);
    }
}

    
</style>