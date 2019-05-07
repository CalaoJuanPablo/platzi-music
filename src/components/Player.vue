<template lang="pug">
  .content
    p.is-128x128
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small {{ track.duration_ms }}
    p
      audio(controls :src="track.preview_url")
</template>

<script>
export default {
  data() {
    return {
      track: {}
    }
  },
  created() {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
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
