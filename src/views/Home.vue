<!-- src/views/Home.vue -->
<template>
    <div class="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style>
  
  .home {
    padding: 2rem;
    margin-top: 5rem;
    overflow-y: auto;
    margin-bottom: 0rem;
    box-sizing: border-box;
    flex: 1;
  }
  h1 {
    font-family: 'rajdhani', sans-serif;
    font-weight: 600;
  }
  p {
    font-family: 'rajdhani', sans-serif;
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 450;
  }

  </style>
  