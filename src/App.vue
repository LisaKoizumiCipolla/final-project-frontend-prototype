<script>
import AppHeader from './components/AppHeader.vue';

import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    
    AppFooter
  },
}
</script>

<template>
  <AppHeader />

  <router-view>
  </router-view>

  <AppFooter />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap';
@use './styles/style.scss' as *;


</style>
