<script>
import AppHeader from './components/AppHeader.vue';
import Edit from './components/Edit.vue';
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Edit,
    AppFooter
  },
}
</script>

<template>
  <AppHeader />
  <Edit />
  <AppFooter />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap';
@use './styles/style.scss' as *;


</style>
