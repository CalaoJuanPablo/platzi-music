<template lang="pug">
  div#app
    RegisterForm
</template>

<script>
import RegisterForm from './components/RegisterForm.vue';

export default {
  name: 'app',
  components: {
    RegisterForm
  }
}
</script>

<style lang="sass">
@import './scss/main.scss'
</style>
