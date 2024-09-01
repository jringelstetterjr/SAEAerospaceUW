<template>
  <div class="home">
    <h1>SAE Aero UW</h1>
    <h2>Est. 2024</h2>
    <p>
      Every year, we apply knowledge from our engineering courses at UW-Madison
      to build an RC style airplane.
    </p>
    <hr class="separator" />

    <Carousel :value="images" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px">
      <template #item="{ item }">
        <div class="image-item">
          <img :src="item.src" :alt="item.alt" />
        </div>
      </template>
    </Carousel>

    <hr class="separator" />
    <div>
      <p>
        Come April, we'll test everything we've worked for in California, at the
        SAE Aero Design Competition, competing against teams from around the
        world.
      </p>
    </div>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
import build1 from '../assets/images/build1.jpeg';
import build2 from '../assets/images/build2.jpeg';
import build6 from '../assets/images/build6.jpeg';

export default {
  name: "Home",
  components: {
    Carousel,
  },
  mounted() {
  console.log(this.images);
},
  data() {
    return {
      images: [
        { src: build1, alt: 'Image 1' },
        { src: build2, alt: 'Image 2' },
        { src: build6, alt: 'Image 3' },
      ],
    };
  },
};



</script>


  
  <style scoped>
  
  .home {
    padding: 2rem;
    margin-top: 5rem;
    overflow-y: auto;
    margin-bottom: 0rem;
    box-sizing: border-box;
    flex: 1;
    justify-content: center;
  }
  h1 {
    font-family: 'exo', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 55px;
    font-style: italic;
    margin: 0;
  }
  h2 {
    font-family: 'exo', sans-serif;
    font-weight: 600;
    font-size: 1.7rem;
    margin: 0;
    text-align: center;
  }

  p {
    font-family: 'exo', sans-serif;
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

.image-item img {
  width: 100%; /* Make the images responsive */
  height: auto;
  display: block;
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
  </style>
  