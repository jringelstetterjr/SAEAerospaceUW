<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="contact-us">
                <h3>Contact Us</h3>
                <p>Email: example@example.com</p>
            </div>
            <div class="logos">
                <!-- Add your logos here -->
            </div>
            <div class="social-links">
                <!-- Add your social links here -->
            </div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
.footer {
    bottom: 0;
    left: 0;
    position: static;
    width: 100%;
    background-color: black;
    color: white;
    box-shadow: 0px 0px 6px rgb(0, 0, 0); 
    height: auto;
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

.logos {
    flex: 1;
    display: flex;
    justify-content: center;
}

.social-links {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

h3 {
    margin-bottom: 10px;
    font-family: 'rajdhani', sans-serif;
}

p {
    margin: 0;
    font-family: 'rajdhani', sans-serif;
}
</style>