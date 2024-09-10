<template>
    <metainfo></metainfo>
    <div class="team">
        <h1>Meet the Team</h1>
        <hr class="separator">
        <h2>Administration</h2>
        <div class="lead">
            <div class="member">
                <img src="../assets/images/team/aiden.jpeg" alt="Adion Brion">
                <h3>Aiden Brion</h3>
                <p>President, Secretary</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/kuehne.jpeg" alt="Member 2">
                <h3>Jason Kuehne</h3>
                <p>Vice President</p>
            </div>
        </div>
        <hr class="separator">
        <h2>Build Team</h2>
        <div class="lead">
            <div class="member">
                <img src="../assets/images/team/pat.jpeg" alt="Member 1">
                <h3>Patrick Boyle</h3>
                <p>Mechanical Director</p>
            </div>
        </div>
        <hr class="separator-team">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/benny.jpeg" alt="Member 1">
                <h3>Ben Kitchel</h3>
                <p>Structural Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/grubis.jpeg" alt="Member 2">
                <h3>Sean Grubis</h3>
                <p>Controls Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/barrett.jpeg" alt="Member 1">
                <h3>Niklas Barrett</h3>
                <p>Aerodynamics Lead</p>
            </div>
        </div>
        <hr class="separator-team">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stott.jpeg" alt="Member 1">
                <h3>Nick Stott</h3>
                <p>Fuselage Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/morris.jpeg" alt="Member 2">
                <h3>Jacob Morris</h3>
                <p>Fuselage Sub Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/pothula.jpeg" alt="Member 2">
                <h3>Kaasyap Pothula</h3>
                <p>Landing Gear Co-Lead</p>
            </div>
        </div>
        <hr class="separator-team">
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/weingart.jpeg" alt="Member 1">
                <h3>TJ Weingart</h3>
                <p>Landing Gear Co-Lead</p>
            </div>
            <div class="member">
                <img src="../assets/images/team/nurse.jpeg" alt="Member 1">
                <h3>Julius Nurse</h3>
                <p>Controls Sub Lead</p>
            </div>
        </div>
        <hr class="separator">
        <h2>Business</h2>
        <div class="lead">
            <div class="member">
                <img src="../assets/images/team/frame.jpeg" alt="Member 1">
                <h3>Alex Frame</h3>
                <p>Business Director</p>
            </div>
        </div>
        <hr class="separator-team">
        <div class="row">        
            <div class="member">
                <img src="../assets/images/team/aiden.jpeg" alt="Adion Brion">
                <h3>Aiden Brion</h3>
                <p>Sponsorship and Fundraising Lead, Documentation Lead</p>
            </div>
            <!-- <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h3>Joel Ringelstetter Jr</h3>
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
    font-size: 2.5rem;
    margin-top: 2rem;
}
h3 {
    font-family: 'exo', sans-serif;
    font-weight: 600;
    line-height: 1;
}

.separator {
    width: 75%;
    height: 3px;
    background-color: #6b6464; /* Adjust color as needed */
    margin: 1rem auto; /* Centers the line and adds spacing */
    border: none;
}
.separator-team {
    width: 75%;
    height: 2px;
    background-color: rgb(230, 226, 226); /* Adjust color as needed */
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
p.subtitle {
    font-size: 13px;
    font-style: italic;
    font-weight: 200;
    margin-top: -0.5rem;
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