const { clear } = require("console");
const fs = require("fs");
const { finished } = require("stream");
const { API_KEY } = require("../config");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
  },
};

news = [];

function getNews() {
  fetch(
    "https://videogames-news2.p.rapidapi.com/videogames_news/recent",
    options
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)

      news = [];

      for (i = 0; i < data.length; i++) {
        let newsProperties = {
          title: data[i].title,
          date: data[i].date,
          description: data[i].description,
          image: data[i].image,
          link: data[i].link,
        };
        news.push(newsProperties);
        console.log(news);

        // let jsonData = JSON.stringify(games, null, 2);

        fs.writeFileSync(
          "./seeds/newsData.json",
          JSON.stringify(news, null, 2),
          finished
        );
      }
    })
    .catch((err) => console.error(err));
}

getNews();