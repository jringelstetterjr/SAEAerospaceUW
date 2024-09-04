<template>
    <metainfo></metainfo>
    <div class="team">
        <h1>Meet the Team</h1>
        <hr class="separator">
        <div class="lead">
            <div class="member">
                <img src="../assets/images/team/aiden.jpeg" alt="Adion Brion">
                <h2>Aiden Brion</h2>
                <p>President</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/pat.jpeg" alt="Member 1">
                <h2>Patrick Boyle</h2>
                <p>Vice President</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/benny.jpeg" alt="Member 1">
                <h2>Ben Kitchel</h2>
                <p>Build Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/pothula.jpeg" alt="Member 2">
                <h2>Kaasyap Pothula</h2>
                <p>Secretary</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/frame.jpeg" alt="Member 1">
                <h2>Alex Frame</h2>
                <p>Marketing Lead</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/kuehne.jpeg" alt="Member 2">
                <h2>Jason Kuehne</h2>
                <p>Aerodynamics Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/morris.jpeg" alt="Member 2">
                <h2>Jacob Morris</h2>
                <p>Airfoil Sub Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/grubis.jpeg" alt="Member 2">
                <h2>Sean Grubis</h2>
                <p>Electronics Lead</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/barrett.jpeg" alt="Member 1">
                <h2>Niklas Barrett</h2>
                <p>Structural Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/weingart.jpeg" alt="Member 1">
                <h2>TJ Weingart</h2>
                <p>Build Sub Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/stott.jpeg" alt="Member 1">
                <h2>Nick Stott</h2>
                <p>Landing Gear Lead</p>
            </div>
        </div>
        <hr class="separator">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/nurse.jpeg" alt="Member 1">
                <h2>Julias Nurse</h2>
                <p>Modeling Team Lead</p>
            </div>
            <!-- <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Joel Ringelstetter Jr</h2>
                <p>Web Design Lead</p>
            </div> -->
        </div>
    </div>
</template>
<script>
import { useMeta } from "vue-meta";
export default {
    setup() {
        useMeta({
        title: "Team Page - SAE Aero UW",
        meta: [
            { name: "description", content: "A list of team members currently participating in SAE Aero UW Madison." },  
        ],
        });
    }
}
  </script>
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

@media (max-width: 768px) {
    .team {
        padding: 1rem;
        margin-top: 2rem;
        padding-top: 6.5rem;
    }
    .lead {
        flex-direction: row;
        gap: 1rem;
    }

    .row {
        display: flex;
        flex-direction: row; /* Stack items vertically on mobile */
        flex-wrap: wrap;
        gap: 1rem; /* Reduce spacing between items */
    }

    .member img {
        width: 130px; /* Smaller images for mobile */
        height: 130px;
        gap: 0.5rem;
        justify-content: center;
    }

    h1 {
        font-size: 2rem; /* Smaller heading for mobile */
    }

    p {
        font-size: 1rem; /* Smaller font size for mobile */
    }
}
</style>