<template>
    <div id="dog-card">
    <div id="dog-img-container">
        <img id="dog-image" :src="dog.photo">
    </div>

    <div id="dog-details">
        <h2 id="dog-name">Name: {{ dog.name}}</h2>
        <h3 id="dog-breed">Breed: {{ dog.breed }}</h3> 
        <h3  id="dog-age">Age: {{ dog.age }}</h3>
        <p id="dog-distance">{{ dog.distance }} miles away</p>


        <div class="info-page-btns">
            <button id="more-info-button" @click="openInNewTab(dog.url)" >Get More Info About This Dog</button>
        </div>

    </div>
</div>

</template>

<script>

export default {
    props: {
            dog: {
                type: Object,
                required: true
            }
        },

        methods: {
            openInNewTab(url) {
                window.open(url, '_blank');
            }
        }
    }


</script>

<style>

#dog-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: auto;
    margin-top: 75px;
    margin-bottom: 75px;
}

#dog-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#dog-image {
    width: 35rem;
    max-width: 300px;
    height: auto;
    border: 2px solid black;
    box-shadow: 4px 4px 15px black;
}

#dog-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    margin-right: 30px;
    color: black;
}

#dog-details > h2 {
    font-size: 2rem;
}

#dog-details > h3 {
    font-size: 1.3rem;
}

#dog-details > p {
    font-size: 1.1rem;
}

#more-info-button {
    height: 30px;
    padding: 5px 15px;
    font-family: "League Spartan", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    white-space: nowrap;
    border-radius: 3px;
    text-align: center;
    color: white;
    background-color: #d61c1c;
    

    margin-bottom: 15px;
    margin-right: 15px;
}

#more-info-button:hover {
    cursor: pointer;
    background-color: rgb(119, 118, 128);
    transition: .5s;
}




</style>