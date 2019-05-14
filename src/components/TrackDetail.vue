<template lang="pug">
  .container(v-if="track && track.album")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p
            button.button.is-primary.is-large(@click="selectTrack")
              span.icon &#9658;
      .column.is-8
        .panel.panel-primary
          .panel-heading 
            h1.title {{ track.name }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
              nav.level
                .level-left
                  a.level-item
</template>

<script>
import trackService from '../services/track'
import trackMixin from '../mixins/track'

export default {
  mixins: [
    trackMixin
  ],
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
