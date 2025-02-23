const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "CJJZb7jOtbu/aHabb5jXCQ==6bBBd27HmwHa4drN"

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};  

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";


async function getJoke() {


    try {
        
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
    
        const response = await fetch (apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke";
    
        jokeEl.innerText = data[0].joke;
        
    } catch (error) {

        jokeEl.innerText = "An error happened, try again later 😥";

        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke";

        console.log (error);   
    }

    // jokeEl.innerText = "Updating...";
    // btnEl.disabled = true;
    // btnEl.innerText = "Loading...";

    // const response = await fetch (apiURL, options);
    // const data = await response.json();

    // btnEl.disabled = False;
    // btnEl.innerText = "Tell Me a Joke";

    // jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener ("click", getJoke)

