<!-- src/components/TopBar.vue -->
<template>
    <header class="top-bar">
      <nav>
        <ul>
          <li class="logo-container">
            <router-link to="/"><img src="../assets/logo.jpeg" alt="UW-Madison SAE Club Logo" class="logo"/></router-link>
          </li>
          <li class="nav-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/sponsors">Sponsors</router-link></li>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'TopBar'
  }
  </script>
  
  <style scoped>
  /* Media Query for Mobile Devices */
/* Media Query for Mobile Devices */

  .top-bar {
    position: fixed;
    background-color: #c5050c;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    box-shadow: 0 2px 6px rgba(0, 0, 0, 1); 
    top: 0;
    left: 0;
    z-index: 1000; 
    width: 100%;
    align-self: center;
    flex-shrink: 1;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 1.5rem; /* Increase spacing for better readability */
  margin: 0;
  padding: 0;
  align-items: center;
}

nav ul li {
  display: inline-flex;
  font-family: 'exo', serif;
  font-style: italic;
  font-size: 1.4rem;
}

nav ul li a {
  
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
  color: #000000; /* Black */
}

.logo {
  height: 90px; /* Adjust as needed */
  margin-right: 1rem; /* Space between logo and first link */
}

.logo-container {
  height: 90px;
  display: flex;
  align-items: center;
}
.nav-links {
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .top-bar {
    display: flex;
    flex-direction: column;
    height: auto; /* Adjust height for mobile */
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: center;
  }

  nav ul {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    padding: 0;
    margin: 0;
    gap: 1rem; /* Space between items */
    align-items: center;
  }

  .logo-container {
    margin-bottom: 1px; /* Space below the logo */
  }

  .logo {
    height: 60px; /* Smaller logo on mobile */
  }

  .nav-links {
    display: flex;
    flex-direction: row; /* Display navigation links side by side */
    gap: 1rem; /* Space between links */
  }

  .nav-links a {
    font-size: 1.2rem; /* Reduce font size for mobile */
    color: white;
    text-decoration: none;
  }

  .nav-links a:hover {
    text-decoration: underline;
    color: #000000; /* Black */
  }
}


  </style>
  