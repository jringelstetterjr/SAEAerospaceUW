<template>
  <div class="about">
    <h1>About Us</h1>
    <p>
      At SAE (Society of Automotive Engineers International) Aero UW, we dedicate each year to designing, building and flying an advanced RC aircraft for the SAE Aero Design Competition. Our journey begins with research and securing funding, followed by meticulous design work to meet SAE requirements. As the year progresses, we transition to the build phase, where we fabricate and assemble the aircraft's components with precision. Rigorous testing ensures that our plane is ready for the competition. In April, we head to California to showcase our work against teams from around the world. This competition marks the culmination of our efforts, but it also sets the stage for continuous improvement and innovation as we prepare for the next year.
    </p>
    <br>
    <br>
    <h2>Our Current Build</h2>
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
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 2rem;
  margin-top: 5rem;
  overflow-y: auto;
  margin-bottom: 3rem;
  min-height: 100vh;
  box-sizing: border-box;
  flex: 1;
}
p {
  font-family: 'rajdhani', sans-serif;
  font-size: 1.6rem;
  line-height: 1.4;
  font-weight: 450;
}
h1 {
  font-family: 'rajdhani', sans-serif;
  font-weight: 600;
}
h2 {
  font-family: 'rajdhani', sans-serif;
  font-weight: 600;
  margin-top: 2rem;
}

.image-flex {
  display: flex;
  justify-content: space-between; /* Distributes the columns evenly */
  gap: 10px; /* Space between the images */
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
  
 