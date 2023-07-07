const { clear } = require("console");
const fs = require("fs");
const { finished } = require("stream");
const { API_KEY } = require("../config");

let goodgames = [];

let RandomGames = [];

let games = [];

// Pulling list of highrated games
function getHighRated() {
  goodgames = [];

  fetch(
    `https://rawg.io/api/games/?token&key=${API_KEY}&metacritic=80,100&ordering=-metacritic&dates=2022-01-01,2023-01-23&exclude_additions`
  )
    .then((res) => res.json())
    .then((data) =>
      // Grabs the IDs of 20 games and pushes it into 'goodgames' array
      {
        for (i = 0; i < 20; i++) {
          let gameID = data.results[i].id;
          goodgames.push(gameID);
        }
        // console.log(data)
        // calls this function that fetches details for each game
        getGGdetails();
        // console.log(goodgames)
      }
    )
    //  .then(data => console.log(data.results[1].id))
    .catch((error) => console.error("Error:", error));
}

function getGGdetails() {
  games = [];

  for (i = 0; i < 20; i++) {
    let slctgame = goodgames[i];
    fetch(`https://rawg.io/api/games/${slctgame}?token&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)

        let selectedProperties = {
          id: data.id,
          name: data.name,
          description: data.description,
          released: data.released,
          background_image: data.background_image,
          metacritic: data.metacritic,
          genres: data.genres.map((genres) => genres.name),
        };
        games.push(selectedProperties);
        console.log(games);

        // let jsonData = JSON.stringify(games, null, 2);

        fs.writeFileSync(
          "./seeds/gameData.json",
          JSON.stringify(games, null, 2),
          finished
        );

        // fs.appendFileSync('../../seeds/gameData.json', jsonData);
      });
  }
  // console.log(games)'

  // let jsonData = JSON.stringify(games);

  // fs.appendFileSync('../../seeds/gameData.json', jsonData);
}

getHighRated();