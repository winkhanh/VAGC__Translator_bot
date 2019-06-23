const request = require('request');
const uuidv4 = require('uuid/v4');

const subscriptionKey = "";



const CreateOption = (messages) =>
{
    return {
        method: 'POST',
        baseUrl: 'https://api.cognitive.microsofttranslator.com/',
        url: 'translate',
        qs: {
          'api-version': '3.0',
          'language': 'en',
          'to': ['vi']
        },
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-type': 'application/json',
          'X-ClientTraceId': uuidv4().toString()
        },
        body: [{
              'text': messages
        }],
        json: true,
      };
}

const Translate = (messages,setter) =>
{
    console.log(subscriptionKey);
    let options = CreateOption(messages);
    request(options, function(err, res, body){
        let response = body[0].translations[0].text;
        console.log(response);
        setter(response);
    });

}

export default Translate;