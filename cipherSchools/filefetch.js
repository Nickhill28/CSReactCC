function getText(){
    // read text from URL location
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    request.open('GET', 'https://terriblytinytales.com/test.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

var fs = require('fs');
var file = getText();

// read file from current directory
fs.readFile(file, 'utf8', function (err, data) {
  if (err) throw err;

  var wordsArray = splitByWords(data);
  var wordsMap = createWordMap(wordsArray);
  var finalWordsArray = sortByCount(wordsMap);

  console.log(finalWordsArray);
  console.log('The word "' + finalWordsArray[0].name + '" appears the most in the file ' +
    finalWordsArray[0].total + ' times');

  /*
    output:
    [ { name: 'he', total: 10 },
      { name: 'again', total: 7 },
      { name: 'away', total: 7 },
      ... ]
    The word "he" appears the most in the file 10 times
  */
});

function splitByWords (text) {
  // split string by spaces (including spaces, tabs, and newlines)
  var wordsArray = text.split(/\s+/);
  return wordsArray;
}


function createWordMap (wordsArray) {

  // create map for word counts
  var wordsMap = {};
  /*
    wordsMap = {
      'Oh': 2,
      'Feelin': 1,
      ...
    }
  */
  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;

}


function sortByCount (wordsMap) {

  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;

}
