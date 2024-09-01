<!-- src/App.vue -->
<template>
  <div id="app">
    <TopBar />
    <main class="content">
      <router-view />
    </main>
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

<style scoped>
#app {
    min-height: 100vh; 
    margin: 0; 
    display: grid;
    grid-template-rows: 1fr auto;
}
.content {
  position: relative ;
}
</style>
