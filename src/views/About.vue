<template>
  <div class="about">
    <h1>About Us</h1>
    <p>
      At SAE (Society of Automotive Engineers International) Aero UW, we dedicate each year to designing, building and flying an advanced RC aircraft for the SAE Aero Design Competition. Our journey begins with research and securing funding, followed by meticulous design work to meet SAE requirements. As the year progresses, we transition to the build phase, where we fabricate and assemble the aircraft's components with precision. Rigorous testing ensures that our plane is ready for the competition. In April, we head to California to showcase our work against teams from around the world. 
      This competition marks the culmination of our efforts, but it also sets the stage for continuous improvement and innovation as we prepare for the next year.
    </p>
    <hr class="separator" />
    <h2>Our Current Build</h2>
    <div class="image-flex">
      <div class="image-item">
        <img src="../assets/images/originalbuild1.jpeg" alt="Image 1">
      </div>
      <div class="image-item">
        <img src="../assets/images/originalbuild2.jpeg" alt="Image 2">
      </div>
      <div class="image-item">
        <img src="../assets/images/originalbuild6.jpeg" alt="Image 3">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    useMeta({
      title: "About Page - SAE Aero UW",
      meta: [
        { name: "description", content: "About what we do at SAE Aero UW. Come learn about what our club is all about!" },  
      ],
    });
  },
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
  font-family: 'exo', sans-serif;
  font-size: 1.6rem;
  line-height: 1.4;
  font-weight: 200;
  text-align: center;
}
h1 {
  font-weight: 600;
  font-family: 'exo', sans-serif;
  text-align: center;
  font-size: 55px;
  font-style: oblique;
}

h2 {
  font-family: 'exo', sans-serif;
  margin-top: 2rem;
  text-align: center;
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
.separator {
  width: 75%;
  height: 2px;
  background-color: #9b9494; /* Adjust color as needed */
  margin: 1rem auto; /* Centers the line and adds spacing */
  border: none;
}
@media (max-width: 768px) {
  .image-flex {
    flex-direction: column; /* Stack the images vertically on mobile */
  }
}
</style>
  
 