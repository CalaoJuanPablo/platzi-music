<template lang="pug">
  main
    pm-notification(v-show="showNotification")
      p(slot="notification-body") No se encontraron resultados
    section.section
      nav.navbar
        .container
          form.column.is-full(@submit="search")
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
              v-blur="track.preview_url"
              @select="setSelectedTrack"
              :class="{ 'is-active': track.id === selectedTrack }")
</template>

<script>
import trackService from '../services/track'
import PmTrack from '../components/Track.vue'
import PmLoader from '../components/shared/Loader.vue'
import PmNotification from '../components/shared/Notification.vue'

export default {
  name: 'app',
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  methods: {
    search (e) {
      e.preventDefault()
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
        .catch(err => console.log(err))
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
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
.results {
  margin-top: 50px
}
.is-active {
  border: 3px solid #23d169;
}
</style>
