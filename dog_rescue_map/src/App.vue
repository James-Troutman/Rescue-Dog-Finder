<template>
  <div id="dog-app">
    <div id="main-header">
    <h1 id="title">Four-Legged Friend <span id="finder">Finder</span></h1>
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


#main-header {
  display: flex;
  justify-content: center;
  font-size: 2.8rem;
  text-shadow: 2px 2px 5px black;
  margin-top: 25px;
}

#title {
  color: #d61c1c;
}

#finder {
  text-shadow: none;
  color: black;
}


</style>
