const request = require('request');

const url = 'http://furigana.sourceforge.net/cgi-bin/index.cgi';

const generateFurigana = function(text, callback){
  request.post({url:url,formData:{text:text,state:'output'}},(err,response,body) => {
    callback(stylize(getResponse(body)))
  });
}

const getResponse = function(text){
  return text.replace(/(\r\n|\n|\r)/gm,"").match(new RegExp("<body >(.*)<form"))[1]
}

const stylize = function(text){
  return text.replace(/<rp>\(<\/rp>/g,' _(')
             .replace(/<rp>\)<\/rp>/g,')_ ')
             .replace(/(<ruby>|<rb>|<rt>|<\/ruby>|<\/rb>|<\/rt>)/g,'')
}

module.exports = generateFurigana;
