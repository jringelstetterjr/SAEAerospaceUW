<!-- src/components/TopBar.vue -->
<template>
    <header class="top-bar">
      <nav>
        <ul>
          <li>
            <router-link to="/"><img src="../assets/logo.jpeg" alt="UW-Madison SAE Club Logo" class="logo"/></router-link>
          </li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <!-- Add more links as needed -->
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

  html, body {
    margin: 0;
    padding: 0;
  }

  .top-bar {
    background-color: #c5050c;
    padding: 1rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); ; 
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
  font-family: 'Orbitron', serif;
  font-style: italic;
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
  height: 70px; /* Adjust as needed */
  margin-right: 1rem; /* Space between logo and first link */
}
  </style>
  