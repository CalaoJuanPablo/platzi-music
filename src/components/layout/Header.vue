<template lang="pug">
  section.section.hero.is-success
    .hero-head
      header
        .container
          nav.navbar
            .navbar-brand
              .navbar-item
                router-link(to="/")
                  strong Platzi Music
              a.navbar-burger.burger(role="button" data-target="navbarMenu")
                span
                span
                span
            .navbar-menu#navbarMenu
              .navbar-end
                router-link.navbar-item(to="/") Buscar
                router-link.navbar-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Muy buenas canciones
        pm-player
</template>

<script>
import PmPlayer from '../Player.vue'

export default {
  components: {
    PmPlayer 
  }  
}
</script>
