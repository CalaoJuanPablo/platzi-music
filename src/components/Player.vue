<template lang="pug">
  .content(v-if="track && track.album")
    p.is-128x128
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }} &nbsp;
      small {{ track.duration_ms | ms-to-mm }}
    p
      audio(controls autoplay :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="scss" scoped>
$box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

img {
  width: 124px;
  border-radius: 8px;
  box-shadow: $box-shadow;
}

audio:focus {
  outline: none;
}
</style>
