<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <myComponent start-value="6" />
  </div>
</template>

<script>
  import myComponent from "./components/myComponent";
  export default {
    components: { myComponent }
  }
</script>

<style scoped>

</style>
