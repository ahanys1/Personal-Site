// imports
const express = require('express');
const app = express();
const port = process.env.PORT;


//static files
app.use(express.static('public'));
app.use("/css", express.static(__dirname + '/public/css'));
app.use("/js", express.static(__dirname + '/public/js'));
app.use("/img", express.static(__dirname + '/public/img'));

//set views
app.set('views', './public/views');
app.set('view engine', 'ejs');

//nav
app.get('', (req,res) => {
    res.render('index',{text: 'this is variable'});
})


//listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));