var express = require('express');
var path = require('path');
var fortune=require('./lib/fortunes.js')

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname + '/public'));


//set app router
app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});
/*
app.get('/:name', function(req, res) {
    res.render('main', {
        name: req.params.name
    })
})*/

app.get('/about', function(req, res) {
    res.render('about',{
   		fortunes:fortune.getFortune()
    })
});

//set 404 page
app.use(function(req, res, next) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - NOT FOUND');
})

//set 500 page
app.use(function(res, req) {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Internal Error');
})

app.listen(app.get('port'), function(res, req) {
    console.log('Express started on http://localhost:' + app.get('port') + ';')
});