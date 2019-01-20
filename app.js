var express = require('express')
    app = express()
    bodyParser = require('body-parser')

//===============Copy-Paste-Lines=======================//
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
//========================================================//

app.get('/', (req, res) => {
    res.render('index')
});