var express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , app = express()
    , db = require('./db')
    , cors = require('cors')
    , path = require('path')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

//ui build
/*app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
var corsOptions = {
    origin: 'http://172.16.128.107:5000',
    optionsSuccessStatus: 200,
}
*/
app.use(require('./middleware/validateSession'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/uploads'));

db.initialize
    // .then(()=>{
    //     console.log('DB Initialized');
    //     return agenda.initialize;
    // })
    .then((data)=>{
        app.listen(process.env.PORT, function() {
            console.log('app listening on port:', process.env.PORT);
        })
    })
    .catch((err) => {
        console.log('Initialization Failed:', err)
    });


// controllers
app.use(require('./controllers'));
