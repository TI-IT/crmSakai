const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

async function getParserHref() {
  let productList = [];
  request('https://tcmo-pro.ru/', function (error, response, body) {
    if (error) {
      console.log('Error: ' + error);
    }
    console.log('Status code: ' + response.statusCode);
    let $ = cheerio.load(body);
    const hrefs = $('a')
      .map(function () {
        return $(this).attr('href');
      })
      .get();

    let array = hrefs;
    let result = array.filter((item) => item && item.startsWith('/'));

    let text = 'https://tcmo-pro.ru';

    let newArray = [];
    array.map((i) => {
      newArray.push(text + i);
    });

    let contentString = newArray.map((line) => `${line}\n`).join('');
    fs.writeFile('myFile.txt', contentString, (err) => {
      if (err) throw err;
      console.log('File successfully written!');
    });
  });
}
module.exports = {
  getParserHref,
};
