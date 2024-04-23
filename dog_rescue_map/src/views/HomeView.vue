<template>

    <div>
        <div id="search-form">
        <h1 id="home-header">Find an Adoptable Dog Near You</h1>
        <form @submit.prevent="search">
            <input id="text-box" v-model="zip" placeholder="Please Enter Your Zip Code" />

            
            <input type="Submit" id="submit" value="Search">
        </form>
        </div>

        <DogCard id="dog-card" v-for="dog in dogs" :key="dog.id" :dog="dog" />
       
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
                    age: animal.age,
                    description: animal.description,
                    photo: animal.photos && animal.photos.length > 0 ? animal.photos[0].small : null,
                    distance: Math.round(animal.distance),
                    url: animal.url,

                }))

                this.dogs.sort((a, b) => a.distance - b.distance);

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
    border-radius: 3px;
    border: 2px solid black;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 15px;
}

#submit {
    background-color: #d61c1c;
    height: 35px;
    font-size: 1.2rem;
    border-radius: 3px;
    font-weight: 500;
    font-family: "League Spartan", sans-serif;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    transition: transform 0.2s ease;
}

#submit:hover {
    cursor: pointer;  
}

#submit:active {
    transition: transform 0.2s ease;
}


#search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 125px;
    margin-right: 300px;
}

</style>

