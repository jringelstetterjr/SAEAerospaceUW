<!-- src/views/Home.vue -->
<template>
    <div class="home">
      <h1>SAE Aero UW Est. 2024</h1>
      <p>Every year, we apply knowledge from our engineering courses at UW-Madison to build an RC style airplane.</p>
      <hr>  
      <div class="image-flex">
        <div class="image-item">
          <img src="../assets/images/build1.jpeg" alt="Image 1">
        </div>
        <div class="image-item">
          <img src="../assets/images/build2.jpeg" alt="Image 2">
        </div>
        <div class="image-item">
          <img src="../assets/images/build6.jpeg" alt="Image 3">
        </div>
    </div>
    <div>
      <h2>Our Mission</h2>
      <p>When the time comes, we test everything we've worked for in California, at the SAE Aero Design Competition, competing against teams from around the world.</p>
    </div>
  </div>
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
  h2 {
    font-family: 'exo ', sans-serif;
    font-weight: 600;
    margin-top: 2rem;
    font-size: 1.7rem;
  }
  h2 {
    font-family: 'exo ', sans-serif;
    font-weight: 600;
    margin-top: 2rem;
    font-size: 1.7rem;
  }
  p {
    font-family: 'exo ', sans-serif;
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 450;
    justify-content: center;
    text-align: center;
  }

  .image-flex {
  display: flex;
  justify-content: space-between; /* Distributes the columns evenly */
  gap: 10px; /* Space between the images */
  padding: 5px;
}

.image-item {
  flex: 1; /* Makes each column take up equal space */
  margin: 0 5px; /* Adds margin between the items */
  box-shadow: 0px 0px 6px rgb(0, 0, 0); 
}

.image-item img {
  width: 100%; /* Make the images responsive */
  height: auto;
  display: block;
}

  </style>
  