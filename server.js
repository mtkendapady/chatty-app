const express = require( "express" );
  //console.log( express );

const app = express();

const bodyParser = require( "body-parser" );

const port = 8000;

app.use( bodyParser.json());

let messages = [];

app.get("/", (req, res) => {
  res.status(200).set( {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  })
  .send(JSON.stringify(messages));
});

app.post('/', function( req, res ) {

  messages.push( {
    message: req.body.message,
    time: new Date()
  } );

    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));

});

app.options('/', function(req, res, next){
  res.status(200).set( {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  })
  .send(JSON.stringify(messages));
});






app.listen( port, () => console.log( `I'm watching you on ${ port }`) );
