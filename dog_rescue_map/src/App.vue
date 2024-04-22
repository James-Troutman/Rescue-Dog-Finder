<template>
  <div id="dog-app">
  
    <div id="logo-container">
  <img src="PetFinderLogo.png" alt="Dog Logo">
</div>
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

#logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo-container > img {
  width: 700px;
}
</style>
