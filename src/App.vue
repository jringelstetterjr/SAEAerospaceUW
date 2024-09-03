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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.content {
  position: relative;
  flex: 1; /* Allow content to grow and fill available space */
  display: flex;
  justify-content: center;
  align-items: center; /* Center content vertically */
  width: 100%; /* Ensure content spans the full width */
}
</style>
