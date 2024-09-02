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
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Patrick Boyle</h2>
                <p>Vice President</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Ben Kitchel</h2>
                <p>Build Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Kaasyap Pothula</h2>
                <p>Secretary</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Calvin Greene</h2>
                <p>Fuselage Build Lead</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Alex Frame</h2>
                <p>Marketing Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Jason Kuehne</h2>
                <p>Aerodynamics Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Nick Tiahnybik</h2>
                <p>Treasurer</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Liam Sullivan-Koyn</h2>
                <p>Aerodynamics Sub Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Jacob Morris</h2>
                <p>Airfoil Sub Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Sean Grubis</h2>
                <p>Electronics Lead</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Niklas Barret</h2>
                <p>Structural Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Nick Stott</h2>
                <p>Landing Gear Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Ethan Bagshaw</h2>
                <p>Fuselage Design Lead</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>TJ Weingart</h2>
                <p>Build Sub Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Joel Ringelstetter Jr</h2>
                <p>Web Design Lead</p>
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
    flex-wrap: nowrap;
}

.member {
    /* Add styling for each member section */
}
.row {
    display: flex;
    gap: 6rem;
    justify-content: center;
    flex-wrap: nowrap;

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
    flex-wrap: nowrap;
}
h1 {
    font-family: 'exo', sans-serif;
    font-weight: bolder;
    font-style: oblique;
    font-size: 3rem;
}
h2 {
    font-family: 'exo', sans-serif;
    font-weight: 600;
    line-height: 1;
}

.separator {
    width: 75%;
    height: 2px;
    background-color: #9b9494; /* Adjust color as needed */
    margin: 1rem auto; /* Centers the line and adds spacing */
    border: none;
}
p {
    font-family: 'exo', sans-serif;
    font-size: 1.3rem;
    line-height: 1.1;
    font-weight: 200;
    text-align: center;
}
</style>