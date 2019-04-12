<template lang="pug">
  section(class="section")
    div(class="container is-desktop")
      figure(class="image is-2by1 logo")
        img(src="../assets/logo.jpg")
      h1(class="title is-4 ") Registro estación Platzi
      form
        div(class="field")
          label(class="label") Nombre
          div(class="control")
            input(type="text" name="nombre" placeholder="John" class="input")
        div(class="field")
          label(class="label") Apellido
          div(class="control")
            input(type="text" name="apellido" placeholder="Doe" class="input")
        div(class="field")
          label(class="label") Nombre
          div(class="control")
            input(type="text" name="cargo" placeholder="FullStackJS" class="input")
        div(class="control")
        input(type="submit" name="send" label="Enviar" class="button is-primary")
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<style lang="sass">

</style>
