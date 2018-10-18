const fs = require('fs');
const Promise = require('bluebird');
const request = require("request");
const cheerio = require("cheerio");
var file_path = 'data/category.json'

request({
  url: 'http://www.goldenhorse.org.tw/film/programme/films/?search_year=2018&parent_id=286',
  method: "GET"
}, function(e, r, b) {
  if(e || !b)  return console.log('Error');
  var $ = cheerio.load(b);
  var searchBlock = $("#search_list > span");
  var idRegex = /movie_alt_/g
  var res = []
  $("#search_list > span").each(function(i, elem) {
    var obj = {};
    obj.id = $(elem).attr('id').replace(idRegex, '');
    obj.text = $(elem).find('div.fauxcell').text();
    res.push(obj)
    fs.appendFileSync(file_path, JSON.stringify(res)+', ');

  })
})
