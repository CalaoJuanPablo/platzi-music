<template lang="pug">
  div#app
    section.section
      nav.navbar.has-shadow
        .container
          form(@submit="search")
            .field.has-addons
              input.input.is-medium(
                type="text",
                placeholder="Buscar canciones",
                v-model="searchQuery")
              button.button.is-info.is-medium(
                type="submit") Buscar
              a.button.is-danger.is-medium(@click="clearSearch") &times;
      .container
          p
            small {{ searchMessage }}
    section.section
      .container
        .columns
          .column(v-for="track in tracks")
            | {{ `${track.name} - ${track.artists[0].name}` }}
    
</template>

<script>
import trackService from './services/track'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search (e) {
      e.preventDefault()
      if (!this.searchQuery) { return }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        });
    },
    clearSearch () {
      this.searchQuery = ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
    }
  }
}
</script>

<style lang="sass">
@import './scss/main.scss'
</style>
