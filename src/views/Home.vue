<template>
  <div class="home">
    <h1>SAE Aero UW</h1>
    <h2>Est. 2024</h2>
    <p>
      Every year, we apply knowledge from our engineering courses at UW-Madison
      to build an RC style airplane.
    </p>
    <hr class="separator" />

    <Carousel
      :value="images"
      :numVisible="1"
      :numScroll="1"
      orientation="horizontal"
      :responsiveOptions="responsiveOptions"
      circular
      autoplayInterval="4500"
      class="custom-carousel"
    >
      <template #item="{ data }">
        <div class="carousel-item">
          <img :src="data.src" :alt="data.alt" />
        </div>
      </template>
    </Carousel>

    <hr class="separator" />
    <div>
      <p>
        When the time comes, we test everything we've worked for in California, at the
        SAE Aero Design Competition, competing against teams from around the
        world. We were only established in 2024, but we are already making headway 
        on our plane and are excited to see where the future takes us. Come April, we'll compete, 
        which will set the stage for continous improvement and innovation.
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
  data() {
    return {
      images: [
        { src: build1, alt: 'Image 1' },
        { src: build2, alt: 'Image 2' },
        { src: build6, alt: 'Image 3' },
        // Add more images as needed
      ],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1,
        },
        {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1,
        },
        {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1,
        },
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

.separator {
  width: 75%;
  height: 2px;
  background-color: #9b9494; /* Adjust color as needed */
  margin: 1rem auto; /* Centers the line and adds spacing */
  border: none;
}

.custom-carousel .carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px; /* Adjust as needed */
}

.carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.p-button-text.p-button-secondary {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease; 
}

:root {
  --carousel-button-bg: #007bff; /* Change to your preferred color */
  --carousel-button-hover-bg: #0056b3; /* Change to your preferred hover color */
  --carousel-button-color: white;
  --carousel-button-size: 40px;
}

.custom-carousel .p-carousel-prev,
.custom-carousel .p-carousel-next-button {
  background-color: var(--carousel-button-bg);
  border: none;
  color: var(--carousel-button-color);
  font-size: 1.5rem;
  width: var(--carousel-button-size);
  height: var(--carousel-button-size);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.custom-carousel .p-carousel-prev-button:hover,
.custom-carousel .p-carousel-next-button:hover {
  background-color: var(--carousel-button-hover-bg);
}

.custom-carousel .p-carousel-prev-button:focus,
.custom-carousel .p-carousel-next-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}
</style>
