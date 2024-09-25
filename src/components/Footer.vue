<template>
    <div class="footer">
        <div class="footer-content">
            <div class="contact-us">
                <p>Contact Us: <a href="mailto:acbrion@wisc.edu">acbrion@wisc.edu</a></p>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/company/sae-aero-uw" target="_blank">
                    <i class="pi pi-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/saeaerouw/" target="_blank">
                    <i class="pi pi-instagram"></i>
                </a>
            </div>
            <div class="logo">
                <img src="../assets/logo.jpeg" alt="UW-Madison SAE Club Logo" class="img"/>
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
    display: flex;  /* Change inline-flex to flex */
    justify-content: space-between; /* Distribute space evenly between the divs */
    align-items: center;
    padding: 0 2rem; /* Add padding to the sides if needed */
    width: 100%; /* Ensure it takes the full width */
}

.contact-us,
.social-links,
.logo {
    flex: 1; /* Make each div take equal space */
    display: flex;
    justify-content: center; /* Center the content within each div */
    align-items: center; /* Center the content vertically */
}

.social-links {
    gap: 2rem; /* Add some space between the icons */
}

.logo img {
    height: 80px; /* Adjust as needed */
}

.pi {
    font-size: 2rem;
    color: white;
}

@media (max-width: 768px) {
  .footer {
    display: flex;
    flex-direction: column;
    height: auto; /* Adjust height for mobile */
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: center;
  }
  .footer-content {
    flex-direction: column; /* Stack the divs vertically on mobile */
    gap: 1rem; /* Add some space between the divs */
  }

  .logo {
    height: 60px; /* Smaller logo on mobile */
  }

  .social-links {
    gap: 1rem; /* Space between the icons */
  }
  p, a {
    margin: 0;
  }
}
</style>
