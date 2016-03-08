var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// set up a static fiile server that points to the 'client' directory
// we will put all angular files inside of client
app.set('port', (process.env.PORT || 8000));
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// require and runs the code from our routes.js
// pass it app so we can attach our routing rules to our express application
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});
