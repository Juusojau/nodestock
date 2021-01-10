// Stock Market Portfolio app by Juusojau

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require(`path`);


const PORT = process.env.PORT || 5000;

// set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "This is other stuff";

// set Handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
    	stuff: otherstuff
    });
});



// Set static folder
app.use(express.static(path.join(__dirname, `Public`))); 


app.listen(PORT, () => console.log('Server Listening on port ' + PORT));

