<template>

    <div>
        Find an Adoptable Dog Near You
        <form @submit.prevent="search">
            <input v-model="zip" placeholder="Please Enter Your Zip Code" />
            <input type="Submit" id="Submit">
        </form>

        <ul>
            <div v-for="dog in dogs" :key="dog.id">
                <h2>{{ dog.name }}</h2>
                <h3>{{ dog.breed }}</h3>
                <p>{{ dog.description }}</p>
                <img :id="'dog-image-' + dog.id" :src="dog.photo">
            </div>
        </ul>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                zip: '',
                dogs: [],
            }
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
                    name: animal.name,
                    breed: animal.breeds.primary,
                    description: animal.description,
                    photo: animal.photos && animal.photos.length > 0 ? animal.photos[0].small : null,

                }))
            }catch (error) {
                console.error('Error: Could not access database', error);
            }
              
        },
    },
}
</script>


<style>

img {
    max-width: 250px;
    min-width: 250px;
}

</style>

