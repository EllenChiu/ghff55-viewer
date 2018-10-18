const fs = require('fs');
const Promise = require('bluebird');
const request = require("request");
const cheerio = require("cheerio");
var file_path = "data/filmData.json";
var max = 2008;
console.time("Start");
for (var i = 1834; i<=max; i++) {
  run(i)
}
console.time("Finish");
function run(num) {
  var goUrl = 'http://www.goldenhorse.org.tw/film/programme/films/detail/' + num;
  request({
    url: goUrl,
    method: "GET"
  }, function(e, r, b) {


    if(e || !b)  return console.log('Error');
    var $ = cheerio.load(b);
    if($('ul.breadcrumb > li.active').text() === "" || $('ul.breadcrumb > li.active').text() === null) return false;
    var res = {};
    var content = [];
    $('#scheduleList tbody tr').each(function(i, elem) {
      var schObj = {};
      var timeElement = $(elem).find("td.time");
      schObj.link = $(timeElement).find('a').attr('href');
      schObj.time = trim($(timeElement).find('b').text());
      schObj.locat = trim($(elem).find("td:last-child").find("b").text());
      content.push(schObj);
    })
    res.id = num;
    res.category = $("#ghff_id").val();
    res.subject = $('ul.breadcrumb > li.active').text();
    res.content = trim($('.margin-top').text());
    res.link = 'http://www.goldenhorse.org.tw/film/programme/films/detail/' + num;
    res.sch = content;
    res.tag = $("span.text-spot").text();
    res.director = trim($(".margin-top-lg:nth-child(4) > div").text());
    fs.appendFileSync(file_path, JSON.stringify(res)+', '); 
  })
}

// 刪除字串左右兩端的空格
function trim(str){
  str = str.replace(/\s+/g,"");
  str=str.replace( /^\s/, '');
  str=str.replace(/(\s$)/g, "");
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
