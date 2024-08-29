<template>
    <div class="team">
        <h1>Meet the Team</h1>
        <hr class="separator">
        <div class="lead">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Aiden Brion</h2>
                <p>President</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Benny Kitchel</h2>
                <p>Just a really cool dude tbh</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Joel Ringelstetter Jr</h2>
                <p>Lead Web Developer</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Joel Ringelstetter Jr</h2>
                <p>Lead Web Developer</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Benny Kitchel</h2>
                <p>Just a really cool dude tbh</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Joel Ringelstetter Jr</h2>
                <p>Lead Web Developer</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Joel Ringelstetter Jr</h2>
                <p>Lead Web Developer</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.team {
    padding: 2rem;
    margin-top: 5rem;
    overflow-y: auto;
    margin-bottom: 3rem;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.member {
    /* Add styling for each member section */
}
.row {
    display: flex;
    gap: 6rem;
    justify-content: center;
    flex-wrap: wrap;

}
img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    padding: 1rem;
}
.lead {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
h1 {
    font-family: 'exo ', sans-serif;
    font-weight: bolder;
    font-style: oblique;
    font-size: 3rem;
}
h2 {
    font-family: 'exo ', sans-serif;
    font-weight: 600;
}

.separator {
    width: 75%;
    height: 2px;
    background-color: #9b9494; /* Adjust color as needed */
    margin: 1rem auto; /* Centers the line and adds spacing */
    border: none;
}
</style>