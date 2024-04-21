<template>

    <div>
        <div id="search-form">
        <h1 id="home-header">Find an Adoptable Dog Near You</h1>
        <form @submit.prevent="search">
            <input id="text-box" v-model="zip" placeholder="Please Enter Your Zip Code" />
            <input type="Submit" id="Submit">
        </form>
        </div>

        <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog" />
       
    </div>
</template>

<script>
import DogCard from '@/components/DogCard.vue';


    export default {
        data() {
            return {
                zip: '',
                dogs: [],
            }
        },

        components: {
            DogCard
        },

        methods: {
           async search() {

            try {
                const tokenResponse = await fetch('https://api.petfinder.com/v2/oauth2/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        grant_type: 'client_credentials',
                        client_id: 'mvgH7i4YnXRURzq2tTH8wTkGD7t8RWiChFJ3eWCcCBy632SzId',
                        client_secret: 'f7tStA6eC14xrRree1ZMMZyFjhyVfI2v0SPJYLZO',

                    }),
                });
                const { access_token } = await tokenResponse.json();


                const res = await fetch(`https://api.petfinder.com/v2/animals?type=dog&location=${this.zip}&output=basic&format=json&limit=75`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });
                const data = await res.json();
                console.log(data);

                this.dogs = data.animals
                
                .filter(animal => animal.photos && animal.photos.length > 0)
                .filter(animal => !animal.name.includes("HOLD"))
                
                .map(animal => ({
                    id: animal.id,
                    name: animal.name.split(' ')[0],
                    breed: animal.breeds.primary,
                    description: animal.description,
                    photo: animal.photos && animal.photos.length > 0 ? animal.photos[0].small : null,
                    distance: animal.distance,

                }))

                this.dogs.sort((a, b) => a.distance -b.distance);

            }catch (error) {
                console.error('Error: Could not access database', error);
            }
              
        },
    },
}
</script>


<style>

#home-header {
    font-size: 3rem;
    text-shadow: 2px 2px 5px black;
}

#text-box {
    height: 30px;
    width: 225px;
    border-radius: 5px;
    border: 2px solid black;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 15px;
}

img {
    max-width: 250px;
    min-width: 250px;
}

#search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
}

</style>

