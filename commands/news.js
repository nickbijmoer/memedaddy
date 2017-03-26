exports.run = function (client, msg, args, config, Discord) {

    let NewsAPI = require('newsapi');

    let newsapi = new NewsAPI(config.news);

    // To query articles 
    newsapi.articles({
        source: 'google-news', // required 
        sortBy: 'top' // optional 
    }).then(articlesResponse => {
        console.log(articlesResponse);
        /*
          {
            status: "ok",
            source: "associated-press",
            sortBy: "top",
            articles: [
              ...
            ]
          }
         */
    });

}
