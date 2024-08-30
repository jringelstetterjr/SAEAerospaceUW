<template>
    <div class="footer">
        <div class="footer-content">
            <div class="contact-us">
                <p>Email: acbrion@wisc.edu</p>
            </div>
            <div class="social-links">
                <a href="https://www.instagram.com/saeaerouw/" target="_blank">
                    <i class="pi pi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/sae-aero-uw" target="_blank">
                    <i class="pi pi-linkedin"></i>
                </a>
            </div>
            <div class="logo">
                <img src="../assets/logo.jpeg" alt="UW-Madison SAE Club Logo" class="logo"/>
            </div>
        </div>
    </div>
</template>

<script>
import 'primeicons/primeicons.css';

  export default {
    name: 'Footer'
  }
</script>

<style scoped>
.footer {
    position: relative;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: black;
    color: white;
    box-shadow: 0px 0px 6px rgb(0, 0, 0); 
    height: auto;
    font-family: 'exo', sans-serif;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.contact-us {
    flex: 1;
}

.logo {
  height: 80px; /* Adjust as needed */
  margin-right: 1rem; /* Space between logo and first link */
  display: flex;
}

.social-links {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
}

h3 {
    font-family: 'exo ', sans-serif;
    font-size: x-large;
}

p {
    font-family: 'exo ', sans-serif;
    font-size: large;
}
.pi {
    font-size: 2rem;
    color: white
}
</style>