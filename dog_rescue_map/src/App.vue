<template>
  <div id="dog-app">
  
  <router-link v-bind:to="{ name: 'dogs'}">Hello World!</router-link>

  <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#dog-app {
  background-image: url('')
}
</style>
