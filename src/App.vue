<template lang="pug">
  div#app
    img(alt="Vue logo" src="./assets/logo.png")
    h1 {{ message }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Hola mundo'
    }
  }
}
</script>

<style lang="sass">
@import './scss/main.scss'
</style>
