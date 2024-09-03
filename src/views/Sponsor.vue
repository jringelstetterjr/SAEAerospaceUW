<template>
    <div class="sponsor-page">
        <h1>Sponsors</h1>
        <div class="sponsor-grid">
            <!-- Replace the placeholder images and names with your actual sponsors -->
            <div v-for="sponsor in sponsors" :key="sponsor.id" class="sponsor-item">
                <img :src="sponsor.image" :alt="sponsor.name" class="sponsor-image" />
                <p class="sponsor-name">{{ sponsor.name }}</p>
            </div>
        </div>
        <div class="sponsor-inquire">
            <h2>Interested in becoming a sponsor? Download our info packet below!</h2>
            <a :href=sponsorPacket class="downloadable" download>Download Sponsor Packet</a>
        </div>    
    </div>
</template>

<script>
import engineering from '../assets/images/sponsors/collegeofengineering.png';
import me from '../assets/images/sponsors/depmechengineering.png';
import glindustrial from '../assets/images/sponsors/glindustrial.png';
import mwes from '../assets/images/sponsors/mwes.png';
import wealthspire from '../assets/images/sponsors/wealthspire.jpg';
import sponsorPacket from '../assets/sponsor-packet.pdf';

export default {
    data() {
        return {
            sponsors: [
                {
                    id: 1,
                    name: "College of Engineering - UW Madison",
                    image: engineering,
                },
                {
                    id: 2,
                    name: "Department of Mechanical Engineering - UW Madison",
                    image: me,
                },
                {
                    id: 3,
                    name: "GL Industrial",
                    image: glindustrial,
                },
                {
                    id: 4,
                    name: "Midwest Engineered Systems",
                    image: mwes,
                },
                {
                    id: 5,
                    name: "Wealthspire Advisors",
                    image: wealthspire,
                },
                // Add more sponsors here
            ],
            sponsorPacket: sponsorPacket,
        };
    },
};
</script>

<style scoped>
.sponsor-page {
    /* Add your styles for the sponsor page container here */
    padding-top: 5rem;
    align-content: center;
    text-align: center;
    padding-bottom: 2rem;
}

.sponsor-grid {
    display: flex;
    flex-direction: column;
    gap: 16px; /* Spacing between items */
    align-items: center;
}

.sponsor-item {
    overflow: hidden;
    border-radius: 8px;
    background-color: #f5f5f5;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.sponsor-image {
    width: 90%;
    height: 90%;
    transition: transform 0.3s ease;
}

.sponsor-item:hover .sponsor-image {
    /* transform: scale(1.05); Slight zoom on hover */
}



.sponsor-name {
    /* Add your styles for the sponsor name here */
}
p {
    font-family: 'exo', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
}
h1 {
    font-family: 'exo', sans-serif;
    font-size: 2.5rem;
    font-weight: bolder;
    font-style: italic;
    margin-bottom: 1rem;
}
h2 {
    font-family: 'exo', sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 1rem;
}
a {
    font-family: 'exo', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: blue;
    transition: color 0.3s ease;
    font-style: italic;
}

@media (max-width: 768px) {
    .sponsor-page {
        padding-top: 8rem;
    }
}
</style>