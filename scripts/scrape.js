//where does it get called from?
var axios = require("axios");
var cheerio = require("cheerio");
var request = require('request');

var scrape = function (url,cb){
    if (url === "https://paddlercbc.org/about/programs") {
        axios.get(url).then(function(response) {
            var $ = cheerio.load(response.data);
            var result = {};        
			$("h5").each(function(i, element) {		
		   result.title = $(this).text();
		   result.summary = "  ";
           result.link = "  ";
        });
            cb(result);
        });
    };
};

module.exports = scrape;