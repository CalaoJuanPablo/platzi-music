<template lang="pug">
  div#app
    pm-header
    section.section
      nav.navbar
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
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks")
            pm-track(
              :key="track.id"
              :track="track"
              @select="setSelectedTrack"
              :class="{ 'is-active': track.id === selectedTrack }")
    pm-footer
</template>

<script>
import trackService from './services/track'
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'
import PmTrack from './components/Track.vue'
import PmLoader from './components/shared/Loader.vue'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ''
    }
  },
  methods: {
    search (e) {
      e.preventDefault()
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
        });
    },
    clearSearch () {
      this.searchQuery = ''
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px
}
.is-active {
  border: 3px solid #23d169;
}
</style>
