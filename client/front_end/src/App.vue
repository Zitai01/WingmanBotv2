<template>
  <div id="app">
    <header>
      
      <Nav />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  background-color: slategray;
  text-align: center;
  
  margin-top: 60px;
}
body{
  background-color: slategray;
  color: aliceblue;
}
button{
  margin: 2em;
  color:aliceblue ;
  font-size: 0.9em;
  border: none;
  background-color: slategray;
}
.link{
  color: white;
  margin: 2em;
  text-decoration: none;
}
.active_link{
  color: aqua;
}
nav{
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
