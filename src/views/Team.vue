<template>
    <div class="team">
        <h1>Our Team</h1>
        <div class="row">
            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 1">
                <h2>Benny Kitchel</h2>
                <p>Just a really cool dude tbh</p>
            </div>

            <div class="member">
                <img src="../assets/images/team/stock.jpg" alt="Member 2">
                <h2>Joel Ringelstetter Jr</h2>
                <p>"AI Web Expert" according to Aiden</p>
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}
</style>