<template lang="pug">
  .container(v-if="track && track.album")
    .columns
      .column.is-5.is-offset-4
        pm-track(:track="track")
</template>

<script>
import trackService from '../services/track'
import PmTrack from './Track'

export default {
  components: {
    PmTrack
  },
  data() {
    return {
      track: {}
    }
  },
  created() {
    const id = this.$route.params.id

    trackService.getById(id)
      .then((res) => {
        this.track = res.data
      })
      .catch(err => console.log(err))
  }
}
</script>


<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>
