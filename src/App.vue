<!-- src/App.vue -->
<template>
  <div id="app">
    <TopBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    Footer
  }
}
</script>

<style>

</style>
