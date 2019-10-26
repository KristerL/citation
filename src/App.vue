<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
<!--      <button @click="$store.commit('triggerInputOpen')">Open</button>-->
    </div>
    <router-view />
<!--    <InputForm v-if="this.$store.getters.getInputOpen"></InputForm>-->
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
//  import InputForm from "./components/InputForm";
//
//  export default {
//    components: {InputForm},
//  }
</script>