<!-- src/views/Home.vue -->
<template>
    <div class="title">
      <h1>UW Madison SAE Aerospace</h1>
      <p>This is the home page content.</p>
    </div>
    <div class="content">
      
    </div>
    <hr class="separator"/>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style>
  
  .title {
    padding: 2rem;
    margin-top: 5rem;
    overflow-y: auto;
    margin-bottom: 0rem;
    box-sizing: border-box;
    flex: 1;
    justify-content: center;
  }
  h1 {
    font-family: 'exo ', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 55px;
    font-style: italic;
  }
  p {
    font-family: 'exo ', sans-serif;
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 450;
    justify-content: center;
    text-align: center;
  }

  </style>
  