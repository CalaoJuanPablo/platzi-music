<template lang="pug">
  div#app
    section.section
      nav.navbar.has-shadow
        .container
          form(@submit="search")
            .field.has-addons
              input.input.is-large(
                type="text",
                placeholder="Buscar canciones",
                v-model="searchQuery")
              button.button.is-info.is-large(
                @click="search",
                type="submit") Buscar
              a.button.is-danger.is-large(@click="clearSearch") &times;
          p
            small {{ searchMessage }}
    section.section
      .container
        .columns
          .column(v-for="track in tracks") {{ `${track.name} - ${track.artist}` }}
    
</template>

<script>
const tracks = [
  { name: 'Song 1', artist: 'artist 1'},
  { name: 'Song 2', artist: 'artist 2'},
  { name: 'Song 3', artist: 'artist 3'}
];

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
      this.tracks = tracks
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
