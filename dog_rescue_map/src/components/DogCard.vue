<template>
    <div id="dog-card">
    <div id="dog-img-container">
        <img id="dog-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/2560px-Cute_dog.jpg">
    </div>

    <div id="dog-details">
        <h2 id="dog-name">Dog Name</h2>
        <h3 id="dog-breed">Breed</h3>
        <h3 id="dog-description">Description</h3>
        <p>Dog Description goes here</p>

        <div class="info-page-btns">
            <button id="back-button" @click="$router.go(-1)">Back to List</button>
            <button id="more-info">Get More Info About This Dog</button>
        </div>

    </div>
</div>

</template>

<style>

#dog-card {
    display: flex;
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
    text-shadow: 2px 2px 5px black;
}

#dog-details > h2 {
    font-size: 3rem;
}

#dog-details > h3 {
    font-size: 1.3rem;
}

#dog-details > p {
    font-size: 1.1rem;
}

.info-page-btns > button {
    height: 30px;
    padding-left: 15px;
    padding-right: 15px;
    white-space: nowrap;
    text-align: center;
    border-radius: 20px;
    background-color: green;
    box-shadow: 2px 2px 5px black;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 15px;
    margin-right: 15px;
}

.info-page-btns > button:hover {
    cursor: pointer;
    background-color: blue;
    transition: .7s;
}




</style>