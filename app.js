
// Created By Mehmet Dereli

const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey = "eNHdsF5vr/+1Ubca4DGh3A==MndS6pFohZua3xf6"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

btnEl.addEventListener("click", getJoke);


async function getJoke(){
    try {
        jokeEL.innerText = "It's coming...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
    const response = await fetch(apiURL, options);
    const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    jokeEL.innerText = data[0].joke;
    } catch (error) {
        jokeEL.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }



   
}