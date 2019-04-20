// scrape in script
// ================

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the NYTimes website
var scrape = function() {
  // Scrape the NYTimes website
  return axios.get("http://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    // Make an empty array to save our article info
    var articles = [];

$(".assetWrapper").each(function(i,e){

      // Then we grab the inner text of the this element and store it
      // to the head variable. This is the article headline
      var header = $(e).find("h2").text().trim();
      
      // Grab the URL of the article
      var url = $(e).find("a").attr("href").trim();
     
      // Then we grab any children with the class of summary and then grab it's inner text
      // We store this to the sum variable. This is the article summary
      var all = $(e).find("p").text().trim();
      
      // So long as our headline and sum and url aren't empty or undefined, do the following
      if (header && all && url) {
        
        // This section uses regular expressions and the trim function to tidy our headlines and summaries
        // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
        var headerLine = header.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var allLine = all.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        // Initialize an object we will push to the articles array
        var dataToAdd = {
          headline: headerLine,
          summary: allLine,
          url: "https://www.nytimes.com" + url
        };
        console.log("Adding: " + dataToAdd.headline);//ADDED
        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;
